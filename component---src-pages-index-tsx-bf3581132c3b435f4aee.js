"use strict";(self.webpackChunkblog_aoirint_com=self.webpackChunkblog_aoirint_com||[]).push([[691],{5926:function(e,t,a){var l=a(7294),n=a(8538),s=a.n(n),c=a(5444);t.Z=function(e){var t,a=e.post,n=a.slug,m=a.parent,r=a.frontmatter,i="sourceInstanceName"in m?m.sourceInstanceName:"pages",o="pages"!==i?"/"+i+"/":"/",u=null!=(null==r?void 0:r.date)?s()(null==r?void 0:r.date).format("YYYY-MM-DD"):"",d=null!=(null==r?void 0:r.updated)?s()(null==r?void 0:r.updated).format("YYYY-MM-DD"):"",E=(""!==u||""!==d?"[":"")+u+(""!==u&&""!==d?" / ":"")+d+(""!==u||""!==d?"]":"");return l.createElement("div",{className:"mb-2"},l.createElement("div",{className:""},l.createElement(c.Link,{to:""+o+n},null==r?void 0:r.title),l.createElement("div",{className:"is-size-7"},E),l.createElement("div",{className:"is-size-7"},null!=(null==r?void 0:r.category)?l.createElement(l.Fragment,null,l.createElement(c.Link,{to:"/category/"+(null==r?void 0:r.category)+"/",className:"mr-2"},null==r?void 0:r.category),l.createElement("span",{className:"mr-2"},"|")):"",null==r||null===(t=r.tags)||void 0===t?void 0:t.map((function(e){return l.createElement(c.Link,{key:e,to:"/tags/"+e+"/",className:"mr-2"},e)})))))}},231:function(e,t,a){a.r(t);var l=a(7294),n=a(5414),s=a(8317),c=a(1455),m=a(5926);t.default=function(e){var t=e.data;return l.createElement(l.Fragment,null,l.createElement(n.Z,null,l.createElement("title",null,"えやみぐさ"),l.createElement("script",{async:!0,src:"https://cse.google.com/cse.js?cx=4b57e8a4ef2a8c489"}),l.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js"})),l.createElement(c.w,null),l.createElement("section",{className:"section"},l.createElement("div",{className:"container"},l.createElement("div",{className:"columns is-vcentered"},l.createElement("div",{className:"column is-narrow"},l.createElement("img",{src:s.Z,alt:"Logo image",className:"image is-64x64 mr-4"})),l.createElement("div",{className:"column"},l.createElement("h1",{className:"title is-2"},"えやみぐさ"),l.createElement("p",{className:"subtitle is-5"},"技術ノートとか"))),l.createElement("h2",{className:"title is-5 mb-3"},"Search"),l.createElement("div",{className:"gcse-search"}),l.createElement("h2",{className:"title is-5 mb-3"},"Recent Notes"),l.createElement("div",{className:"mt-4 mb-5"},t.posts.edges.slice(0,10).map((function(e){var t=e.node;return l.createElement("div",{key:t.id},l.createElement(m.Z,{post:t}),l.createElement("hr",{className:"my-1"}))}))),l.createElement("h2",{className:"title is-5 mb-3"},"Category Index"),l.createElement("div",{className:"columns is-multiline"},t.posts.categories.map((function(e){return l.createElement("div",{key:e.fieldValue,className:"column is-one-quarter"},l.createElement("div",{className:"m-1"},l.createElement("h2",{className:"title is-5 my-2"},e.fieldValue),l.createElement("div",null,e.edges.map((function(e){var t=e.node;return l.createElement("div",{key:t.id},l.createElement(m.Z,{post:t}),l.createElement("hr",{className:"my-1"}))})))))}))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-bf3581132c3b435f4aee.js.map