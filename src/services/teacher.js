import request from '@/utils/request';

export function listAll() {
  return request(`/server/teachers`);
}

export function destroy(id) {
  return request(`/server/teachers/${id}`, {
    method: 'DELETE',
  });
}

export function update(params) {
  return request(`/server/teachers/${params.id}`, {
    method: 'PUT',
    data: params.values,
  });
}

export function create(values) {
  return request('/server/teachers', {
    method: 'POST',
    data: values,
  });
}
