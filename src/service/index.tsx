import {
  checkAuthUrl,
  userAuthUrl,
  loginUrl,
  tokenUrl,
  chartg2Url,
  g6Url,
  l7Url,
  getUrl,
  addUrl,
  deleteUrl,
  searchUrl,
} from './url';
import { request } from 'umi';

export function checkAuthReq(username: any) {
  return request(checkAuthUrl, {
    method: 'post',
    data: {
      username,
    },
  });
}

export function userAuthReq(data: any) {
  return request(userAuthUrl, {
    method: 'post',
    data,
  });
}

export function loginReq(data: any) {
  return request(loginUrl, {
    method: 'post',
    data,
  });
}

export function tokenReq({ username, token }) {
  /* 验证cookie中username, token和数据库中的是否相同 */
  return request(tokenUrl, {
    method: 'get',
    params: {
      username,
      token,
    },
  });
}

export function chartG2Req() {
  return request(chartg2Url);
}

export function g6Req() {
  return request(g6Url);
}

export function l7Req() {
  return request(l7Url);
}
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inlpbm1hb21hbyIsInBhc3N3b3JkIjoiMTIzIiwiY3RpbWUiOjE2MDI1OTQ4Nzg2NDIsImlhdCI6MTYwMjU5NDg3OH0.Xi6IUyNpF-2CjDLa-FOaFZnsPcSwoG0VyTenM6H5V5E'
export function getReq() {
  return request(getUrl, {
    method: 'GET',
    params: {
      token
    },
  });
}

export function addReq(data) {

  return request(addUrl, {
    method: 'POST',
    data: {
      token,
      ...data.data
    },
  });
}
export function delReq(data) {
 
  return request(deleteUrl, {
    method: 'POST',
    data: {
      token,
      shopId: data.data,
    },
  });
}
export function searchReq(data) {
 
  return request(searchUrl, {
    method: 'GET',
    params: {
      token,
      shopId: data.id,
      num: data.num,
    },
  });
}
