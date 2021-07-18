//时间戳转换成时间格式字符串
export function formatDate(date,fmt){
  //虎丘年份
  if (/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 -RegExp.$1.length));

  }
  //获取
  let o = {
    'M+' : date.getMonth() + 1,
    'd+' : date.getDate(),
    'h+' : date.getHours(),
    'm+' : date.getMinutes(),
    's+' : date.getSeconds(),
  };
  for (let k in o){
    if(new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length ===1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str){
  return ('00' +str).substr(str.length);
}


//防抖函数
export  function debounce(func,deay){
  let timer = null
  return function (...args){
    if(timer) clearTimeout(timer)
    let timer = setTimeout(() => {
      func.apply(this,args)
    }, deay);
  }
}

