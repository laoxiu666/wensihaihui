import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { List, InputItem, Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
// import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
class App extends React.Component {
  state = {
    hasError: false,
    value: '',
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      
      <div>
        <List renderHeader={() => 'Confirm when typing'}>

           <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="auto focus"
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>

          <InputItem
            type="phone"
            placeholder="input your phone"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >手机号码</InputItem>
        </List>
      </div>
    );
  }
}

export default App