import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Test from './Component/Test'
class App extends Component{
    constructor(props){
      super(props)
      this.state={
          isRender:true
      }
    }
   render(){
     return(
       <div> 这是父组件
    { this.state.isRender?<Test></Test>:""}
       
        <button type='button' onClick={()=>{this.setState({})}}>父组件点击更新</button>
        <button type='button' onClick={()=>{this.setState({isRender:!this.state.isRender})}}>销毁组件</button>
       </div>
     )
   } 
}

export default App