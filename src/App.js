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
       </div>
     )
   } 
}

export default App