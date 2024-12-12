import _sfc_main$1 from './ContentDoc-19B178g_.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import './ContentRenderer-bTBHcC2L.mjs';
import './ContentRendererMarkdown-BRQpaxlG.mjs';
import 'property-information';
import './node-04k6j4dz.mjs';
import './preview-BBvATSTn.mjs';
import './ssr-BSj2qKRT.mjs';
import './ContentQuery-C_1N5ezU.mjs';
import './asyncData-CPNWZK0S.mjs';
import './query-BRkho5Tl.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = _sfc_main$1;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "prose dark:prose-invert max-w-none" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ContentDoc, { path: "/" }, null, _parent));
  _push(`</article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-A34RXyAs.mjs.map
