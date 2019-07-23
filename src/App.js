import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { List, InputItem, Toast , Button,Switch} from 'antd-mobile';
import styles from './test.scss'
import 'antd-mobile/dist/antd-mobile.css'
// import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
const Item = List.Item;
class App1 extends React.Component {
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
    if (value.replace (/\s/g, '').length < 11) {
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




  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        // alert('Validation failed');
        Toast.info('错误，提交失败');
      }
    });
  }

  onReset = () => {
    this.props.form.resetFields();
    console.log(111);
    
    console.log(this.props.form);
    
  }
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('至少六位数'));
    }
  }
  render() {
    const { getFieldProps,getFieldError } = this.props.form;
    return (
      
      <div>
        <List renderHeader={() => 'Confirm when typing'}>
           {/* =================================== */}

<InputItem
          {...getFieldProps('account', {
            // initialValue: 'little ant',
            rules: [
              { required: true, message: '请输入关键字' },
              { validator: this.validateAccount },
            ],
          })}
          clear
          error={!!getFieldError('account')}
          onErrorClick={() => {
            console.log(2222);
            
            // alert(getFieldError('account').join('、'),1);
            Toast.info(getFieldError('account').join('、'));
            // if (this.state.hasError) {
            //   Toast.info('请输入字');
            // }
          }}
          placeholder="please input account"
        >姓名</InputItem>

           {/* ====================== */}
           <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="auto focus"
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>

          <InputItem
            type="phone"
            clear
            placeholder="input your phone"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >手机号码</InputItem>
        
        <List.Item
          extra={<Switch
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked,
              });
            }}
          />}
        >Off</List.Item>

           <Item>
          <Button type="primary" size="small" inline onClick={this.onSubmit}>Submit</Button>
          <Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>Reset</Button>
        </Item>
        </List>
        <div className={`${styles.bot}`}>这是</div>
      </div>
    );
  }
}
const App = createForm()(App1);
export default App