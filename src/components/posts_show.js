import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import { Link } from 'react-router-dom'

class PostsShow extends Component {

  class PostsIndex extends Component {
    componentDidMount(){
      const { id } = this.props.match.params.id
      // ^ This method comes from react-router, params object holds all symbols in the url
      this.props.fetchPost(id)
    }
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
  return { post, posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
