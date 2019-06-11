import { stringify } from 'qs';
import request from '@/utils/request';

export async function getQrCode(params = {}) {
  return request(`/api/qrcode?${stringify(params)}`);
}

export async function listSubjectColumn() {
  return request('/api/introductions');
}

export async function addSubjectColumn(params) {
  const { ...restParams } = params;
  return request(`/server/introductions`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function removeSubjectColumn(params) {
  const { ...restParams } = params;
  return request(`/server/introductions/${params.id}`, {
    method: 'DELETE',
    data: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function updateSubjectColumn(params) {
  const { ...restParams } = params;
  return request(`/server/introductions/${params.id}`, {
    method: 'PUT',
    data: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}
