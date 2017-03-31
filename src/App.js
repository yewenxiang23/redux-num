import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getComment} from './actions/commentAction';
class App extends Component{
  componentWillMount(){
    this.props.getComment()
  }
  render(){
    let comments = this.props.comments.map((item,index)=>
      <li key={index}>{item.commentBody}</li>
    )
    console.log(this.props.comments)
    return (
      <div>
          {this.props.comments.length}评论:
          <ul>
            {comments}
          </ul>
      </div>
    )
  }
}
App.propTypes = {
  getComment:React.PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {comments: state}
}
export default connect(mapStateToProps,{getComment})(App);
