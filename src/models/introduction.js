import {
  listSubjectColumn,
  createSubjectColumn,
  destroySubjectColumn,
  updateSubjectColumn,
} from '@/services/api';

export default {
  namespace: 'introduction',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(listSubjectColumn, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *submit({ payload }, { call, put }) {
      let callback;
      if (payload.id !== '') {
        if (Object.keys(payload).length === 1) {
          const response = yield call(destroySubjectColumn, payload);
          yield put({
            type: 'destroy',
            payload: payload.id,
          });
        } else {
          const response = yield call(updateSubjectColumn, payload);
          yield put({
            type: 'update',
            payload,
          });
        }
      } else {
        const response = yield call(createSubjectColumn, payload);
        yield put({
          type: 'create',
          payload: response,
        });
      }
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    create(state, payload) {
      const { list } = state;
      list.unshift(payload);
      return {
        ...state,
        list,
      };
    },
    destroy(state, payload) {
      const { list } = state;
      list.splice(payload, 1);
      return {
        ...state,
        list,
      };
    },
    update(state, payload) {
      const { list } = state;
      list.splice(payload.id, 1, payload);
      return {
        ...state,
        list,
      };
    },
  },
};
