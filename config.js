module.exports = {
  // 请求域名 格式： https://您的域名
  HTTP_REQUEST_URL:'http://project.com/index.php/', 

  // 以下配置非开发者，无需修改
  // 请求头
  HEADER:{
    'content-type': 'application/json'
  },
  
  // 回话密钥名称 
  TOKENNAME: 'Authori-zation',
  //用户信息缓存名称
  CACHE_USERINFO:'USERINFO',
  //token缓存名称
  CACHE_TOKEN:'TOKEN',
  //token过期事件
  CACHE_EXPIRES_TIME:'EXPIRES_TIME',
  //用户信息缓存名称
  CACHE_USERINFO: 'USERINFO',
  //缓存经度
  CACHE_LONGITUDE: 'LONGITUDE',
  //缓存纬度
  CACHE_LATITUDE: 'LATITUDE',
}