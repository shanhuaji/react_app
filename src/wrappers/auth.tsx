import { Redirect, history } from 'umi';

import React from 'react';

import useAuth from '@/hooks/useAuth';
export default props => {
  const isLogin = useAuth();

  /* isLogin 返回多次 */
  if (isLogin === 'loading') return <div>加载中</div>;
  if (isLogin.status == 0 && isLogin.root === 'admin') {
    /* 跳转到当前页面 */
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/user/register" />;
  }
};
