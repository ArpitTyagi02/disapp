import { Route, Switch,Link } from 'react-router-dom';
import React, { Component } from 'react'
import './Login.css'
import profile1 from '../Assets/profile.png'
import {Profile} from './Profile'

export class Login extends Component {
    state={
        email:'',
        pwd:'',
        count:0
    }
    handleChange=(e)=>{
     const {name,value}=e.target
     this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    this.props.isLogin(true)
    }

    handleRegister=(e)=>{
        e.preventDefault();
        this.props.isRegistration(true)
    }
    render() {
        return (
            <div className='div-login'>
                <div className='div-login-img'>
                    <img src={profile1} alt='Login Picture'/>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' placeholder='email..' required onChange={this.handleChange}/>
                    <input type='password' name='pwd' placeholder='Password..' required onChange={this.handleChange}/>
                    <button onSubmit={this.handleSubmit} className='loginButton'>Log In</button>
                    <button className='loginButton' onSubmit={this.handleRegister}>Registration</button>
                </form>
                
            </div>
        )
    }
}

export default Login