# 订单关联表单

## 功能说明

用户在企业微信中打开此页面，填写订单编号后点击确定，系统会：
1. 验证订单编号是否为空
2. 通过订单验证接口检查订单是否存在（data > 0 表示存在）
3. 通过企业微信 OAuth 获取用户授权
4. 将订单编号和授权信息一起发送给后端接口进行关联

## 文件说明

- `index.html` - 订单关联表单主页面

## 使用方法

### 1. 配置参数

在 `index.html` 中修改以下配置参数：

```javascript
// 后端接口地址 - 表单提交接口
const API_URL = 'https://api.peidigroup.cn/ai/qywx/from';

// 订单验证接口
const VERIFY_ORDER_URL = 'https://api.peidigroup.cn/oms/orders/countByOtid';

// API Token
const API_TOKEN = '1930161144376926172';

// 企业微信 CorpID
const CORP_ID = 'ww3e4d6806d3572c2e';
```

### 2. 企业微信端配置

在企业微信管理后台配置应用的 OAuth 授权回调域名，确保可以正常获取 `code`。

### 3. 后端接口要求

#### 订单验证接口

- **方法**: GET
- **URL**: `VERIFY_ORDER_URL`
- **参数**: `otid` (订单编号)
- **请求头**: 
  ```
  Authorization: API_TOKEN
  Content-Type: application/json
  ```
- **返回格式**:
  ```json
  {
    "code": 200,
    "msg": "success",
    "success": true,
    "data": 0
  }
  ```
  - `data > 0` 表示订单存在
  - `data <= 0` 表示订单不存在

#### 订单关联接口

- **方法**: POST
- **URL**: `API_URL`
- **请求体格式**:
  ```json
  {
    "userId": "peidi2",
    "code": "企业微信 OAuth code",
    "otid": "订单编号"
  }
  ```
- **返回格式**:
  ```json
  {
    "success": true,
    "code": 200,
    "message": "关联成功"
  }
  ```

## 功能特性

- ✅ 订单编号非空校验
- ✅ 订单存在性验证
- ✅ 企业微信 OAuth 集成
- ✅ 成功/失败动效展示
- ✅ 微信/企业微信环境下关闭页面功能
- ✅ 调试模式（点击"调试"按钮开启）

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- 企业微信 OAuth