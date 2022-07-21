import request from "./../utils/request";

/**
 * 
 * @param {*} params  请求参数
 * 
 */
export function test(params){
    return request.get('demo/test', params,{noAuth:true});
}