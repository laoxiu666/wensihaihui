import React ,{ Component } from "react";

export default class Test extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        
      }
      console.log("construct");
      // console.log(this.setStatew)
    }

    componentDidMount(){
      console.log("组件完成加载   didMount");
      
    }
     componentWillMount(){
       console.log("组件即将加载   willMount");
     }
    componentWillReceiveProps(){
      console.log('组件将要接受数据');
      
    }

    componentWillUpdate(){
      console.log("组件将要更新");
    }

    componentDidUpdate(){
      console.log("组件已经更新");
      
    }
    shouldComponentUpdate(){
      console.log("组件需要更新吗");
      return true
    }
    
  
    render(){
      console.log("render")
      console.log(this.setState)
      return(
        <div>test
          <button type='button' onClick={()=>{this.setState({})}}>点击更新</button>
        </div>
      )
    }
  
}