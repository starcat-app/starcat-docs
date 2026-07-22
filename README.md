# Starcat Documentation

<!-- starcat-promo:start -->
<div align="center">
<a href="https://starcat.ink"><img src="https://raw.githubusercontent.com/starcat-app/starcat-pro/main/banner.webp" width="100%" alt="Starcat" /></a>

<p><strong>Official documentation for Starcat, covering setup, GitHub Stars management, AI features, RAG knowledge base, and integrations.</strong></p>
<p>Starcat is a native macOS app that turns GitHub Stars into a searchable, organized and AI-assisted knowledge base. It supports README rendering, tags, private notes, release tracking, repository health signals, AI summaries, semantic search, browser plugin workflows and self-hostable support APIs.</p>

<a href="https://github.com/starcat-app/homebrew-starcat"><img src="https://img.shields.io/badge/Install%20with-Homebrew-FBBF24?style=for-the-badge&logo=homebrew&logoColor=white" width="220" alt="Install with Homebrew"/></a>
<br/>
<sub><a href="https://github.com/starcat-app/starcat-docs/blob/main/README-ZH.md">中文说明</a></sub>
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

**Preferred install method:**

```bash
brew tap starcat-app/starcat
brew trust starcat-app/starcat
brew install --cask starcat
```

**Useful links:**

- Home and downloads: https://starcat.ink
- Public support and release notes: https://github.com/starcat-app/starcat-pro
- Starcat App Homebrew tap: https://github.com/starcat-app/homebrew-starcat
- CLI / MCP: [starcat-cli](https://github.com/starcat-app/starcat-cli) / [Homebrew tap](https://github.com/starcat-app/homebrew-starcat-cli)
- AI Agent Skill: https://github.com/starcat-app/starcat-skill
- Browser plugins: [Chrome](https://github.com/starcat-app/starcat-chrome-plugin) / [Safari](https://github.com/starcat-app/starcat-safari-plugin)
- Documentation: https://github.com/starcat-app/starcat-docs
- Website source: https://github.com/starcat-app/starcat-site
- Localization: https://github.com/starcat-app/starcat-localization

**Self-hostable support APIs:**

- [starcat-sharing-api](https://github.com/starcat-app/starcat-sharing-api)
- [starcat-trending-api](https://github.com/starcat-app/starcat-trending-api)
- [starcat-weekly-api](https://github.com/starcat-app/starcat-weekly-api)
- [starcat-wiki-api](https://github.com/starcat-app/starcat-wiki-api)
- [starcat-recommend-api](https://github.com/starcat-app/starcat-recommend-api)
- [starcat-discovery-api](https://github.com/starcat-app/starcat-discovery-api)
<!-- starcat-promo:end -->

This repository contains the official user documentation for Starcat. The documentation is built with [Mintlify](https://mintlify.com/) and published at [starcat.mintlify.site](https://starcat.mintlify.site/).

## Documentation Scope

- Installation, first launch, and GitHub connection.
- GitHub Stars organization, search, tags, notes, and smart collections.
- AI summaries, translation, chat, and provider configuration.
- Knowledge Base RAG workflows, indexing, sessions, and citations.
- Release subscriptions, discovery, browser plugins, CLI, settings, and data privacy.
- Troubleshooting and frequently asked questions.

The documentation is currently written primarily in Simplified Chinese because it serves Starcat's current product audience and interface.

## Repository Structure

```text
getting-started/   Installation and onboarding
manage-stars/     Star organization workflows
ai-features/      AI features and configuration
knowledge-base/   Knowledge Base RAG workflows
release/          Release tracking and notifications
settings/         Application settings
docs.json         Mintlify navigation and site configuration
```

## Local Preview

Install the Mintlify CLI:

```bash
npm install --global mint
```

Start the local documentation server from the repository root:

```bash
mint dev
```

The preview is available at `http://localhost:3000` by default.

Before submitting documentation changes, run:

```bash
mint validate
mint broken-links
```

## Contributing and Support

Documentation corrections and focused improvements are welcome through pull requests. Keep navigation changes synchronized with `docs.json`, do not include credentials or private user data, and attach only sanitized screenshots.

- Documentation repository issues: https://github.com/starcat-app/starcat-docs/issues
- Starcat product support: https://github.com/starcat-app/starcat-pro/issues
- Security reports: https://github.com/starcat-app/starcat-docs/security/advisories/new

## License

This documentation repository is available under the [MIT License](https://github.com/starcat-app/starcat-docs/blob/main/LICENSE).
