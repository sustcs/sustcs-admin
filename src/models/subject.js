import {
  listSubjectColumn,
  addSubjectColumn,
  removeSubjectColumn,
  updateSubjectColumn,
} from '@/services/api';

export default {
  namespace: 'subject',

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
        callback = Object.keys(payload).length === 1 ? removeSubjectColumn : updateSubjectColumn;
      } else {
        callback = addSubjectColumn;
      }
      const response = yield call(callback, payload); // post
      yield put({
        type: 'queryList',
        payload: response,
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
