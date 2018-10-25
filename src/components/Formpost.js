import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { newPost } from "../actions/postActions"

export class Formpost extends Component {
  constructor(props) {
    super(props)

    this.state = {
       title: '',
       body: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  onSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      body: this.state.body
    };
    //call action - newPost
    this.props.newPost(data)
  }

  render() {
    return (
      <div>
        <h1> ADD A POST </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <input type="text" name="title" onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <textarea name="body" onChange={this.onChange} />
          </div>
          <br />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
Formpost.PropTypes = {
  newPost: PropTypes.func.isRequired
}
// const mapStateToProps = state => ({});

export default connect(
  null,
  {newPost}
)(Formpost);
