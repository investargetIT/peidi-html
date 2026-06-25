# 订单关联表单

## 功能说明

用户在企业微信中打开此页面，填写订单编号后点击确定，系统会通过企业微信 OAuth 获取用户授权，然后将订单编号和授权信息一起发送给后端接口进行关联。

## 文件说明

- `index.html` - 订单关联表单主页面

## 使用方法

### 1. 配置参数

在 `index.html` 中修改以下配置参数：

```javascript
// 后端接口地址 - 表单提交接口
const API_URL = 'https://api.peidigroup.cn/ai/qywx/from';

// 企业微信 CorpID
const CORP_ID = 'ww3e4d6806d3572c2e';
```

### 2. 企业微信端配置

在企业微信管理后台配置应用的 OAuth 授权回调域名，确保可以正常获取 `code`。

### 3. 后端接口要求

后端接口需要接收 POST 请求，请求体格式如下：

```json
{
  "userId": "peidi2",
  "code": "企业微信 OAuth code",
  "otid": "订单编号"
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

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- 企业微信 OAuth