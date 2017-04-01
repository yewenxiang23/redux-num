import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getUsername} from './actions/usernameAction';
class App extends Component{
  handleFrom(e){
    e.preventDefault();
    let data = {
      username:this.refs.username.value,
      password:this.refs.password.value
    }
    this.props.getUsername(data)
    this.refs.loginForm.reset()
  }
  render(){
    let styles={
      display:"inline-block",
      width:"100px",
      textAlign:"right"
    }
    let buttonStyles={
      display:"block",
      margin:"10px auto"
    }
    let formStyles={
      width:"300px"
    }
    return (
      <div>
        <span>欢迎你:{this.props.username}</span>
        <form onSubmit={this.handleFrom.bind(this)} style={formStyles} ref="loginForm">
          <label style={styles}>用户名:</label>
          <input type="text" placeholder="username" ref="username"/><br/>
          <label style={styles}>用户密码:</label>
          <input type="password" placeholder="password" ref="password"/><br/>
          <button type="submit" style={buttonStyles}>登录</button>
        </form>
      </div>
    )
  }
}
App.propTypes = {
  getUsername:React.PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {username: state.username}
}
export default connect(mapStateToProps,{getUsername})(App);
