import request from '@/utils/request';

export async function login(params) {
  return request('/api/users/login', {
    method: 'POST',
    data: params,
  });
}

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/users/currentUser');
}
