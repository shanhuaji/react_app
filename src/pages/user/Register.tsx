import React,{useState} from 'react';
import styles from './index.less';
import { Form, Input, Button, Checkbox, Upload, message } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  FolderOutlined,
  UpSquareTwoTone,
} from '@ant-design/icons';
import { Link, connect } from 'umi';

const { Dragger } = Upload;
let pic = '';
const props = {
  name: 'file' /* 上传的参数名 */,
  multiple: true,
  action: 'https://elm.cangdu.org/v1/addimg/shop' /* 后端地址 */,
  onChange(info) {
    if (info.file.response) {
      /* 图片地址 */
      pic += 'https://elm.cangdu.org/img/' + info.file.response.image_path;
    }
  },
};
export default connect(state => {
  /* 接收数据管理的传值 */
  // console.log(state.user);
  return state;
})(function Register({ dispatch }) {
  
  const onFinish = values => {
    /* 向状态管理user发送数据 */
    /*    console.log(values); */

    dispatch({
      /* namespace+路由 */
      type: 'user/register',
      payload: {
        ...values,
        pic,
        token:""
      },
    });
    /* console.log('Received values of form: ', values); */
  };
  return (
    <div className={styles.box}>
      <img src="https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg" />
      <div className={styles.content}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '账号',
              },
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
              {
                required: true,
                message: '密码',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="repeatpassword"
            rules={[
              {
                required: true,
                message: '第二次输入密码',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请再次输入密码"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: '邮箱',
              },
            ]}
          >
            <Input
              prefix={<FolderOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="邮箱"
            />
          </Form.Item>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <UpSquareTwoTone />
            </p>
          </Dragger>

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
              注册
            </Button>
            <span className={styles.text}>Or</span>{' '}
            <Link to="/user/login">登录</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
});
