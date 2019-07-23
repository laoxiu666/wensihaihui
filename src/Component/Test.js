import React ,{ Component } from "react";

export default class Test extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        time:new Date()
      }
      console.log("construct");
      // console.log(this.setStatew)
      // this.timeId=setInterval(this.tick,1000)

    }
    tick=()=>{
      this.setState({
        time:new Date()
      })
    }

    componentDidMount(){
      console.log("组件完成加载   didMount");
      
    }
     componentWillMount(){
       console.log("组件即将加载   willMount");
     }
    componentWillReceiveProps(){
      console.log('组件将要接受数据  WillReceiveProp');
      
    }

    componentWillUpdate(){
      console.log("组件将要更新   WillUpdate");
    }

    componentDidUpdate(){
      console.log("组件已经更新    DidUpdate");
      
    }
    shouldComponentUpdate(){
      console.log("组件需要更新吗    shouldComponentUpdate");
      return true
    }
    
   componentWillUnmount(){
     console.log('组件将要卸载   WillUnmount');
     clearInterval (this.timeId)
     
   }
    render(){
      console.log("render")

      return(
        <div>test

         <p>{this.state.time.getSeconds()}</p>
          <button type='button' onClick={()=>{this.setState({})}}>点击更新</button>
          <button type='button' onClick={()=>{this.forceUpdate( )}}>点击更新</button>
        </div>
      )
    }
  
}