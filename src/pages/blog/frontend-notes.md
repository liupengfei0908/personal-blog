---
layout: ../../layouts/Post.astro
title: 前端工程化学习笔记
date: 2026-09-20
category: 技术
---

这是一篇占位技术文章，展示代码块与排版效果。

## 构建与部署

```bash
npm run build   # 生成静态文件到 dist/
npm run preview # 本地预览构建产物
```

## 要点

1. 静态站点没有后端，天然适合 GitHub Pages / Vercel 免费托管
2. 内容即代码：文章走 Git 版本管理，改错可随时回滚
3. 每次 push 自动构建部署，写作成本只剩一个 Markdown 文件
