type setCookieType = (keys: string, value: string, day: number) => void;
type getCookieType = (key: string) => string | undefined;
// type deCookieType = (key:string,value:string)=>void
type deCookieType=(key:string,value:string)=>void

export const setCookie: setCookieType = function(key, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  /* 给值中的特殊符号编码 */
  document.cookie = `${key}=${encodeURIComponent(
    value,
  )};expires=${date};path=/`;
};

/* 获取cookie相应的值  key是值 */
export const getCookie: getCookieType = function(key) {
  /* 获取cookie中所有的属性和值，从; 分割成数组 */
  /* 给值中的特殊符号解码 */
  let arr = decodeURIComponent(document.cookie).split('; ');
  /* 遍历分割后的数组 */
  for (let i of arr) {
    /* 从=开始分割 */
    let newArr = i.split('=');
    /* 输入的值等于cookie的键值 */
    if (key === newArr[0]) {
      /* 返回相应的属性 */
      return newArr[1];
    }
  }
};
/* 删除 */
/* key删除的cookie中的属性 */
export const deCookie:deCookieType=function(key, value){
  /* value可以存在也可以不存在 */
//   if (value === 'undefined') value = 0;
  setCookie(key, value, -1);
}
/* 第一次修改 */