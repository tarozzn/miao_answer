# 咪的答案

一个给某只猪使用的专属答案之书 PWA。现在包含：

- 手机端抽牌式问答
- 手机号 + 密码注册登录
- 用户端：答案旁收藏/取消收藏、右上角查看收藏夹、头像昵称设置、意见反馈
- 独立后台 App：用户修改/删除、答案库、提问记录、反馈
- PWA 新版本提示：发现更新后点击按钮刷新到新版
- Supabase 数据库 + Vercel 部署的线上真实互通版

## 本地启动

需要先安装 Node.js。

Windows 可以双击：

```text
start-windows.bat
```

或者在这个文件夹里运行：

```bash
npm start
```

启动后窗口会显示：

```text
电脑本机打开: http://localhost:端口号
手机同一 Wi-Fi 下可尝试打开: http://电脑局域网IP:端口号
```

没有配置 Supabase 时，小程序只适合本地试玩。线上真实使用时，用户信息、收藏、提问记录和反馈都保存在 Supabase 数据库里，后续更新页面代码不会让用户重新注册。

## 线上部署

推荐低成本组合：

- Vercel：部署前端页面和 `/api` 接口
- Supabase：保存用户、签文、提问记录、反馈

这个方案不需要自己租服务器，也不需要你和使用者在同一个无线网络里。用户打开的是公网地址，安卓手机可以把它安装到桌面，后续你重新部署代码，用户端会提示更新。

### 1. 创建 Supabase 项目

打开 Supabase，新建一个项目。

进入 SQL Editor，依次执行：

```text
supabase-schema.sql
supabase-seed-answers.sql
```

第一份是建表和安全策略，第二份会导入当前 409 条签文。

### 2. 设置管理员手机号

后台管理员由环境变量 `ADMIN_PHONES` 控制。  
比如你的手机号是 `13800000000`，就填：

```text
ADMIN_PHONES=13800000000
```

多个管理员用英文逗号分隔。

### 3. 配置 Vercel 环境变量

在 Vercel 项目的 Environment Variables 中添加：

```text
SUPABASE_URL=https://你的项目.supabase.co
SUPABASE_SERVICE_ROLE_KEY=你的 service_role key
ADMIN_PHONES=你的手机号
```

`SUPABASE_SERVICE_ROLE_KEY` 只能放在 Vercel 环境变量里，不要写进前端页面。

### 4. 部署

把整个文件夹上传到 GitHub，然后在 Vercel 导入这个仓库部署。  
部署成功后：

- 用户端 App：打开 Vercel 给你的首页地址
- 后台 App：打开 `你的地址/admin.html`，例如 `https://你的项目.vercel.app/admin.html`

第一次用管理员手机号在用户端注册后，再打开后台 App 即可管理数据。用户端没有后台入口；普通用户即使手动打开 `/admin.html`，也看不到管理操作。后台是单独页面，也可以在安卓浏览器里单独“添加到主屏幕”。

如果你已经部署过旧版本，需要在 Supabase 里重新执行新版 `supabase-schema.sql`，让收藏表和相关安全策略生效。

## 安卓安装

在安卓 Chrome / Edge 里打开线上地址后，选择浏览器菜单里的“添加到主屏幕”或“安装应用”。

## 版本更新

每次你改完代码后重新部署即可。用户下一次打开 App 时，如果浏览器检测到新版，会看到“发现新版本啦”的提示，点击“马上更新”后页面会刷新到最新版。

用户账号、头像昵称、收藏、提问记录、反馈都在 Supabase 数据库里，不会因为重新部署页面而丢失。

## 更新答案库

推荐直接在后台的“答案库”里新增、修改、删除。  
如果你仍然想先改本地 `app.js` 里的 `answerBook.oracleAnswers`，改完后运行：

```bash
npm run export:answers
```

然后把新生成的 `supabase-seed-answers.sql` 导入 Supabase。
