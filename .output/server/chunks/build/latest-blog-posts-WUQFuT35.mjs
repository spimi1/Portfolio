import __nuxt_component_0 from './blog-posts-d1EbL2at.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-9VP1gJQi.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './asyncData-CPNWZK0S.mjs';
import './server.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './query-BRkho5Tl.mjs';
import './ssr-BSj2qKRT.mjs';
import './preview-BBvATSTn.mjs';

const _sfc_main = {
  __name: "LatestBlogPosts",
  __ssrInlineRender: true,
  props: {
    limit: {
      type: Number,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogPosts = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_BlogPosts, mergeProps({ limit: __props.limit }, _attrs), {
        default: withCtx(({ posts }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(posts, (post) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: post._path
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(post.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(post.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(posts, (post) => {
                return openBlock(), createBlock("div", {
                  key: post.id
                }, [
                  createVNode(_component_NuxtLink, {
                    to: post._path
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(post.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/latest-blog-posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=latest-blog-posts-WUQFuT35.mjs.map
