import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

export class Posts extends Component {
  componentWillMount = () => {
    this.props.fetchPosts();
  }

  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  
  render() {
    const displayPost = this.props.posts.map(p => (
      <div key={p.id}>
        <h3>{p.id} {p.title} </h3>
        <p> {p.body} </p>
      </div>
    ))

    return (
      <div>
        <h1> POSTS </h1>
        {displayPost}
      </div>
    )
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = (state) => ({
  // this is the name given in index.js reducers for postreducers:this is the name of the element in the  initial state of posts
  posts: state.posts.posts,
  newPost: state.posts.newPost
})

export default connect(mapStateToProps, {fetchPosts})(Posts)
