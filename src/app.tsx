import React from 'react';
import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  GlobalOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Dropdown, Button } from 'antd';
import styles from './app.less';
import { Link } from 'umi';
import { getCookie } from '@/utils/cookie';
const menu = (
  <Menu>
    <Menu.Item>
      <Link to="./core" rel="noopener noreferrer">
        个人中心
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="./settings" rel="noopener noreferrer">
        个人设置
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Button type="primary">登出</Button>
    </Menu.Item>
  </Menu>
);

export const layout = {
  logout: () => {}, // do something
  rightRender: initInfo => {
    return (
      <div className={styles.box}>
        <SearchOutlined />
        <QuestionCircleOutlined />
        <BellOutlined />
        <Dropdown overlay={menu} placement="bottomLeft">
          <div className={styles.box_icon}>
            {/* 头像和名字 */}
            <Avatar size={30} icon={<UserOutlined />} src={getCookie('pic')} />
            <span>{getCookie('username')}</span>
          </div>
        </Dropdown>
        <GlobalOutlined />
      </div>
    );
  }, // return string || ReactNode;
};
