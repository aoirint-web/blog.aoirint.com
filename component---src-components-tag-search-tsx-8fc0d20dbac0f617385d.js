"use strict";(self.webpackChunkblog_aoirint_com=self.webpackChunkblog_aoirint_com||[]).push([[789],{5926:function(e,t,a){var l=a(7294),n=a(8538),r=a.n(n),c=a(5444);t.Z=function(e){var t,a=e.post,n=a.slug,m=a.parent,s=a.frontmatter,i="sourceInstanceName"in m?m.sourceInstanceName:"pages",o="pages"!==i?"/"+i+"/":"/",d=null!=(null==s?void 0:s.date)?r()(null==s?void 0:s.date).format("YYYY-MM-DD"):"",u=null!=(null==s?void 0:s.updated)?r()(null==s?void 0:s.updated).format("YYYY-MM-DD"):"";return l.createElement("div",{className:"mb-2"},l.createElement("div",{className:""},l.createElement(c.Link,{to:""+o+n,"data-label":"title"},null==s?void 0:s.title),d||u?l.createElement("div",{className:"is-size-7"},"[",l.createElement("span",{"data-label":"dateCreated"},d),d&&u?" / ":"",l.createElement("span",{"data-label":"dateUpdated"},u),"]"):"",l.createElement("div",{className:"is-size-7","data-label":"tags"},null!=(null==s?void 0:s.category)?l.createElement(l.Fragment,null,l.createElement(c.Link,{to:"/category/"+(null==s?void 0:s.category)+"/",className:"mr-2","data-label":"category"},null==s?void 0:s.category),l.createElement("span",{className:"mr-2"},"|")):"",null==s||null===(t=s.tags)||void 0===t?void 0:t.map((function(e){return l.createElement(c.Link,{key:e,to:"/tags/"+e+"/",className:"mr-2","data-label":"tag"},e)})))))}},4852:function(e,t,a){a.r(t);var l=a(7294),n=a(5414),r=a(1455),c=a(5926);t.default=function(e){var t=e.pageContext,a=e.data,m="tag"in t?String(t.tag):"";return l.createElement(l.Fragment,null,l.createElement(n.q,null,l.createElement("title",null,"Tag: ",m," · えやみぐさ"),l.createElement("meta",{name:"robots",content:"noindex"})),l.createElement(r.w,null),l.createElement("section",{className:"section"},l.createElement("div",{className:"container"},l.createElement("h2",{className:"title is-4 mb-4"},"Tag: ",m),l.createElement("div",null,a.posts.edges.map((function(e){var t=e.node;return l.createElement("div",{key:t.id},l.createElement(c.Z,{post:t}),l.createElement("hr",{className:"my-1"}))}))))))}}}]);
//# sourceMappingURL=component---src-components-tag-search-tsx-8fc0d20dbac0f617385d.js.map