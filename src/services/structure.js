import request from '@/utils/request';

export function listAll() {
  return request(`/server/structures`);
}

export function destroy(id) {
  return request(`/server/structures/${id}`, {
    method: 'DELETE',
  });
}

export function update(params) {
  return request(`/server/structures/${params.id}`, {
    method: 'PUT',
    data: params.values,
  });
}

export function create(values) {
  return request('/server/structures', {
    method: 'POST',
    data: values,
  });
}
