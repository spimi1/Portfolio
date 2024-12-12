import { _ as __nuxt_component_0$1 } from './nuxt-link-9VP1gJQi.mjs';
import { withAsyncContext, computed, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData-CPNWZK0S.mjs';
import { q as queryContent } from './query-BRkho5Tl.mjs';
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
import './ssr-BSj2qKRT.mjs';
import './preview-BBvATSTn.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "BlogPosts",
  __ssrInlineRender: true,
  props: {
    limit: {
      type: Number,
      default: null
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-list",
      () => {
        const query = queryContent("/blog").where({ _path: { $ne: "/blog" } }).only(["_path", "title", "publishedAt"]).sort({ publishedAt: -1 });
        if (props.limit) {
          query.limit(props.limit);
        }
        return query.find();
      }
    )), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => {
      if (!data.value) {
        return [];
      }
      const result = [];
      let lastYear = null;
      for (const post of data.value) {
        const year = new Date(post.publishedAt).getFullYear();
        const displayYear = year !== lastYear;
        post.displayYear = displayYear;
        post.year = year;
        result.push(post);
        lastYear = year;
      }
      return result;
    });
    console.log(posts);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      ssrRenderSlot(_ctx.$slots, "default", { posts: unref(posts) }, () => {
        _push(`<section class="not-prose font-mono" data-v-fc5dc34f><div class="column text-gray-400 text-sm" data-v-fc5dc34f><div data-v-fc5dc34f>date</div><div data-v-fc5dc34f>title</div></div><ul data-v-fc5dc34f><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(`<li data-v-fc5dc34f>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: post._path,
            class: "column group hover:bg-gray-100 dark:hover:bg-gray-800"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="${ssrRenderClass({ "text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800": !post.displayYear, "text-gray-400 dark:text-gray-500": post.displayYear })}" data-v-fc5dc34f${_scopeId}>${ssrInterpolate(post.year)}</div><div data-v-fc5dc34f${_scopeId}>${ssrInterpolate(post.title)}</div>`);
              } else {
                return [
                  createVNode("div", {
                    class: { "text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800": !post.displayYear, "text-gray-400 dark:text-gray-500": post.displayYear }
                  }, toDisplayString(post.year), 3),
                  createVNode("div", null, toDisplayString(post.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></section>`);
      }, _push, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/blog-posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc5dc34f"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=blog-posts-d1EbL2at.mjs.map
