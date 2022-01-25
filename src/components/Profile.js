import React, { Component } from 'react';
import './Profile.css'

export class Profile extends Component {
    constructor(props) {
      super(props)
      this.state = {
         username:'', 
         comments:'',
         topic:''
      }
    }
    handleUserChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleUserComments=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
       console.log(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    
  render() {
      let {username,comments,topic}=this.state;
    return (
        <form onSubmit={this.handleSubmit} className='Formdesign'>
        <div>
            <h1 className='UserTitle'>Registration</h1>
            <label className='UserName'>First Name</label>
            <br/>
            <input 
            className='UserNameValue'
            type="text"
            value={username} 
            placeholder='Enter First Name'
            onChange={this.handleUserChange}/>
        </div>
        {/* <div>
            <label className='UserName'>First Name</label>
            <br/>
            <input 
            className='UserNameValue'
            type="text"
            value={username} 
            placeholder='Enter First Name'
            onChange={this.handleUserChange}/>
        </div>
        <div>
            <label className='UserName'>First Name</label>
            <br/>
            <input 
            className='UserNameValue'
            type="text"
            value={username} 
            placeholder='Enter First Name'
            onChange={this.handleUserChange}/>
        </div> */}
        <div>
            <label className='UserName'>Comments</label>
            <br/>
            <textarea 
            value={comments}
            className='UserComments'
            onChange={this.handleUserComments}
            placeholder='Enter Comments'
            > </textarea>
        </div>
        <div>
            <label className='UserNameTopic'>Topic</label>
            <br/>
                <select value={topic} onChange={this.handleTopicChange} className='UserTopic'> 
                    <option value="react" className='UseTopicDesign'>React 1</option>
                    <option value="react1" className='UseTopicDesign'>React 2</option>
                    <option value="react2" className='UseTopicDesign'>React 3</option>
                </select>
        </div>
        <br/>
        <button type='submit'className='UserSubmit'>Submit</button>
    </form>
    )
    
  }
}

export default Profile;
