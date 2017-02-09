import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()
    this.state = { userName: '', hometown: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handleHometown = this.handleHometown.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', payload: this.state})
  }

  handleUsername(event){
    this.setState({userName: event.target.value})
  }

  handleHometown(event){
    this.setState({hometown: event.target.value})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
            <input id='userName' type="text" onChange={this.handleUsername} value={this.state.userName}/>
          <label>Hometown</label>
            <input id='hometown' type="text" onChange={this.handleHometown} value={this.state.hometown}/>
            <input type="button" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default UserInput;
