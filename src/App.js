import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import React from 'react';
import NoMatch from './components/404Page';
import Profile from './components/Profile';


class App extends React.Component {
  state={
    isLog:false
  }
  handleLogin=(isLog)=>this.setState({isLog})
  render(){
   const{isLog}=this.state;
    return (
      <div>
      <Switch>
        {
          !isLog ? 
           <Route  path="/" render={()=> <Login isLogin={this.handleLogin}/>}/>
          :
          <Route path="/" render={()=> <Home/>}/>
        }
      <Route path='*' component={NoMatch} />
      </Switch> 
      {/* <Login/> */}
      </div>
    );
  }
  
}

export default App;
