import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Test from './Component/Test'
export default class App extends Component{
    constructor(props){
      super(props)
      this.state={
          isRender:true
      }
      console.log("constructor 父组件");
    };
  
    
    componentWillMount(){
      console.log("父组件 WillMount");  
    }
  
    componentDidMount(){
      console.log("父组件 DidMount");
      
    }


    componentWillReceiveProps(){
      console.log('父组件将要接受数据  WillReceiveProp');
      
    }

    componentWillUpdate(){
      console.log("父组件将要更新   WillUpdate");
    }

    componentDidUpdate(){
      console.log("父组件已经更新    DidUpdate");
      
    }
    shouldComponentUpdate(){
      console.log("父组件需要更新吗    shouldComponentUpdate");
      return true
    }
    
   componentWillUnmount(){
     console.log('父组件将要卸载   WillUnmount');
     clearInterval (this.timeId)
     
   }
   render(){
     console.log("render 父组件");
     
     return(
       <div> 这是父组件
    { this.state.isRender?<Test></Test>:""}
       
        <button type='button' onClick={()=>{this.setState({})}}>父组件点击更新</button>
        <button type='button' onClick={()=>{this.setState({isRender:!this.state.isRender})}}>销毁组件</button>
       </div>
     )
   } 
}
