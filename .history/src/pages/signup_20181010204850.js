import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
const FormItem = Form.Item;

class HorizontalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" >
      <div className="signinto">
      Sign In 
      </div>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <br/>
          <Link to="/signup" className="navsignup">Sign up
          No account? register now!</Link>
        </FormItem>
      </Form>
    );
  }
}
const Signup = Form.create()(HorizontalLoginForm);
export default Signup;