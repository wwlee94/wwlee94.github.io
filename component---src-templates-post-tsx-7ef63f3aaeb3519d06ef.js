(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{196:function(e,t,o){"use strict";o.r(t);o(201);var n=o(0),r=o.n(n),a=o(202),i=o.n(a),l=o(199),s=o(211),c=o(227),d=(o(38),o(206),o(14),o(248)),m=o(200),p=function(e){var t=e.title,o=e.description,n=e.date,a=e.categorySlug,l=e.url;return r.a.createElement(m.b,{query:g,render:function(e){var s=e.site.siteMetadata,c=s.siteUrl,d=s.author,m=s.categories,p=n.replace(/\./g,"-"),g={"@context":"http://schema.org","@type":"BlogPosting",headline:t,image:c+"/images/ogp.png",editor:d,url:l,datePublished:p,dateCreated:p,dateModified:p,description:o,author:{"@type":"Person",name:d,image:c+"/images/avatar.png"},publisher:{"@type":"Organization",name:d,logo:{"@type":"ImageObject",url:c+"/images/avatar.png",width:150,height:150}}},u=m.find(function(e){return e.slug===a}),h=u?u.name:a,f={"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":c,name:"HOME"}},{"@type":"ListItem",position:2,item:{"@id":c+"/"+a,name:h}},{"@type":"ListItem",position:3,item:{"@id":l,name:t}}]};return r.a.createElement(i.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)))},data:d})},g="2072087376",u=o(205),h=l.d.div.withConfig({displayName:"RelatedPosts__Wrapper",componentId:"sxe6v2-0"})(["background:",";padding:2em ",";@media screen and (max-width:","){padding:30px ",";}"],function(e){return e.theme.colors.whitesmoke},function(e){return e.theme.sideSpace.contentLarge},function(e){return e.theme.responsive.small},function(e){return e.theme.sideSpace.contentSmall}),f=l.d.div.withConfig({displayName:"RelatedPosts__PostCardWrapper",componentId:"sxe6v2-1"})([".post-card-link{display:flex;align-items:center;margin-bottom:1em;padding:15px;background:#fff;border-radius:5px;color:",";box-shadow:0 1px 2px rgba(0,0,0,0.1);&:hover{background:#e0ebf1;}@media screen and (max-width:","){padding:10px;}}"],function(e){return e.theme.colors.blackLight},function(e){return e.theme.responsive.small}),b=l.d.p.withConfig({displayName:"RelatedPosts__PostCardEmoji",componentId:"sxe6v2-2"})(["display:flex;align-items:center;justify-content:center;margin:0;width:80px;height:80px;background:",";border-radius:4px;font-size:50px;img{width:55px;height:55px;}"],function(e){return e.theme.colors.whitesmoke}),x=l.d.div.withConfig({displayName:"RelatedPosts__PostCardContent",componentId:"sxe6v2-3"})(["width:calc(100% - 80px);padding-left:15px;h5{font-size:1.1em;font-weight:700;line-height:1.45;}time{display:block;margin-bottom:0.1em;letter-spacing:0.05em;font-size:0.8em;color:",";}@media screen and (max-width:","){padding-left:15px;h5{font-size:1em;}}"],function(e){return e.theme.colors.silver},function(e){return e.theme.responsive.small}),k=function(e){var t=e.node,o=t.frontmatter.title||t.fields.slug,n=s.a.parse(t.frontmatter.emoji||"🐱",{folder:"svg",ext:".svg"});return r.a.createElement(f,null,r.a.createElement(m.a,{to:t.fields.slug,className:"post-card-link"},r.a.createElement(b,{dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(x,null,r.a.createElement("h5",null,o),r.a.createElement("time",null,t.frontmatter.date))))},w=function(e){var t=e.posts;if(!t.length)return null;var o=[];return t.forEach(function(e){o.push(r.a.createElement(k,{key:e.node.fields.slug,node:e.node}))}),r.a.createElement(h,null,o)},y=o(204),v=o(249),M=o.n(v),I=Object(l.c)(['margin:1.5em 0 1em;line-height:1.9;a:hover{text-decoration:underline;}p{margin-bottom:1em;}h1,h2,h3,h4,h5,h6{margin:40px 0 10px;font-weight:700;line-height:1.5;}h1,h2{position:relative;margin:55px 0 12px;padding:5px 0 5px 17px;font-size:1.55em;&:before{position:absolute;top:0;left:0;content:"";display:inline-block;width:5px;height:100%;border-radius:5px;background:linear-gradient(0deg,#ffa649 0%,#ffa649 50%,#f7645b 50%,#f7645b 100%);}}h2{font-size:1.40em;}h3{margin:55px 0 12px;font-size:1.40em;}h4{position:relative;padding-left:18px;font-size:1.2em;&:before{position:absolute;top:.2em;left:0;content:"";display:inline-block;width:14px;height:19px;background-image:url("','");background-size:contain;background-repeat:no-repeat;}}ul,ol{margin:1em 0;p{margin:0;}}ul{padding-left:1.2em;}ul li{margin:.4em 0;list-style:disc;}ul ul{margin:0;}ol{counter-reset:number;& > li{list-style:none;list-style-position:inside;position:relative;line-height:20px;padding-left:34px;margin:1em 0;&:before{display:inline-block;position:absolute;left:0;top:0;width:20px;height:20px;border-radius:50%;background:#5c9ee7;color:#fff;font-weight:700;font-size:14px;text-align:center;line-height:20px;content:counter(number);counter-increment:number;background:',";}}}strong{font-weight:700;}em{font-style:italic;}del{text-decoration:line-through;}hr{display:block;margin:2em 0;border:none;border-top:dotted 3px #e1eaf3;}table{display:block;border-spacing:2px;border-collapse:separate;overflow:auto;-webkit-overflow-scrolling:touch;width:auto;font-size:.9em;line-height:1.4;th{background-color:",';color:#FFF;padding:10px 12px;text-align:center;font-weight:700;&[align="center"]{text-align:center;}&[align="right"]{text-align:right;}}td{background-color:',";color:",";padding:10px 12px;}thead tr{th:first-child{border-radius:5px 0 0 0;}th:last-child{border-radius:0 5px 0 0;}}tbody tr:last-child{td:first-child{border-radius:0 0 0 5px;}td:last-child{border-radius:0 0 5px 0;}}}blockquote{padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;}.gatsby-resp-image-wrapper{margin:1em 0;border:solid 1px #e5e8ea;box-shadow:0 2px 5px -1px rgba(0,0,0,.25);border-radius:4px;overflow:hidden;}"],M.a,function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.whitesmoke},function(e){return e.theme.colors.blackLight}),C=Object(l.c)([".custom-block{margin:1em 0;background:",";}.custom-block-heading{font-weight:700;.emoji{width:1.2em !important;height:1.2em !important;vertical-align:-0.2em !important;}}.custom-block-body{font-size:0.92em;& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}h5{font-size:1.05em;margin:20px 0 5px;}}& > *:first-child{margin-top:0;}.custom-block.simple{padding:1em 1.2em;border-radius:5px;.custom-block-heading{font-size:1.1em;}}.custom-block.info,.custom-block.alert,.custom-block.notice{padding:0.7em 1em;border-left:solid 4px ",";border-radius:1px 3px 3px 1px;}.custom-block.alert{border-left-color:",";background:#ffeff0;.custom-block-heading{color:",";}}.custom-block.notice{border-left-color:",";background:#fff4df;.custom-block-heading{color:",";}}.custom-block.image-small,.custom-block.image-medium{background:#c0e2fb;padding:1.5em;text-align:center;border-radius:5px;.gatsby-resp-image-wrapper{margin:0;border:none;box-shadow:0 5px 15px rgba(0,0,0,0.15);}}.custom-block.image-small .gatsby-resp-image-wrapper{max-width:350px !important;border:none;}.custom-block.image-medium .gatsby-resp-image-wrapper{max-width:450px !important;border:none;}"],function(e){return e.theme.colors.whitesmoke},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.red},function(e){return e.theme.colors.red},function(e){return e.theme.colors.orange},function(e){return e.theme.colors.orange}),L=Object(l.c)([".gatsby-highlight{margin:1.5em 0;@media screen and (max-width:","){margin:1.5em -",';}}code[class*="language-"],pre[class*="language-"]{hyphens:none;white-space:pre;white-space:pre-wrap;word-wrap:normal;font-family:Menlo,Monaco,"Courier New",monospace;font-size:14.5px;color:#22aef1;text-shadow:none;}pre[class*="language-"],:not(pre) > code[class*="language-"]{background:',";border-radius:5px;@media screen and (max-width:",'){border-radius:0;}}pre[class*="language-"]{padding:26px ',';overflow:auto;-webkit-overflow-scrolling:touch;}pre[class*="language-"]{position:relative;}pre[class*="language-"] code{white-space:pre;display:block;}:not(pre) > code[class*="language-"]{padding:0.15em 0.2em 0.05em;border-radius:0.3em;border:0.13em solid #7a6652;box-shadow:1px 1px 0.3em -0.1em #000 inset;}.token.namespace{opacity:0.7;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:rgba(255,255,255,0.6);}.token.operator,.token.boolean,.token.number{color:#a77afe;}.token.attr-name,.token.string{color:#ffab3c;}.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#ffab3c;}.token.selector,.token.inserted{color:#3eda86;}.token.atrule,.token.attr-value,.token.keyword,.token.important,.token.deleted{color:#ff7574;}.token.regex,.token.statement{color:#22aef1;}.token.placeholder,.token.variable{color:#fff;}.token.important,.token.statement,.token.bold{font-weight:700;}.token.punctuation{color:#bebec5;}.token.entity{cursor:help;}.token.italic{font-style:italic;}code.language-markup{color:#f9f9f9;}code.language-markup .token.tag{color:#ff7574;}code.language-markup .token.attr-name{color:#3eda86;}code.language-markup .token.attr-value{color:#ffab3c;}code.language-markup .token.style,code.language-markup .token.script{color:#22aef1;}code.language-markup .token.script .token.keyword{color:#22aef1;}.gatsby-highlight-code-line{background-color:rgba(0,0,0,0.3);display:table;min-width:calc(100% + '," * 2);margin-right:-",";margin-left:-",";padding-left:12px;border-left:5px solid #22aef1;}.gatsby-code-title{position:relative;margin:1.5em 0 -24px auto;background:#20242e;color:#fff;font-size:12px;height:24px;padding:0 8px;line-height:24px;font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-weight:700;border-radius:0 4px;display:table;z-index:2;@media screen and (max-width:","){border-radius:0;margin-right:-",";}}.gatsby-code-title + .gatsby-highlight{margin-top:0;}p > code,li > code{display:inline-block;background:#edf2f7;padding:0.1em 0.3em;margin:0 0.2em;border-radius:3px;line-height:1.4;color:#454e63 !important;}"],function(e){return e.theme.responsive.small},function(e){return e.theme.sideSpace.contentSmall},function(e){return e.theme.colors.blackLight},function(e){return e.theme.responsive.small},"1.2em","1.2em","1.2em","1.2em",function(e){return e.theme.responsive.small},function(e){return e.theme.sideSpace.contentSmall}),z=o(250),E=o.n(z);o.d(t,"pageQuery",function(){return T});var j=l.d.section.withConfig({displayName:"post__Content",componentId:"sc-19heebe-0"})(['position:relative;background:#fff;overflow:hidden;font-size:16px;&:before,&:after{content:"";position:absolute;width:0;height:0;z-index:5;}&:before{top:0;left:0;border-top:20px solid ',";border-right:20px solid transparent;}&:after{bottom:0;right:0;border-bottom:20px solid ",";border-left:20px solid transparent;}@media screen and (max-width:","){margin:0 -",";&:before,&:after{content:none;}}"],function(e){return e.theme.colors.background},function(e){return e.theme.colors.background},function(e){return e.theme.responsive.small},function(e){return e.theme.sideSpace.small}),S=l.d.p.withConfig({displayName:"post__HeroImage",componentId:"sc-19heebe-1"})(["position:relative;background:",';text-align:center;background-image:url("','");background-repeat:repeat;background-size:400px;min-height:230px;display:flex;align-items:center;justify-content:center;.emoji{width:110px;height:110px;}@media screen and (max-width:',"){min-height:190px;}"],function(e){return e.theme.colors.blackLight},E.a,function(e){return e.theme.responsive.small}),N=l.d.div.withConfig({displayName:"post__ContentMain",componentId:"sc-19heebe-2"})(["padding:1.8em ",";@media screen and (max-width:","){padding:30px ",";}"],function(e){return e.theme.sideSpace.contentLarge},function(e){return e.theme.responsive.small},function(e){return e.theme.sideSpace.contentSmall}),_=l.d.h1.withConfig({displayName:"post__PostTitle",componentId:"sc-19heebe-3"})(["margin:0.1em 0 0.3em;font-size:1.8em;@media screen and (max-width:","){font-size:25px;}font-weight:700;line-height:1.5;"],function(e){return e.theme.responsive.small}),P=l.d.time.withConfig({displayName:"post__PostDate",componentId:"sc-19heebe-4"})(["display:block;color:",";font-size:0.9em;letter-spacing:0.05em;"],function(e){return e.theme.colors.silver}),D=l.d.div.withConfig({displayName:"post__PostContent",componentId:"sc-19heebe-5"})([""," "," ",""],L,I,C),O=function(e){var t,o;function n(){return e.apply(this,arguments)||this}return o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,n.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata,o=t.siteUrl,n=t.title,a=this.props.pageContext,l=a.relatedPosts,d=(a.slug,e.frontmatter),m=d.title,g=d.description,h=d.date,f=d.category,b=d.emoji,x=this.props.location,k=""+(o+x.pathname);return r.a.createElement(u.a,{location:x,title:n},r.a.createElement(y.a,{title:m,description:g||e.excerpt}),r.a.createElement(i.a,null,r.a.createElement("link",{rel:"canonical",href:k})),r.a.createElement(p,{title:m,description:g||e.excerpt,date:h,url:x.href,categorySlug:f}),r.a.createElement(j,null,r.a.createElement(S,{dangerouslySetInnerHTML:{__html:s.a.parse(b||"😺",{folder:"svg",ext:".svg"})}}),r.a.createElement(N,null,r.a.createElement(P,null,h),r.a.createElement(_,null,m),r.a.createElement(c.a,{slug:f,isLink:!0}),r.a.createElement(D,{dangerouslySetInnerHTML:{__html:e.html}})),r.a.createElement("aside",null,r.a.createElement(w,{posts:l}))))},n}(r.a.Component),T=(t.default=O,"723498715")},248:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://wwlee94.github.io",author:"Weekend.dev",categories:[{name:"블로그",slug:"blog"},{name:"알고리즘",slug:"algorithm"}]}}}}},249:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzAgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwIDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0Y3NjQ1Qzt9Cgkuc3Qxe2ZpbGw6I0ZGQTc0ODt9Cjwvc3R5bGU+Cjx0aXRsZT5pY29uPC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4LjEsMzAuMWMwLDcuNS02LjEsMTMuNi0xMy42LDEzLjZTMC45LDM3LjcsMC45LDMwLjFTNywxNi41LDE0LjUsMTYuNVMyOC4xLDIyLjYsMjguMSwzMC4xeiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjguMSwxNS42YzAsNy41LTYuMSwxMy42LTEzLjYsMTMuNlMwLjksMjMuMSwwLjksMTUuNlM3LDIsMTQuNSwyUzI4LjEsOC4xLDI4LjEsMTUuNnoiLz4KPC9zdmc+Cg=="},250:function(e,t,o){e.exports=o.p+"static/pattern-00b88abde489053a0ab3b3e799db37b9.svg"}}]);
//# sourceMappingURL=component---src-templates-post-tsx-7ef63f3aaeb3519d06ef.js.map