import { listAll, destroy, update, create } from '@/services/teacher';

export default {
  namespace: 'teacher',
  state: {
    list: [],
  },
  reducers: {
    save(
      state,
      {
        payload: { list },
      }
    ) {
      return { ...state, list };
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(listAll, payload);
      yield put({
        type: 'save',
        payload: {
          list: Array.isArray(response) ? response : [],
        },
      });
    },
    *delete({ payload }, { call, put }) {
      const { resolve, params } = payload;
      const response = yield call(destroy, params.id);
      resolve(response);
      yield put({ type: 'fetch' });
    },
    *create({ payload }, { call, put }) {
      const { resolve, params } = payload;
      const response = yield call(create, params);
      resolve(response);
      yield put({ type: 'fetch' });
    },

    *update({ payload }, { call, put }) {
      const { resolve, params } = payload;
      const response = yield call(update, params);
      resolve(response);
      yield put({ type: 'fetch' });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/teachers') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
