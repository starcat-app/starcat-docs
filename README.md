# Starcat Docs

Starcat 用户文档站点（[Mintlify](https://mintlify.com)）。

## 本地预览

```bash
npm i -g mint
mint dev
```

浏览器打开 `http://localhost:3000`。

## 内容约定

- 事实优先级：App 内码（如 `EntitlementGate`）> `功能实现总览` > 正式方案 > 本站文案
- 未上线能力须标 `badge: "即将推出"` 或 Beta，禁止写成可操作步骤
- 官网与购买入口统一 `https://starcat.ink`；App Store 链接见 `docs.json` / 安装页
- 双语：`docs.json` → `navigation.languages`（`zh-Hans` 默认 + `en`）；英文页路径必须以 `en/` 开头，**禁止**与中文共用同一 path
- 站内更新日志：`/changelog`（中）与 `/en/changelog`（英）；完整归档仍指向官网
- 页面反馈：`integrations.telemetry.enabled: true`；并在 Mintlify Dashboard 打开 Feedback。文案页：`/support/feedback`

## 本地预览注意

`mint` 不支持 Node 25+。若本机默认是 Node 26，请用 LTS：

```bash
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
mint dev
```

## 发布

通过 Mintlify GitHub App 关联本仓库后，推送到默认分支即可部署。
