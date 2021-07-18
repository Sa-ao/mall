import axios from 'axios'
  //方式1
  // export function resquest(config,success,failure){
  //   const instance = axios.create({
  //     baseURL:'http://123.207.32.32:8000',
  //     timeout:2000
  //   })
  //   instance(config)
  //   .then(res=>{
  //     success(res)
  //   }).catch(err=>{
  //     failure(err)
  //   })
  // }
  
  //方式2
  // export function request(config){
  //   const instance = axios.create({
  //     baseURL:'http://123.207.32.32:8000',
  //     timeout:2000
  //   })
  //   instance(config.baseconfig)
  //   .then(res=>{
  //     config.success(res)
  //   }).catch(err=>{
  //     config.failure(err)
  //   })
  // }

  //方式3
  // export function request(config){
  //   return new Promise ((resolve,reject)=>{
  //     const instance = axios.create({
  //       baseURL:'http://123.207.32.32:8000',
  //       timeout:2000
  //     })
  //     instance(config)
  //     .then(res=>{
  //       resolve(res)
  //     }).catch(err=>{
  //       reject(err)
  //     })
  //   }) 
  // }

  //方式4
  //instance 返回的就是一个promise对象，因此不需要封装进promise
  export function request(config){
    const instance = axios.create({
      baseURL:'http://152.136.185.210:7878/api/m5',
      timeout:20000
    })
    return instance(config)
  }
  