# LUNE Experiment Homepage

[LUNE](https://arxiv.org/abs/2608.29509) — Low-energy Muon-Nucleon scattering Experiment at HIAF.

## Pages

- [English](index.html)
- [中文](index-zh.html)

## Local Preview

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

## Deploy

Push to `main`/`master` → GitHub Actions builds → Pages go live.

Branch previews are also built; see GitHub Actions for the URL.

<!--
## GitHub Pages 操作指南

### 1. 启用 Pages

1. 进入仓库 → **Settings → Pages**
2. Source 选择 **GitHub Actions**

### 2. 配置 CI

项目已包含 `.github/workflows/deploy.yml`，推送代码后会自动构建。

### 3. 访问地址

`https://<username>.github.io/<repo>/`

### 4. 分支预览

任何分支推送后都会自动构建，访问格式：
`https://<username>.github.io/<repo>/branch-name/`

### 5. 常见问题

- **404 错误**：检查 Pages 是否已启用，Actions 是否成功
- **样式丢失**：确认根目录包含所有资源文件
- **自定义域名**：Settings → Pages → Custom domain

### 6. 项目结构

```
lune_webpage/
├── index.html          # 英文主页
├── index-zh.html       # 中文主页
├── styles.css
├── script.js
├── assets/
│   ├── figs/           # 白皮书图表
│   └── lune-*.svg/png  # 实验标志
├── .github/workflows/
│   └── deploy.yml      # GitHub Actions 配置
└── .gitignore
```
-->
