import {config} from "../config.js";

class HTTP {
  request(params) {
    wx.request({
      url: config.base_url + params.url,
      method: params.method,
      header: {
        "content-type": "application/json",
        appkey: config.appkey,
      },
      data: params.data,
      success: (res) => {
        let code = res.statusCode.toString();
        if (code.startsWith("2")) {
          params.success && params.success(res.data);
        } else {
          wx.showToast({
            title: "错误",
            icon: "none",
            duration: 2000,
          });
        }
      },
      fail: (err) => {
        console.log(err);
      },
    });
  }
}

export {HTTP};
