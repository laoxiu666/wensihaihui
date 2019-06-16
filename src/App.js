import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component{
    constructor(props){
      super(props)
      this.state={
          
      }
    }
   render(){
     return(
       <div> 这是父组件
         <div>子组件</div>
         <div>经理操作</div>
         <div>经理这是我的操作</div>
         <div>加个分支dev经理修改</div>
       </div>
     )
   } 
}

export default App