import { Effect, ImmerReducer, Subscription, history } from 'umi';
import { getReq, addReq, delReq, searchReq } from '@/service/index';
import { message } from 'antd';
interface workModelStateType {
  lists: [];
  repeatLists: [];
}
interface workModelType {
  namespaced: string;
  state: workModelStateType;
  effects: {
    getTable: Effect;
    addTable: Effect;
    deleteTable: Effect;
    searchTable: Effect;
    queryTable: Effect;
  };
  reducers: {
    GET_Table: ImmerReducer<workModelStateType>;
    ADD_TABLE: ImmerReducer<workModelStateType>;
    DELETE_TABLE: ImmerReducer<workModelStateType>;
    SEARCH_TABLE: ImmerReducer<workModelStateType>;
    QUERY_TABLE: ImmerReducer<workModelStateType>;
  };
}

const workModel: workModelType = {
  namespaced: 'work',
  state: {
    lists: [],
    repeatLists: [],/* 备份一个最新的数据数组 */
  },
  effects: {
    *getTable({ payload }, { call, put }) {
      let { data } = yield call(getReq);
      yield put({
        type: 'GET_Table',
        payload: data,
      });
    },
    *addTable({ payload }, { call, put }) {
      let { status, msg } = yield call(addReq, payload);
      if (status === 1) {
        message.info(msg);
        yield put({
          type: 'ADD_TABLE',
          payload,
        });
      }
    },
    *deleteTable({ payload }, { call, put }) {
      let { status, msg } = yield call(delReq, payload);
      if (status === 1) {
        yield put({
          type: 'DELETE_TABLE',
          payload: payload.data,
        });
      }
    },
    *searchTable({ payload }, { call, put }) {
      let { status, msg } = yield call(searchReq, payload);
      if (status === 1) {
        yield put({
          type: 'SEARCH_TABLE',
          payload,
        });
      }
    },
    *queryTable({ payload }, { call, put }) {
      console.log(payload);
      yield put({
        type: 'QUERY_TABLE',
        payload,
      });
    },
  },
  reducers: {
    GET_Table(state, { payload }) {
      state.lists = payload;
      state.repeatLists = state.lists;/* 保证实时的全部数据 */
      return state;
    },
    ADD_TABLE(state, { payload }) {
      /* 实时获取全部数据 */
      state.lists.push(payload.data);
      state.repeatLists = state.lists;/* 保证实时的全部数据 */
      return state;
    },
    DELETE_TABLE(state, { payload }) {
      console.log(payload);
       state.lists = state.lists.filter(item => {
        return item.shopId !== payload;
      });
      state.repeatLists = state.lists;/* 保证实时的全部数据 */
      return state;
    },
    SEARCH_TABLE(state, { payload }) {
      state.lists.forEach(item => {
        if (item.shopId == payload.id) {
          item.num = payload.num;
        }
      });
      state.repeatLists = state.lists;/* 保证实时的全部数据 */
      return state;
    },
    QUERY_TABLE(state, { payload }) {
     if (!payload.value) {
        state.lists = state.repeatLists;
        return state;
      }
      state.lists = state.repeatLists.filter(item => {
        return item.shopId == payload.value;
      });
      return state;
    },
  },
};

export default workModel;
