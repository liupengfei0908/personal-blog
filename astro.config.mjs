import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 时，把 site 改成你的地址，例如：
// site: 'https://yourname.github.io'
// 若仓库名不是 yourname.github.io，再加 base: '/仓库名'
export default defineConfig({
  site: 'https://example.com',
});
