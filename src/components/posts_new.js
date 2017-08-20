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
      </div>
    )
    // field.input is an object which contains event handlers and props, the '...' allows all of
    // these props to be communicated to the input tag. Most pre-generated event handlers come through this.
  }


  render() {
    // The component property of field is what will actually be used to render
      // the JSX as is needed, you need to pass it a function and that function will
      // handle the rendering
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField} />
        <Field
          label="Tags"
          name="tags"
          component={this.renderField}
          />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
          />
      </form>
    )
  }
}

export default reduxForm({
  // The string assigned to this form property needs to be unique
  form: 'PostsNewForm'
})(PostsNew)

// When connect helper is used, we use map state to props and map dispatch to props
