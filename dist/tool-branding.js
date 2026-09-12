import {tools} from './tools.js';

// Logo paths come only from the local tool catalogue. The adjacent tool name
// supplies the accessible label, so decorative images have empty alt text.
export function toolLogo(key) {
  const tool = tools[key];
  if (!tool) return '';
  return `<span class="tool-badge tool-logo" aria-hidden="true"><img src="${tool.logo}" alt="" width="32" height="32" loading="lazy" decoding="async"></span>`;
}
