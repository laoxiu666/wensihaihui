import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/hotelAdd/pages/App';
import * as serviceWorker from './serviceWorker';

// class App extends Component {
//    constructor(){
//      super()
//      this.state={
//        name:'age'
//      }
//    }
   

//    handeChange1=(e)=>{
//      console.log(e);
     
//      this.setState({
//        name:e.target.value
//      })
//    }
//    render(){
//      return(
//        <div>
//          <input type='text' value={this.state.name} onChange={this.handeChange1} />
//        </div>
//      )
//    }
// }

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
