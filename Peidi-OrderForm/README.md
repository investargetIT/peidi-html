# 订单关联表单

## 功能说明

用户从小程序进入此页面，填写订单编号后点击确定，系统会将订单编号和微信用户ID一起发送给后端接口进行关联。

## 文件说明

- `index.html` - 订单关联表单主页面

## 使用方法

### 1. 配置后端接口地址

在 `index.html` 中修改 `API_URL` 为实际的后端接口地址：

```javascript
const API_URL = 'https://your-api-domain.com/api/order/link';
```

### 2. 小程序端集成

在小程序中使用 `web-view` 组件加载此页面：

```html
<web-view src="https://your-domain.com/Peidi-OrderForm/index.html"></web-view>
```

同时需要在小程序中添加通信逻辑：

```javascript
Page({
  onLoad: function(options) {
    // 监听webview消息
    this.webviewContext = wx.createWebviewContext('webview', this);
  },
  
  onMessage: function(e) {
    if (e.detail.data[0] === 'getUserId') {
      // 向webview发送userid
      this.webviewContext.postMessage({
        userId: '实际的微信用户ID'
      });
    }
  }
})
```

### 3. 后端接口要求

后端接口需要接收 POST 请求，请求体格式如下：

```json
{
  "orderNo": "订单编号",
  "userId": "微信用户ID"
}
```

返回格式建议：

```json
{
  "success": true,
  "code": 200,
  "message": "关联成功"
}
```

## 测试说明

在开发测试阶段，代码中使用了模拟的 `wechatUserId`（`test_user_123456`），正式部署时请删除测试代码。

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- 微信 JSSDK