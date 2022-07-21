import { HTTP_REQUEST_URL, CACHE_USERINFO, CACHE_TOKEN, CACHE_EXPIRES_TIME } from './config.js';
import util from './utils/util.js';

App({
  onLaunch: function (option) {
    if (HTTP_REQUEST_URL==''){
      console.error("请配置根目录下的config.js文件中的 'HTTP_REQUEST_URL'\n\n请修改开发者工具中【详情】->【AppID】改为自己的Appid\n\n请前往后台【小程序】->【小程序配置】填写自己的 appId and AppSecret");
      return false;
    }
    let token = wx.getStorageSync(CACHE_TOKEN);
    let expiresTime = wx.getStorageSync(CACHE_EXPIRES_TIME);
    let userInfo = wx.getStorageSync(CACHE_USERINFO);
    this.globalData.isLog = !!userInfo && util.checkLogin(token, expiresTime,true);
    if (this.globalData.isLog) {
      this.globalData.token = token;
      this.globalData.expiresTime = expiresTime;
      this.globalData.userInfo = userInfo ? JSON.parse(userInfo) : {};
    }  
  },
  globalData: {
    url: HTTP_REQUEST_URL,
    token: '',  
    isLog:false,
    expiresTime:0,
    userInfo:{},
  },
})