"use strict";(self.webpackChunkthomas_bottini_knowledge_base=self.webpackChunkthomas_bottini_knowledge_base||[]).push([[279],{2414:function(e,t,r){r.d(t,{A:function(){return i}});r(4582);var n=r(758),a=r(5592);var o=()=>(0,a.GR)("187146327").site.siteMetadata;var l=()=>{const{allFile:e}=(0,a.GR)("643009896");return e.group};var i=e=>{let{children:t,pageTitle:r,pageSubtitle:i,taggedWith:c}=e;const{tbu:s,tba:u}=o(),f=l();return n.createElement("div",{className:"flex"},n.createElement("div",{className:"h-screen min-w-72 text-right"},n.createElement("h1",{className:"p-8 h-32"},u,n.createElement("br",null),"/",s),n.createElement("table",{className:"float-right mr-8"},n.createElement("tbody",null,f.map((e=>n.createElement("tr",{key:e.fieldValue},n.createElement("td",null,n.createElement(a.N_,{to:"/tag/"+e.fieldValue},e.fieldValue)," "),n.createElement("td",{className:"text-stone-500 pl-2"},e.totalCount))))))),n.createElement("div",{className:"w-full border-solid border-l-[1px] border-stone-300"},n.createElement("header",{className:"h-32 p-8"},n.createElement("h2",{className:"text-[DeepPink]"},r),i&&n.createElement("h3",{className:"float-right text-stone-400 italic font-normal"},"———— ",i),c&&n.createElement("div",{className:"text-stone-400"},"tags: ",c.sort().join(", "))),n.createElement("main",{className:"pl-8 pb-8"},t)))}},202:function(e,t,r){var n=r(758),a=r(5592);t.A=e=>{let{title:t}=e;const r=(0,a.GR)("3159585216");return n.createElement("title",null,t," | ",r.site.siteMetadata.title)}},655:function(e,t,r){r.r(t),r.d(t,{Head:function(){return i}});var n=r(758),a=r(2414),o=r(202);const l="Home Page",i=()=>n.createElement(o.A,{title:l});t.default=()=>n.createElement(a.A,{pageTitle:l},"🌲🌴")},3998:function(e,t,r){var n=r(5735);e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){return 1},1)}))}},5432:function(e,t,r){var n=r(4520);e.exports=n([].slice)},1488:function(e,t,r){var n=r(5432),a=Math.floor,o=function(e,t){var r=e.length;if(r<8)for(var l,i,c=1;c<r;){for(i=c,l=e[c];i&&t(e[i-1],l)>0;)e[i]=e[--i];i!==c++&&(e[i]=l)}else for(var s=a(r/2),u=o(n(e,0,s),t),f=o(n(e,s),t),m=u.length,d=f.length,v=0,h=0;v<m||h<d;)e[v+h]=v<m&&h<d?t(u[v],f[h])<=0?u[v++]:f[h++]:v<m?u[v++]:f[h++];return e};e.exports=o},2227:function(e,t,r){var n=r(5364),a=r(9565),o=r(8392),l=r(7835)("toStringTag"),i=Object,c="Arguments"===o(function(){return arguments}());e.exports=n?o:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=i(e),l))?r:c?o(t):"Object"===(n=o(t))&&a(t.callee)?"Arguments":n}},8518:function(e,t,r){var n=r(4095),a=TypeError;e.exports=function(e,t){if(!delete e[t])throw new a("Cannot delete property "+n(t)+" of "+n(e))}},6693:function(e,t,r){var n=r(6191).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},6763:function(e,t,r){var n=r(6191);e.exports=/MSIE|Trident/.test(n)},1359:function(e,t,r){var n=r(6191).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},5364:function(e,t,r){var n={};n[r(7835)("toStringTag")]="z",e.exports="[object z]"===String(n)},4935:function(e,t,r){var n=r(2227),a=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return a(e)}},4582:function(e,t,r){var n=r(2798),a=r(4520),o=r(2786),l=r(7085),i=r(2526),c=r(8518),s=r(4935),u=r(5735),f=r(1488),m=r(3998),d=r(6693),v=r(6763),h=r(9159),p=r(1359),g=[],b=a(g.sort),E=a(g.push),x=u((function(){g.sort(void 0)})),N=u((function(){g.sort(null)})),k=m("sort"),w=!u((function(){if(h)return h<70;if(!(d&&d>3)){if(v)return!0;if(p)return p<603;var e,t,r,n,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)g.push({k:t+n,v:r})}for(g.sort((function(e,t){return t.v-e.v})),n=0;n<g.length;n++)t=g[n].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}}));n({target:"Array",proto:!0,forced:x||!N||!k||!w},{sort:function(e){void 0!==e&&o(e);var t=l(this);if(w)return void 0===e?b(t):b(t,e);var r,n,a=[],u=i(t);for(n=0;n<u;n++)n in t&&E(a,t[n]);for(f(a,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:s(t)>s(r)?1:-1}}(e)),r=i(a),n=0;n<r;)t[n]=a[n++];for(;n<u;)c(t,n++);return t}})}}]);
//# sourceMappingURL=component---src-pages-index-jsx-9ebd17e82c7812d9351a.js.map