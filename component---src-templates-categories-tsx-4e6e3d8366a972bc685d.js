(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(t,M,L){"use strict";L.r(M);L(38),L(207);var e=L(0),i=L.n(e),u=L(199),a=L(208),n=L(239),w=L(200),s=L(202),c=L.n(s),j=function(t){var M=t.categorySlug,L=t.categoryName;return i.a.createElement(w.b,{query:o,render:function(t){var e=t.site.siteMetadata.siteUrl,u={"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":e,name:"HOME"}},{"@type":"ListItem",position:2,item:{"@id":e+"/"+M,name:L}}]};return i.a.createElement(c.a,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)))},data:n})},o="4218501782",l=L(205),C=L(220),r=L(204);L.d(M,"pageQuery",function(){return I});var y=u.d.h1.withConfig({displayName:"categories__Heading",componentId:"kfp8yg-0"})(["margin:0.5em 0 0.8em;font-size:32px;color:#fff;font-weight:700;line-height:44px;letter-spacing:1px;"]),g=function(t){var M,L;function e(){return t.apply(this,arguments)||this}return L=t,(M=e).prototype=Object.create(L.prototype),M.prototype.constructor=M,M.__proto__=L,e.prototype.render=function(){var t=this.props,M=t.data,L=t.pageContext,e=M.allMarkdownRemark.edges,u=this.props.location,n=L.category,w=M.site.siteMetadata.categories,s=w.find(function(t){return t.slug===n}),c=s?s.name:n;return i.a.createElement(l.a,{location:this.props.location,title:c},i.a.createElement(r.a,{title:c}),i.a.createElement(j,{categorySlug:n,categoryName:c}),i.a.createElement(a.a,{location:u,categories:w}),i.a.createElement(y,null,c),e.map(function(t){var M=t.node;return i.a.createElement(C.a,{key:M.fields.slug,node:M})}))},e}(i.a.Component),I=(M.default=g,"3185544790")},208:function(t,M,L){"use strict";L(209),L(38),L(201);var e=L(200),i=L(0),u=L.n(i),a=L(199),n=L(212),w=L.n(n),s=L(213),c=L.n(s),j=L(214),o=L.n(j),l=L(215),C=L.n(l),r=L(216),y=L.n(r),g=a.d.nav.withConfig({displayName:"CategoryMenu__Nav",componentId:"sc-9c7e1j-0"})(["display:block;margin:0;padding:0 0 2em;@media screen and (max-width:","){padding:1em 0;}"],function(t){return t.theme.responsive.small}),I=a.d.ul.withConfig({displayName:"CategoryMenu__CategoryItemList",componentId:"sc-9c7e1j-1"})(["display:flex;@media screen and (max-width:",'){margin:0 -20px;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;::-webkit-scrollbar{display:none;}&:after{content:"";width:40px;flex:0 0 auto;}}'],function(t){return t.theme.responsive.small}),m=a.d.li.withConfig({displayName:"CategoryMenu__CategoryItem",componentId:"sc-9c7e1j-2"})(["width:70px;margin:0 20px 0 0;text-align:center;@media screen and (max-width:","){width:60px;flex:0 0 auto;margin:0 0 0 15px;}.category-item__link{color:#fff;}.category-item__image{padding:2px;background:",";border-radius:50%;position:relative;img{position:relative;background:",";border-radius:50%;display:block;z-index:2;.cactus{fill:#FFF000;}}.cactus{fill:#FFF000;}}.category-item__name{margin-top:5px;font-size:13px;font-weight:700;letter-spacing:0.5px;color:",";@media screen and (max-width:",'){font-size:12px;}}&.active{.category-item__image:after{content:"";position:absolute;display:block;left:0;top:0;width:100%;height:100%;border-radius:50%;background:',";animation:rotating 2s linear infinite;}img{border:solid 2px ",";}.cactus{fill:#fff;}}@keyframes rotating{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"],function(t){return t.theme.responsive.small},function(t){return t.theme.colors.blackLight},function(t){return t.theme.colors.blackLight},function(t){return t.theme.colors.gray},function(t){return t.theme.responsive.small},function(t){return t.theme.colors.gradient},function(t){return t.theme.colors.background});function d(t){switch(t){case"cactusYellow":return C.a;case"cactusRed":return o.a;case"cactusGreen":return c.a;case"cactusBlue":return w.a}}var N=function(t){var M=t.categoryName,L=t.categoryIcon,i=t.categoryLink,a=t.path;return u.a.createElement(m,{className:i===a?"active":void 0},u.a.createElement(e.a,{to:i,className:"category-item__link"},u.a.createElement("div",{className:"category-item__image"},u.a.createElement("img",{src:L,alt:M})),u.a.createElement("div",{className:"category-item__name"},M)))};M.a=function(t){var M=t.location,L=t.categories,e=M.pathname;return u.a.createElement(g,null,u.a.createElement(I,null,u.a.createElement(N,{key:"최신 글",categoryName:"최신 글",categoryIcon:y.a,categoryLink:"/",path:e}),L.map(function(t){return u.a.createElement(N,{key:t.name,categoryName:t.name,categoryIcon:d(t.icon),categoryLink:t.link,path:e})})))}},209:function(t,M,L){"use strict";L(210)("link",function(t){return function(M){return t(this,"a","href",M)}})},212:function(t,M){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImNhY3R1cyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwYzllZTQ7fQo8L3N0eWxlPgo8dGl0bGU+aWNvbjwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOS40LDI2LjVjMC0yLjYsMC01LjMsMC03LjljMC0xLjksMC4zLTMuNiwyLjctMy42YzIuMywwLDMuMiwxLjQsMy4yLDMuNmMwLDEuOSwwLDQsMCw1LjlzMCw0LDAsNi4xCgljMS4zLTAuNSwwLjgtMS43LDEuMy0yLjVjMC44LTEsMS43LTEuOSwzLTEuN2MxLjQsMC4zLDIuNSwxLjIsMi42LDIuN2MwLjMsMy41LTEsNi4yLTQuMyw3LjVjLTIuMiwwLjgtMi43LDIuMS0yLjYsNC4xCgljMC4xLDAuOSwwLDEuOC0wLjEsMi42Yy0wLjQsMS41LTEuNSwyLjctMy4xLDIuNmMtMS43LTAuMS0yLjYtMS4zLTIuNi0zLjFjMC0yLjItMC4xLTQuNSwwLTYuN2MwLjEtMi4xLTAuNS0zLTIuNy0zLjYKCWMtNC4zLTEtNi41LTcuMi00LjMtMTFjMC42LTEuMiwxLjctMS44LDMuMS0xLjVjMS4zLDAuMywyLjEsMS4yLDIuMywyLjZDMjguMiwyNCwyNy42LDI1LjMsMjkuNCwyNi41eiIvPgo8L3N2Zz4K"},213:function(t,M){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImNhY3R1cyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNDMEQ1NDU7fQo8L3N0eWxlPgo8dGl0bGU+aWNvbjwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOS40LDI2LjVjMC0yLjYsMC01LjMsMC03LjljMC0xLjksMC4zLTMuNiwyLjctMy42YzIuMywwLDMuMiwxLjQsMy4yLDMuNmMwLDEuOSwwLDQsMCw1LjlzMCw0LDAsNi4xCgljMS4zLTAuNSwwLjgtMS43LDEuMy0yLjVjMC44LTEsMS43LTEuOSwzLTEuN2MxLjQsMC4zLDIuNSwxLjIsMi42LDIuN2MwLjMsMy41LTEsNi4yLTQuMyw3LjVjLTIuMiwwLjgtMi43LDIuMS0yLjYsNC4xCgljMC4xLDAuOSwwLDEuOC0wLjEsMi42Yy0wLjQsMS41LTEuNSwyLjctMy4xLDIuNmMtMS43LTAuMS0yLjYtMS4zLTIuNi0zLjFjMC0yLjItMC4xLTQuNSwwLTYuN2MwLjEtMi4xLTAuNS0zLTIuNy0zLjYKCWMtNC4zLTEtNi41LTcuMi00LjMtMTFjMC42LTEuMiwxLjctMS44LDMuMS0xLjVjMS4zLDAuMywyLjEsMS4yLDIuMywyLjZDMjguMiwyNCwyNy42LDI1LjMsMjkuNCwyNi41eiIvPgo8L3N2Zz4K"},214:function(t,M){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImNhY3R1cyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmNzYxNWY7fQo8L3N0eWxlPgo8dGl0bGU+aWNvbjwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOS40LDI2LjVjMC0yLjYsMC01LjMsMC03LjljMC0xLjksMC4zLTMuNiwyLjctMy42YzIuMywwLDMuMiwxLjQsMy4yLDMuNmMwLDEuOSwwLDQsMCw1LjlzMCw0LDAsNi4xCgljMS4zLTAuNSwwLjgtMS43LDEuMy0yLjVjMC44LTEsMS43LTEuOSwzLTEuN2MxLjQsMC4zLDIuNSwxLjIsMi42LDIuN2MwLjMsMy41LTEsNi4yLTQuMyw3LjVjLTIuMiwwLjgtMi43LDIuMS0yLjYsNC4xCgljMC4xLDAuOSwwLDEuOC0wLjEsMi42Yy0wLjQsMS41LTEuNSwyLjctMy4xLDIuNmMtMS43LTAuMS0yLjYtMS4zLTIuNi0zLjFjMC0yLjItMC4xLTQuNSwwLTYuN2MwLjEtMi4xLTAuNS0zLTIuNy0zLjYKCWMtNC4zLTEtNi41LTcuMi00LjMtMTFjMC42LTEuMiwxLjctMS44LDMuMS0xLjVjMS4zLDAuMywyLjEsMS4yLDIuMywyLjZDMjguMiwyNCwyNy42LDI1LjMsMjkuNCwyNi41eiIvPgo8L3N2Zz4K"},215:function(t,M){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImNhY3R1cyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmEyMmI7fQo8L3N0eWxlPgo8dGl0bGU+aWNvbjwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOS40LDI2LjVjMC0yLjYsMC01LjMsMC03LjljMC0xLjksMC4zLTMuNiwyLjctMy42YzIuMywwLDMuMiwxLjQsMy4yLDMuNmMwLDEuOSwwLDQsMCw1LjlzMCw0LDAsNi4xCgljMS4zLTAuNSwwLjgtMS43LDEuMy0yLjVjMC44LTEsMS43LTEuOSwzLTEuN2MxLjQsMC4zLDIuNSwxLjIsMi42LDIuN2MwLjMsMy41LTEsNi4yLTQuMyw3LjVjLTIuMiwwLjgtMi43LDIuMS0yLjYsNC4xCgljMC4xLDAuOSwwLDEuOC0wLjEsMi42Yy0wLjQsMS41LTEuNSwyLjctMy4xLDIuNmMtMS43LTAuMS0yLjYtMS4zLTIuNi0zLjFjMC0yLjItMC4xLTQuNSwwLTYuN2MwLjEtMi4xLTAuNS0zLTIuNy0zLjYKCWMtNC4zLTEtNi41LTcuMi00LjMtMTFjMC42LTEuMiwxLjctMS44LDMuMS0xLjVjMS4zLDAuMywyLjEsMS4yLDIuMywyLjZDMjguMiwyNCwyNy42LDI1LjMsMjkuNCwyNi41eiIvPgo8L3N2Zz4K"},216:function(t,M){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5pY29uPC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwLjgsMzguMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjNMMTMuMywyNmMwLTAuMSwwLjEtMC4yLDAuMi0wLjNjMC4xLTAuMSwwLjItMC4xLDAuNC0wLjFoMgoJYzAuMiwwLDAuNSwwLjEsMC42LDAuNGwyLjgsNi44bDEuNC02LjdjMC0wLjEsMC4xLTAuMiwwLjItMC4zYzAuMS0wLjEsMC4yLTAuMSwwLjQtMC4xaDIuM2MwLjEsMCwwLjIsMCwwLjMsMC4xCgljMC4xLDAuMSwwLjEsMC4yLDAuMSwwLjNsLTIuNSwxMS43YzAsMC4xLTAuMSwwLjItMC4yLDAuM2MtMC4xLDAuMS0wLjIsMC4xLTAuNCwwLjFoLTJjLTAuMSwwLTAuMywwLTAuNC0wLjEKCWMtMC4xLTAuMS0wLjEtMC4yLTAuMi0wLjJsLTIuOS02LjVMMTQsMzcuN2MwLDAuMS0wLjEsMC4yLTAuMiwwLjNjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMC4xaC0yLjNDMTEsMzguMiwxMC45LDM4LjIsMTAuOCwzOC4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQuNiwzOC4xYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuM0wyNywyNmMwLTAuMSwwLjEtMC4yLDAuMi0wLjNjMC4xLTAuMSwwLjItMC4xLDAuNC0wLjFoOC41CgljMC4xLDAsMC4yLDAsMC4zLDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM2wtMC40LDEuOGMwLDAuMS0wLjEsMC4yLTAuMiwwLjNjLTAuMSwwLjEtMC4yLDAuMS0wLjQsMC4xaC01LjdsLTAuNSwyLjNoNS4zCgljMC4xLDAsMC4yLDAsMC4zLDAuMUMzNSwzMC44LDM1LDMwLjksMzUsMzFsLTAuMywxLjZjMCwwLjEtMC4xLDAuMi0wLjIsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWgtNS4zbC0wLjUsMi4zaDUuOQoJYzAuMSwwLDAuMiwwLDAuMywwLjFjMC4xLDAuMSwwLjEsMC4yLDAuMSwwLjNsLTAuNCwxLjhjMCwwLjEtMC4xLDAuMi0wLjIsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMWgtOC43CglDMjQuOCwzOC4yLDI0LjcsMzguMSwyNC42LDM4LjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOC4zLDM4Yy0wLjEtMC4xLTAuMi0wLjMtMC4xLTAuNEwzOC42LDI2YzAtMC4xLDAuMS0wLjIsMC4yLTAuM2MwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgyLjMKCWMwLjMsMCwwLjUsMC4xLDAuNSwwLjVsLTAuMyw2LjdsMi4xLTMuOWMwLjEtMC4zLDAuNC0wLjUsMC43LTAuNWgxLjNjMC4zLDAsMC41LDAuMiwwLjUsMC40YzAsMCwwLDAsMCwwbDAuNCwzLjlsMi42LTYuOAoJYzAtMC4xLDAuMS0wLjMsMC4yLTAuM2MwLjEtMC4xLDAuMy0wLjEsMC40LTAuMWgyLjRjMC4xLDAsMC4yLDAsMC4yLDAuMWMwLjEsMC4xLDAuMSwwLjEsMC4xLDAuMmMwLDAuMSwwLDAuMSwwLDAuMmwtNC4zLDExLjYKCWMtMC4xLDAuMi0wLjIsMC4zLTAuMywwLjRjLTAuMSwwLjEtMC4zLDAuMi0wLjUsMC4yaC0xLjljLTAuMiwwLTAuMywwLTAuNC0wLjJjLTAuMS0wLjEtMC4xLTAuMi0wLjItMC4zbC0wLjktNWwtMi43LDUKCWMtMC4xLDAuMy0wLjUsMC41LTAuOCwwLjVoLTEuOEMzOC42LDM4LjIsMzguNCwzOC4xLDM4LjMsMzh6Ii8+Cjwvc3ZnPgo="},220:function(t,M,L){"use strict";var e=L(200),i=L(0),u=L.n(i),a=L(199),n=L(206),w=L(221),s=a.d.div.withConfig({displayName:"PostCard__PostCardWrapper",componentId:"sc-129k6nl-0"})([".post-card-link{display:flex;align-items:start;padding:1.4em 0;color:#fff;border-top:solid 1px ",";&:hover{background:",";}@media screen and (max-width:","){padding:1em 0;}}"],function(t){return t.theme.colors.blackLight},function(t){return t.theme.colors.blackLight},function(t){return t.theme.responsive.large}),c=a.d.p.withConfig({displayName:"PostCard__PostCardEmoji",componentId:"sc-129k6nl-1"})(["display:flex;align-items:center;justify-content:center;margin:0;width:90px;height:90px;background:",";border-radius:4px;font-size:50px;img{width:55px;height:55px;}@media screen and (max-width:","){width:70px;height:70px;img{width:40px;height:40px;}}"],function(t){return t.theme.colors.blackLight},function(t){return t.theme.responsive.large}),j=a.d.div.withConfig({displayName:"PostCard__PostCardContent",componentId:"sc-129k6nl-2"})(["width:calc(100% - 90px);padding-left:20px;h3{font-size:1.5em;font-weight:700;line-height:1.4;}time{display:block;margin-bottom:0.2em;letter-spacing:0.05em;font-size:0.9em;color:",";}@media screen and (max-width:","){width:calc(100% - 70px);padding-left:15px;h3{font-size:16.5px;}time{font-size:12px;}}"],function(t){return t.theme.colors.gray},function(t){return t.theme.responsive.large});M.a=function(t){var M=t.node,L=M.frontmatter.title||M.fields.slug,i=n.a.parse(M.frontmatter.emoji||"🐱",{folder:"svg",ext:".svg"});return u.a.createElement(s,null,u.a.createElement(e.a,{to:M.fields.slug,className:"post-card-link"},u.a.createElement(c,{dangerouslySetInnerHTML:{__html:i}}),u.a.createElement(j,null,u.a.createElement("h3",null,L),u.a.createElement("time",null,M.frontmatter.date),u.a.createElement(w.a,{slug:M.frontmatter.category}))))}},239:function(t){t.exports={data:{site:{siteMetadata:{siteUrl:"http://localhost:8000"}}}}}}]);
//# sourceMappingURL=component---src-templates-categories-tsx-4e6e3d8366a972bc685d.js.map