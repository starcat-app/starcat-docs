# Starcat 官方文档

<!-- starcat-promo:start -->
<div align="center">
<a href="https://starcat.ink"><img src="https://raw.githubusercontent.com/starcat-app/starcat-pro/main/banner.webp" width="100%" alt="Starcat" /></a>

<p><strong>这是 Starcat 的官方使用文档，覆盖安装配置、GitHub Stars 管理、AI 功能、RAG 知识库与集成能力。</strong></p>
<p>Starcat 是一款原生 macOS 应用，可以把 GitHub Stars 变成可搜索、可整理、可用 AI 理解的知识库。它支持 README 渲染、标签与私有笔记、Release 追踪、仓库健康度、AI 摘要、语义搜索、浏览器插件工作流，并提供多个可自部署 API。</p>

<a href="https://github.com/starcat-app/homebrew-starcat"><img src="https://img.shields.io/badge/Install%20with-Homebrew-FBBF24?style=for-the-badge&logo=homebrew&logoColor=white" width="220" alt="Install with Homebrew"/></a>
<br/>
<sub><a href="https://github.com/starcat-app/starcat-docs/blob/main/README.md">English</a></sub>
</div>

<div align="center">
<a href="https://starcat.ink"><img src="https://img.shields.io/badge/website-starcat.ink-38BDF8?style=flat&color=blue" alt="website"/></a>
<a href="https://github.com/starcat-app/starcat-pro"><img src="https://img.shields.io/badge/support-starcat--pro-lightgrey.svg?style=flat&color=blue" alt="support"/></a>
<a href="https://github.com/starcat-app/homebrew-starcat"><img src="https://img.shields.io/badge/install-homebrew-lightgrey.svg?style=flat&color=blue" alt="homebrew"/></a>
<a href="https://github.com/starcat-app/starcat-localization"><img src="https://img.shields.io/badge/localization-open-lightgrey.svg?style=flat&color=blue" alt="localization"/></a>
</div>

<div align="center">
<img width="900" src="https://raw.githubusercontent.com/starcat-app/starcat-pro/main/main.webp" alt="Starcat main window"/>
</div>

**首选 Homebrew 安装：**

```bash
brew tap starcat-app/starcat
brew trust starcat-app/starcat
brew install --cask starcat
```

**相关链接：**

- 官网与下载: https://starcat.ink
- 公开支持与发布说明: https://github.com/starcat-app/starcat-pro
- Starcat App Homebrew tap: https://github.com/starcat-app/homebrew-starcat
- CLI / MCP: [starcat-cli](https://github.com/starcat-app/starcat-cli) / [Homebrew tap](https://github.com/starcat-app/homebrew-starcat-cli)
- AI Agent Skill: https://github.com/starcat-app/starcat-skill
- 浏览器插件: [Chrome](https://github.com/starcat-app/starcat-chrome-plugin) / [Safari](https://github.com/starcat-app/starcat-safari-plugin)
- 官方文档: https://github.com/starcat-app/starcat-docs
- 官网源码: https://github.com/starcat-app/starcat-site
- 本地化: https://github.com/starcat-app/starcat-localization

**可自部署支撑 API：**

- [starcat-sharing-api](https://github.com/starcat-app/starcat-sharing-api)
- [starcat-trending-api](https://github.com/starcat-app/starcat-trending-api)
- [starcat-weekly-api](https://github.com/starcat-app/starcat-weekly-api)
- [starcat-wiki-api](https://github.com/starcat-app/starcat-wiki-api)
- [starcat-recommend-api](https://github.com/starcat-app/starcat-recommend-api)
- [starcat-discovery-api](https://github.com/starcat-app/starcat-discovery-api)
<!-- starcat-promo:end -->

这个仓库用于维护 Starcat 的官方用户文档。文档使用 [Mintlify](https://mintlify.com/) 构建，并发布在 [starcat.mintlify.site](https://starcat.mintlify.site/)。

## 文档范围

- 安装、首次启动和 GitHub 连接。
- GitHub Stars 整理、搜索、标签、笔记和智能集合。
- AI 摘要、翻译、对话和 Provider 配置。
- 知识库 RAG、索引、会话和引用工作流。
- Release 订阅、项目发现、浏览器插件、CLI、设置和数据隐私。
- 常见问题与故障排查。

当前文档以简体中文为主，与 Starcat 现阶段的产品界面和主要用户保持一致。

## 仓库结构

```text
getting-started/   安装与入门
manage-stars/     Stars 整理工作流
ai-features/      AI 功能与配置
knowledge-base/   知识库 RAG 工作流
release/          Release 追踪与通知
settings/         应用设置
docs.json         Mintlify 导航与站点配置
```

## 本地预览

安装 Mintlify CLI：

```bash
npm install --global mint
```

在仓库根目录启动本地文档服务：

```bash
mint dev
```

默认预览地址为 `http://localhost:3000`。

提交文档改动前执行：

```bash
mint validate
mint broken-links
```

## 贡献与支持

欢迎通过 Pull Request 修正文档错误或提交范围明确的改进。修改导航时必须同步更新 `docs.json`，不要提交凭据或用户隐私数据，截图也必须先脱敏。

- 文档仓库问题：https://github.com/starcat-app/starcat-docs/issues
- Starcat 产品支持：https://github.com/starcat-app/starcat-pro/issues
- 安全问题：https://github.com/starcat-app/starcat-docs/security/advisories/new

## License

本仓库文档采用 [MIT License](https://github.com/starcat-app/starcat-docs/blob/main/LICENSE)。
