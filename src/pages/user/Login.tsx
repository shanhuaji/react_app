import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.less';
import { Link, connect } from 'umi';
import md5 from 'md5';
export default connect(user => {
  return user;
})(
  class Login extends Component {
    onFinish = ({ username, password, remember })=> {
      // console.log('Received values of form: 'username,password,remember);
      /*  console.log(values); */
      console.log(username, password, remember);
      
      let { dispatch } = this.props;
      dispatch({
        type: 'user/login',
        payload: {
          username,
          password:md5(password),
          remember,
        },
      });
    };
    render() {
      return (
        <div className={styles.login}>
          <div className={styles.login_content}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
                <span className={styles.text}>Or</span>{' '}
                <Link to="/user/register">注册</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    }
  },
);
