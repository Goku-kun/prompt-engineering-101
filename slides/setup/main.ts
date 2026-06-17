// Slidev app-setup hook. Exposes Vite's base URL (e.g.
// "/prompt-engineering-101/" on GitHub Pages, "/" in dev) to every slide
// template as `$base`, so public assets referenced as `$base + 'file.gif'`
// resolve correctly under any deploy subpath.
export default function ({ app }) {
  app.config.globalProperties.$base = import.meta.env.BASE_URL
}
