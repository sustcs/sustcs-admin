import { stringify } from 'qs';
import request from '@/utils/request';

export async function getQrCode(params = {}) {
  return request(`/api/qrcode?${stringify(params)}`);
}

export async function listSubjectColumn() {
  return request('/server/introductions');
}

export async function createSubjectColumn(params) {
  return request(`/server/introductions`, {
    method: 'POST',
    data: params,
  });
}

export async function destroySubjectColumn(params) {
  return request(`/server/introductions/${params.id}`, {
    method: 'DELETE',
  });
}

export async function updateSubjectColumn(params) {
  return request(`/server/introductions/${params.id}`, {
    method: 'PUT',
    data: params,
  });
}

export async function listTeachers() {
  return request('/server/teachers');
}

export async function createTeachers(params) {
  return request(`/server/teachers`, {
    method: 'POST',
    data: params,
  });
}

export async function destroyTeachers(params) {
  return request(`/server/teachers/${params.id}`, {
    method: 'DELETE',
  });
}

export async function updateTeachers(params) {
  return request(`/server/teachers/${params.id}`, {
    method: 'PUT',
    data: params,
  });
}
