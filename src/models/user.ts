import { Effect, ImmerReducer, Subscription, history } from 'umi';
import { userAuthReq, loginReq, tokenReq } from '@/service/index';
import { message } from 'antd';
import { setCookie, getCookie } from '@/utils/cookie';
interface userModelStateType {}
interface userModelType {
  namespace: string;
  state: userModelStateType;
  effects: {
    register: Effect;
    login: Effect;
    checkToken: Effect;
  };
  reducers: {
    /* userModelStateType自定义 */
    REGISTER: ImmerReducer<userModelStateType>;
    LOGIN: ImmerReducer<userModelStateType>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const userModel: userModelType = {
  namespace: 'user',
  state: { name: 'admin' },
  effects: {
    /* call是函数 发送请求 payload是传过来的参数 effects相当于actions */
    *register({ payload }, { call, put }) {
      let {
        data: { status, msg },
      } = yield call(userAuthReq, payload);

      if (status !== 1) {
        message.info('账户已存在');
      } else {
        /* 跳转到登录 保存信息 */
        message.info('注册成功', 1);
        setTimeout(() => {
          history.push('/user/login');
        }, 3000);
      }
      yield put({
        type: 'REGISTER',
        data: { status, msg },
      });
    },
    *login({ payload }, { call, put }) {
      let {
        data: { status, msg, token, pic },
      } = yield call(loginReq, payload);
      let { username, remember } = payload;

      if (status == 1) {
        /* 成功 */
        message.info('登录成功', 1);
        setCookie('username', username, 7);
        setCookie('token', token, 7);
        setCookie('pic', pic, 7);
        setTimeout(() => {
          history.push('/');
        }, 2000);
      }
    },
    *checkToken({ payload }, { call, put }) {
      let username = getCookie('username');
      let token = getCookie('token');
      let {
        data: { status, msg },
      } = yield call(tokenReq, { username, token });
      if (status !== 1 && history.location.pathname !== '/user/login') {
        message.info('您还没有登陆，将自动跳转登陆页',1);
        setTimeout(() => {
          history.push('/user/login');
        }, 1);
      } 
    },
  },
  reducers: {
    /* 对数据进行改变 */
    REGISTER(state, { data }) {
      console.log(data);

      /* 测试  将数据管理的数据发送给组件 */
      return (state = data);
    },
    LOGIN(state, { data }) {},
  },
  subscriptions: {
    /* 验证token和username 最开始就会执行*/
    setup({ history, dispatch }) {
      dispatch({
        type: 'user/checkToken',
      });
    },
  },
};
export default userModel;
