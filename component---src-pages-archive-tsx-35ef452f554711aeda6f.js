"use strict";(self.webpackChunknitro_language_processing_hackathon=self.webpackChunknitro_language_processing_hackathon||[]).push([[128],{5290:function(a,e,s){s.r(e),s.d(e,{default:function(){return C}});var r=s(7782),i=s(975),t=s(5040),c=s(1883),d=s(3025),n=s(3967),l=s.n(n),o=s(7294),m=(s(2473),s(2081)),v=s(5115),f=s(6792),x=s(8146),u=s(3716),N=s(7126),h=s(5893);const b=o.forwardRef((({bsPrefix:a,active:e,disabled:s,eventKey:r,className:i,variant:t,action:c,as:d,...n},o)=>{a=(0,f.vE)(a,"list-group-item");const[m,v]=(0,u.v)({key:(0,N.h)(r,n.href),active:e,...n}),b=(0,x.Z)((a=>{if(s)return a.preventDefault(),void a.stopPropagation();m.onClick(a)}));s&&void 0===n.tabIndex&&(n.tabIndex=-1,n["aria-disabled"]=!0);const p=d||(c?n.href?"a":"button":"div");return(0,h.jsx)(p,{ref:o,...n,...m,onClick:b,className:l()(i,a,v.isActive&&"active",s&&"disabled",t&&`${a}-${t}`,c&&`${a}-action`)})}));b.displayName="ListGroupItem";var p=b;const j=o.forwardRef(((a,e)=>{const{className:s,bsPrefix:r,variant:i,horizontal:t,numbered:c,as:d="div",...n}=(0,m.Ch)(a,{activeKey:"onSelect"}),o=(0,f.vE)(r,"list-group");let x;return t&&(x=!0===t?"horizontal":`horizontal-${t}`),(0,h.jsx)(v.Z,{ref:e,...n,as:d,className:l()(s,o,i&&`${o}-${i}`,x&&`${o}-${x}`,c&&`${o}-numbered`)})}));j.displayName="ListGroup";var y=Object.assign(j,{Item:p}),g=s(5487);var k=a=>{let{edition:e}=a;const{t:s}=(0,r.useTranslation)();return(0,h.jsxs)(d.Z,{className:"card archive-module--card--4da2f",children:[(0,h.jsx)(d.Z.Header,{className:"cardHeader",children:e}),(0,h.jsx)(d.Z.Body,{className:"cardBody",children:(0,h.jsxs)(y,{variant:"flush",children:[["schedule","workshops","conference"].map(((a,r)=>(0,h.jsx)(c.Link,{to:"../"+e+"/"+a,className:"link",children:s("navbar."+a)},"lg-item"+r))),(0,h.jsx)("a",{href:(0,g.qw)(e),className:"link",children:s("navbar.competition")},"lg-item competition")]})})]})};var w=a=>{let{previousEditions:e}=a;const{t:s}=(0,r.useTranslation)();return(0,h.jsxs)("div",{className:"page archive-module--archive--eee44",id:"archive",children:[(0,h.jsx)("h1",{className:"title",children:s("title")}),(0,h.jsx)("div",{className:"archive-module--cards--abdcb",children:e.map((a=>(0,h.jsx)(k,{edition:a},"editionCard"+a)))})]})};var C=a=>{let{location:e}=a;const{t:s}=(0,r.useTranslation)();return(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(t.Z,{title:s("title"),pathname:e.pathname}),(0,h.jsx)(w,{previousEditions:[2023,2022]})]})}},3025:function(a,e,s){s.d(e,{Z:function(){return I}});var r=s(3967),i=s.n(r),t=s(7294),c=s(6792),d=s(5893);const n=t.forwardRef((({className:a,bsPrefix:e,as:s="div",...r},t)=>(e=(0,c.vE)(e,"card-body"),(0,d.jsx)(s,{ref:t,className:i()(a,e),...r}))));n.displayName="CardBody";var l=n;const o=t.forwardRef((({className:a,bsPrefix:e,as:s="div",...r},t)=>(e=(0,c.vE)(e,"card-footer"),(0,d.jsx)(s,{ref:t,className:i()(a,e),...r}))));o.displayName="CardFooter";var m=o,v=s(9059);const f=t.forwardRef((({bsPrefix:a,className:e,as:s="div",...r},n)=>{const l=(0,c.vE)(a,"card-header"),o=(0,t.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,d.jsx)(v.Z.Provider,{value:o,children:(0,d.jsx)(s,{ref:n,...r,className:i()(e,l)})})}));f.displayName="CardHeader";var x=f;const u=t.forwardRef((({bsPrefix:a,className:e,variant:s,as:r="img",...t},n)=>{const l=(0,c.vE)(a,"card-img");return(0,d.jsx)(r,{ref:n,className:i()(s?`${l}-${s}`:l,e),...t})}));u.displayName="CardImg";var N=u;const h=t.forwardRef((({className:a,bsPrefix:e,as:s="div",...r},t)=>(e=(0,c.vE)(e,"card-img-overlay"),(0,d.jsx)(s,{ref:t,className:i()(a,e),...r}))));h.displayName="CardImgOverlay";var b=h;const p=t.forwardRef((({className:a,bsPrefix:e,as:s="a",...r},t)=>(e=(0,c.vE)(e,"card-link"),(0,d.jsx)(s,{ref:t,className:i()(a,e),...r}))));p.displayName="CardLink";var j=p,y=s(9602);const g=(0,y.Z)("h6"),k=t.forwardRef((({className:a,bsPrefix:e,as:s=g,...r},t)=>(e=(0,c.vE)(e,"card-subtitle"),(0,d.jsx)(s,{ref:t,className:i()(a,e),...r}))));k.displayName="CardSubtitle";var w=k;const C=t.forwardRef((({className:a,bsPrefix:e,as:s="p",...r},t)=>(e=(0,c.vE)(e,"card-text"),(0,d.jsx)(s,{ref:t,className:i()(a,e),...r}))));C.displayName="CardText";var P=C;const E=(0,y.Z)("h5"),$=t.forwardRef((({className:a,bsPrefix:e,as:s=E,...r},t)=>(e=(0,c.vE)(e,"card-title"),(0,d.jsx)(s,{ref:t,className:i()(a,e),...r}))));$.displayName="CardTitle";var R=$;const Z=t.forwardRef((({bsPrefix:a,className:e,bg:s,text:r,border:t,body:n=!1,children:o,as:m="div",...v},f)=>{const x=(0,c.vE)(a,"card");return(0,d.jsx)(m,{ref:f,...v,className:i()(e,x,s&&`bg-${s}`,r&&`text-${r}`,t&&`border-${t}`),children:n?(0,d.jsx)(l,{children:o}):o})}));Z.displayName="Card";var I=Object.assign(Z,{Img:N,Title:R,Subtitle:w,Body:l,Link:j,Text:P,Header:x,Footer:m,ImgOverlay:b})}}]);
//# sourceMappingURL=component---src-pages-archive-tsx-35ef452f554711aeda6f.js.map