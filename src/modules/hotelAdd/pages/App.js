import React, { Component } from 'react';
import CalendarHotel from './Calendar'
import styles from './app.scss';
// import { createForm } from 'rc-form';
import { Form, Row, Col, Input, Button,DatePicker,Modal,Upload, Icon,Checkbox } from 'antd';
const {  RangePicker } = DatePicker;
 class App extends Component {
  state = {
    expand: false,
    visible: false 
  };



  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };
 
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

 plainOptions = ['Apple', 'Pear', 'Orange'];
 onChange=(checkedValues)=> {
  console.log('checked = ', checkedValues);
}
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span:4 },
        sm: { span: 4 },
      }, 
      wrapperCol: {
        xs: { span: 8 },
        sm: { span: 12 },
      },
    };
    return (
      
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch} >
          <Form.Item label={"名称"} {...formItemLayout} >
            {getFieldDecorator("userName", {
              rules: [
                { 
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
      

      <Form.Item label="选择" {...formItemLayout} >
          {getFieldDecorator('range-picker', {
            rules: [
              { type: 'array', required: true, 
              message: 'Please select time!' }
            ],
          })(<RangePicker />)}
        </Form.Item>
        
        <Form.Item label="属性" {...formItemLayout} >
          {getFieldDecorator('roomProperty', {
            initialValue:['Apple','Pear'],
            rules: [
              { required: true, 
              message: '请选择' }
            ],
          })( 
            <Checkbox.Group options={this.plainOptions} onChange={this.onChange} />
          )}
        </Form.Item>

         <Form.Item label="房态设置" {...formItemLayout} >
          {getFieldDecorator('roomStatus', {
            rules: [
              { required: true, 
              message: '请设置' }
            ],
          })( 
           <div>
            <Button  onClick={this.showModal}>
            <Icon type="setting" /> 设置
            </Button>
          </div>
          )}
        </Form.Item>

        <Form.Item label="房态&价格" {...formItemLayout} >
          {getFieldDecorator('roomStatusAndPrice', {
            rules: [
              { required: true, 
              message: '请设置' }
            ],
          })( 
            <CalendarHotel></CalendarHotel>
          )}
        </Form.Item>

        <div className={styles.priceBtn}>价格的的多少</div> 
        <Form.Item label="上传图片" {...formItemLayout} >
          {getFieldDecorator('upLoadPicture', {
            rules: [
              { type: 'array', required: true, 
              message: 'Please select time!' }
            ],
          })( 
           <div>
          <Upload >
            <Button>
              <Icon type="upload" /> Upload
            </Button>
          </Upload>
          </div>
          )}
        </Form.Item>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button type="primary " htmlType="submit">
              确认
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              取消
            </Button>
            {/* <a style={{ marginLeft: 8, fontSize: 12 }}>
              Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
            </a> */}
          </Col>
        </Row>
        <div>
        <Modal
          title="房态设置"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          
        </Modal>
        </div>
      </Form>
    );
  }
}

export default Form.create({ name: 'advanced_search' })(App);

