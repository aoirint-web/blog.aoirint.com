"use strict";(self.webpackChunkblog_aoirint_com=self.webpackChunkblog_aoirint_com||[]).push([[986],{5926:function(e,t,n){var a=n(7294),l=n(8538),r=n.n(l),c=n(5444);t.Z=function(e){var t,n=e.post,l=n.slug,i=n.parent,m=n.frontmatter,s="sourceInstanceName"in i?i.sourceInstanceName:"pages",o="pages"!==s?"/"+s+"/":"/",d=null!=(null==m?void 0:m.date)?r()(null==m?void 0:m.date).format("YYYY-MM-DD"):"",u=null!=(null==m?void 0:m.updated)?r()(null==m?void 0:m.updated).format("YYYY-MM-DD"):"";return a.createElement("div",{className:"mb-2"},a.createElement("div",{className:""},a.createElement(c.Link,{to:""+o+l,"data-label":"title"},null==m?void 0:m.title),d||u?a.createElement("div",{className:"is-size-7","data-label":"dateString"},"[",a.createElement("span",{"data-label":"dateCreated"},d),d&&u?" / ":"",a.createElement("span",{"data-label":"dateUpdated"},u),"]"):"",a.createElement("div",{className:"is-size-7","data-label":"tags"},null!=(null==m?void 0:m.category)?a.createElement(a.Fragment,null,a.createElement(c.Link,{to:"/channel/"+(null==m?void 0:m.channel)+"/category/"+(null==m?void 0:m.category)+"/",className:"mr-2","data-label":"category"},null==m?void 0:m.category),a.createElement("span",{className:"mr-2"},"|")):"",null==m||null===(t=m.tags)||void 0===t?void 0:t.map((function(e){return a.createElement(c.Link,{key:e,to:"/channel/"+(null==m?void 0:m.channel)+"/tags/"+e+"/",className:"mr-2","data-label":"tag"},e)})))))}},2970:function(e,t,n){n.d(t,{X:function(){return a}});var a=[{key:"技術ノート",description:"技術に関する記事、メモ書き",indexNoIndex:!1,indexCategoryIndex:!0,topPostCount:!0},{key:"レポート",description:"報告やアナウンス",indexNoIndex:!1,indexCategoryIndex:!1,topPostCount:!0},{key:"雑記",description:"個人的な記事、趣味",indexNoIndex:!0,indexCategoryIndex:!1,topPostCount:!1}]},4723:function(e,t,n){n.r(t);var a=n(7294),l=n(5414),r=n(1455),c=n(5926),i=n(2970);t.default=function(e){var t,n=e.pageContext,m=e.data,s="channel"in n?String(n.channel):"",o=null===(t=i.X.filter((function(e){return e.key===s})))||void 0===t?void 0:t[0];return a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement("title",null,"チャンネル: ",s," · えやみぐさ"),null!=o&&o.indexNoIndex?a.createElement("meta",{name:"robots",content:"noindex"}):""),a.createElement(r.w,null),a.createElement("section",{className:"section"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"title is-4 mb-4"},"チャンネル: ",s),a.createElement("div",{className:"content"},a.createElement("p",null,null==o?void 0:o.description)),null!=o&&o.indexCategoryIndex?a.createElement(a.Fragment,null,a.createElement("h2",{className:"title is-5 mb-3"},"最近の投稿"),a.createElement("div",{className:"mt-4 mb-5"},m.recentPosts.edges.map((function(e){var t=e.node;return a.createElement("div",{key:t.id},a.createElement(c.Z,{post:t}),a.createElement("hr",{className:"my-1"}))}))),a.createElement("h2",{className:"title is-5 mb-3"},"カテゴリ一覧"),a.createElement("div",{className:"columns is-multiline"},m.posts.categories.map((function(e){return a.createElement("div",{key:e.fieldValue,className:"column is-one-quarter"},a.createElement("div",{className:"m-1"},a.createElement("h3",{className:"title is-5 my-2"},a.createElement("a",{href:"/channel/"+s+"/category/"+e.fieldValue+"/"},e.fieldValue)),a.createElement("div",null,e.edges.map((function(e){var t=e.node;return a.createElement("div",{key:t.id},a.createElement(c.Z,{post:t}),a.createElement("hr",{className:"my-1"}))})))))})))):a.createElement(a.Fragment,null,a.createElement("ul",null,m.posts.edges.map((function(e){var t=e.node;return a.createElement("div",{key:t.id},a.createElement(c.Z,{post:t}),a.createElement("hr",{className:"my-1"}))})))))))}}}]);
//# sourceMappingURL=component---src-layouts-channel-search-page-layout-tsx-6eeb119812e24b5e9452.js.map