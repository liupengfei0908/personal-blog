# 个人博客（Astro 静态站点）

## 本地运行

```bash
npm install
npm run dev      # 开发预览，默认 http://localhost:4321
npm run build    # 构建静态文件到 dist/
npm run preview  # 预览构建产物
```

## 日常维护

- **写新文章**：在 `src/pages/blog/` 下新建 `.md` 文件，填好 frontmatter（title/date/category），自动进入列表
- **改作品**：编辑 `src/pages/works.astro` 顶部的 `works` 数组
- **替换占位信息**：全局搜索 `TODO` 注释，逐项替换名字、简介、经历、联系方式

## 部署（GitHub Pages，免费）

1. 把本目录推送到 GitHub 仓库
2. 修改 `astro.config.mjs` 的 `site` 为你的 Pages 地址
3. 仓库 Settings → Pages → Source 选 GitHub Actions，使用官方 Astro Action（或 push 到 `gh-pages` 分支）

也可以用 Vercel / Netlify：导入仓库，框架选 Astro，零配置自动部署。
