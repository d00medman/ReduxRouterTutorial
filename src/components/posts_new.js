import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

  // This is the component method which will be going into the render method
  renderField(field) { // The field argument tells this function what it is targeting
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
          />
        {field.meta.error}
      </div>
    )
    // field.input is an object which contains event handlers and props, the '...' allows all of
    // these props to be communicated to the input tag. Most pre-generated event handlers come through this.

    // Validate function automatically adds the meta.error property to the field, this is how front end error handling is done
  }

  onSubmit(values) {
    console.log(values)
  }


  render() {
    // The handle submit is a property being passed to the props by redux form
    const { handleSubmit } = this.props
    // The component property of field is what will actually be used to render
      // the JSX as is needed, you need to pass it a function and that function will
      // handle the rendering

    // handleSubmit is taking a method that we define and running that if redux-form clears it for submittal
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
          />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
          />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values) {
  // console.log(values) -> {titles:'test', categories:'test', content:'test'}
  const errors = {}

  // as can be presumed, validation is largely handled by if statements
  if(!values.title){
    errors.title = 'enter a title'
  }
  if(!values.categories){
    errors.categories = 'enter a category'
  }
  if(!values.content){
    errors.content = 'enter a body'
  }

  // validate the input from values

  // If errors is empty, the form is fine to submit
  // if errors has any properties whatsoever, redux will assume the form is invalid
  return errors
}

export default reduxForm({
  validate, // The addition of this property causes the redux form function to be fired automatically
  // The string assigned to this form property needs to be unique
  form: 'PostsNewForm'
})(PostsNew)

// When connect helper is used, we use map state to props and map dispatch to props
