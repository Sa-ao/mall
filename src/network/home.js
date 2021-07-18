import {request} from "./request"
//将home发送的全部请求封装到这里，可以统一管理
export function getHomeMultidata(){
  return request({
    url:"/home/multidata"
  })
}
export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}