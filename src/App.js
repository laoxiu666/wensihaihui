import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { List, InputItem, Toast , Button} from 'antd-mobile';
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
  // onChange = (value) => {
  //   if (value.replace(/\s/g, '').length < 11) {
  //     this.setState({
  //       hasError: true,
  //     });
  //   } else {
  //     this.setState({
  //       hasError: false,
  //     });
  //   }
  //   this.setState({
  //     value,
  //   });
  // }




  onSubmit = () => {
    console.log(3);
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(6);
        console.log(this.props.form.getFieldsValue());
      } else {
        // alert('Validation failed');
        console.log(7);
        Toast.info('提交失败,请将信息填完整');
      }
    });
  }

  onReset = () => {
    this.props.form.resetFields();
    
    
    console.log(this.props.form);
    
  }
  validateAccount = (rule, value, callback) => {
    console.log(2);
    if (value && value.length > 4) {
      console.log(999);
      callback();
    } else {
      console.log(111);
      //这里回调是下面的那个对应标签的onErrorClick
      callback(); 
    }
  }
  render() {
    const { getFieldProps,getFieldError } = this.props.form;
    return (
      
      <div>
        <List renderHeader={() => 'Confirm when typing'}>
           {/* =================================== */}

         <InputItem
          {...getFieldProps('userName', {
            // initialValue: 'little ant',
            rules: [
              { required: true, message: '姓名不能为空' },
              { whitespace: true },
              { validator: this.validateAccount },
            ],
          })}
          clear
          error={!!getFieldError('userName')}
          onErrorClick={() => {
            console.log(2222);
            console.log(getFieldError('userName'));
            // getFieldError('account')="姓名不能为空1"
            // alert(getFieldError('account').join('、'),1);
            Toast.info(getFieldError('userName').join('、'));
            // if (this.state.hasError) {
            //   Toast.info('请输入字');
            // }
          }}
          placeholder="please input account"
        >姓名</InputItem>



             <InputItem
          {...getFieldProps('shcool', {
            // initialValue: 'little ant',
            rules: [
              { required: true, message: '学校不能为空' },
              { whitespace: true },
              { validator: this.validateAccount },
            ],
          })}
          clear
          error={!!getFieldError('shcool')}
          onErrorClick={() => {
            console.log(2222);
            console.log(getFieldError('shcool'));
            // getFieldError('account')="姓名不能为空1"
            // alert(getFieldError('account').join('、'),1);
            // Toast.info(getFieldError('shcool').join('、'));
            Toast.info(getFieldError('shcool'));
            // if (this.state.hasError) {
            //   Toast.info('请输入字');
            // }
          }}
          placeholder="please input account"
        >学校</InputItem>
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

           <Item>
          <Button type="primary" size="small" inline onClick={this.onSubmit}>Submit</Button>
          <Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>Reset</Button>
        </Item>
        </List>
      </div>
    );
  }
}
const App = createForm()(App1);
export default App