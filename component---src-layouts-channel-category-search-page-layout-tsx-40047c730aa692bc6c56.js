"use strict";(self.webpackChunkblog_aoirint_com=self.webpackChunkblog_aoirint_com||[]).push([[968],{5926:function(e,a,t){var l=t(7294),n=t(8538),c=t.n(n),r=t(5444);a.Z=function(e){var a,t=e.post,n=t.slug,m=t.parent,s=t.frontmatter,i="sourceInstanceName"in m?m.sourceInstanceName:"pages",o="pages"!==i?"/"+i+"/":"/",d=null!=(null==s?void 0:s.date)?c()(null==s?void 0:s.date).format("YYYY-MM-DD"):"",u=null!=(null==s?void 0:s.updated)?c()(null==s?void 0:s.updated).format("YYYY-MM-DD"):"";return l.createElement("div",{className:"mb-2"},l.createElement("div",{className:""},l.createElement(r.Link,{to:""+o+n,"data-label":"title"},null==s?void 0:s.title),d||u?l.createElement("div",{className:"is-size-7","data-label":"dateString"},"[",l.createElement("span",{"data-label":"dateCreated"},d),d&&u?" / ":"",l.createElement("span",{"data-label":"dateUpdated"},u),"]"):"",l.createElement("div",{className:"is-size-7","data-label":"tags"},null!=(null==s?void 0:s.channel)?l.createElement(l.Fragment,null,l.createElement(r.Link,{to:"/channel/"+(null==s?void 0:s.channel)+"/",className:"mr-2","data-label":"channel"},null==s?void 0:s.channel),l.createElement("span",{className:"mr-2"},"|")):"",null!=(null==s?void 0:s.category)?l.createElement(l.Fragment,null,l.createElement(r.Link,{to:"/channel/"+(null==s?void 0:s.channel)+"/category/"+(null==s?void 0:s.category)+"/",className:"mr-2","data-label":"category"},null==s?void 0:s.category),l.createElement("span",{className:"mr-2"},"|")):"",null==s||null===(a=s.tags)||void 0===a?void 0:a.map((function(e){return l.createElement(r.Link,{key:e,to:"/channel/"+(null==s?void 0:s.channel)+"/tags/"+e+"/",className:"mr-2","data-label":"tag"},e)})))))}},3053:function(e,a,t){t.r(a);var l=t(7294),n=t(5414),c=t(1455),r=t(5926);a.default=function(e){var a=e.pageContext,t=e.data,m="channel"in a?String(a.channel):"",s="category"in a?String(a.category):"";return l.createElement(l.Fragment,null,l.createElement(n.Z,null,l.createElement("title",null,m,"/category/",s," · えやみぐさ"),l.createElement("meta",{name:"robots",content:"noindex"})),l.createElement(c.w,null),l.createElement("section",{className:"section"},l.createElement("div",{className:"container"},l.createElement("h1",{className:"title is-6 mb-4"},l.createElement("a",{href:"/channel/"+m+"/"},"チャンネル: ",m)),l.createElement("h2",{className:"title is-4 mb-4"},"カテゴリ: ",s),l.createElement("ul",null,t.posts.edges.map((function(e){var a=e.node;return l.createElement("div",{key:a.id},l.createElement(r.Z,{post:a}),l.createElement("hr",{className:"my-1"}))}))))))}}}]);
//# sourceMappingURL=component---src-layouts-channel-category-search-page-layout-tsx-40047c730aa692bc6c56.js.map