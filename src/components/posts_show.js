import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router-dom'

class PostsShow extends Component {

  componentDidMount(){
    // Had a problem here do to a poor understanding of how exactly decoupling works
    const { id } = this.props.match.params
    // ^ This method comes from react-router, params object holds all symbols in the url
    this.props.fetchPost(id)
  }

  onDeleteClick(){
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { post } = this.props

    // A check like this is the normal way of handling loading, these checks are fairly standard
    if(!post){
      return <div>Loading...</div>
    }

    return(
      <div>
        <Link to="/">Back to Index</Link>
        <button className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  // this.props === ownProps.
  // This approach makes the most sense when you hold all the mapStateToProps functions in their own separate files
  return { post:posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
