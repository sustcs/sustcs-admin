import request from '@/utils/request';

export async function listCourses() {
  return request('/server/courses');
}

export async function createCourse(params) {
  return request(`/server/courses`, {
    method: 'POST',
    data: params,
  });
}

export async function destroyCourse(params) {
  return request(`/server/courses/${params.id}`, {
    method: 'DELETE',
  });
}

export async function updateCourse(params) {
  return request(`/server/courses/${params.id}`, {
    method: 'PUT',
    data: params,
  });
}
