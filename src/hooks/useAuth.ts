import { useRequest } from 'umi';
import { checkAuthReq } from '../service/index';
import React from 'react'
export default function useAuth() {
  let { loading, data, error } = useRequest(() => {
   return checkAuthReq('admin');
  });
 
  if (loading) {
   return 'loading';
  }
  if (error) {
    return 'error';
  }
  return data
}
