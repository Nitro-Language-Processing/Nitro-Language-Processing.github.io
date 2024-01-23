"use strict";(self.webpackChunknitro_language_processing_hackathon=self.webpackChunknitro_language_processing_hackathon||[]).push([[252],{5487:function(a,e,r){r.d(e,{Z:function(){return i}});var s=JSON.parse('{"conferenceRegistration":"24 feb - 10 mar","hackathonRegistration":"1 feb - 18 mar","speedDating":"20 mar","workshops":"21 - 23 mar","conference":"24 mar","hackathon":"26 - 27 mar","presentations":"2 - 3 apr","leaderboard":"https://www.kaggle.com/competitions/nitro-lang-processing-1"}'),t=JSON.parse('{"conferenceRegistration":"1 feb - 19 mar","hackathonRegistration":"27 feb - 17 mar","speedDating":"19 mar","workshops":"20 - 22 mar","conference":"23 mar","hackathon":"25 - 26 mar","presentations":"26 mar","leaderboard":"https://www.kaggle.com/competitions/nitro-language-processing-2"}'),n=JSON.parse('{"conferenceRegistration":"22 feb - 24 mar","hackathonRegistration":"22 feb - 22 mar","speedDating":"24 mar","workshops":"25 - 28 mar","conference":"28 mar","hackathon":"30 - 31 mar","presentations":"31 mar","leaderboard":""}');var i=a=>{switch(a){case 2022:return s;case 2023:return t;case 2024:return n;default:throw"unknown edition "+a}}},9272:function(a,e,r){r.r(e),r.d(e,{default:function(){return R}});var s=r(7782),t=r(1269),n=r(8008),i=r(1883),o=r(3025),c=r(3967),d=r.n(c),l=r(7294),m=(r(2473),r(2081)),f=r(5115),v=r(6792),h=r(8146),u=r(3716),p=r(7126),b=r(5893);const x=l.forwardRef((({bsPrefix:a,active:e,disabled:r,eventKey:s,className:t,variant:n,action:i,as:o,...c},l)=>{a=(0,v.vE)(a,"list-group-item");const[m,f]=(0,u.v)({key:(0,p.h)(s,c.href),active:e,...c}),x=(0,h.Z)((a=>{if(r)return a.preventDefault(),void a.stopPropagation();m.onClick(a)}));r&&void 0===c.tabIndex&&(c.tabIndex=-1,c["aria-disabled"]=!0);const N=o||(i?c.href?"a":"button":"div");return(0,b.jsx)(N,{ref:l,...c,...m,onClick:x,className:d()(t,a,f.isActive&&"active",r&&"disabled",n&&`${a}-${n}`,i&&`${a}-action`)})}));x.displayName="ListGroupItem";var N=x;const g=l.forwardRef(((a,e)=>{const{className:r,bsPrefix:s,variant:t,horizontal:n,numbered:i,as:o="div",...c}=(0,m.Ch)(a,{activeKey:"onSelect"}),l=(0,v.vE)(s,"list-group");let h;return n&&(h=!0===n?"horizontal":`horizontal-${n}`),(0,b.jsx)(f.Z,{ref:e,...c,as:o,className:d()(r,l,t&&`${l}-${t}`,h&&`${l}-${h}`,i&&`${l}-numbered`)})}));g.displayName="ListGroup";var j=Object.assign(g,{Item:N}),w=r(5487);const k=a=>{let{edition:e}=a;const{t:r}=(0,s.useTranslation)();return(0,b.jsxs)(o.Z,{className:"card archive-module--card--f0c9e",children:[(0,b.jsx)(o.Z.Header,{className:"cardHeader",children:e}),(0,b.jsx)(o.Z.Body,{className:"cardBody",children:(0,b.jsxs)(j,{variant:"flush",children:[["schedule","workshops","conference","partners"].map(((a,s)=>(0,b.jsx)(j.Item,{action:!0,as:i.Link,to:"/"+e+"/"+a,children:r("navbar."+a)},"lg-item"+s))),(0,b.jsx)(j.Item,{action:!0,as:"a",href:(0,w.Z)(e).leaderboard,children:r("navbar.leaderboard")},"lg-item leaderboard")]})})]})};var y=a=>{let{previousEditions:e}=a;const{t:r}=(0,s.useTranslation)();return(0,b.jsxs)("div",{className:"page archive-module--archive--d3f90",id:"archive",children:[(0,b.jsx)("h1",{className:"title",children:r("title")}),(0,b.jsx)("div",{className:"archive-module--cards--fdf20",children:e.map((a=>(0,b.jsx)(k,{edition:a},"editionCard"+a)))})]})};var R=a=>{let{location:e}=a;const{t:r}=(0,s.useTranslation)();return(0,b.jsxs)(t.Z,{children:[(0,b.jsx)(n.Z,{title:r("title"),pathname:e.pathname}),(0,b.jsx)(y,{previousEditions:[2023,2022]})]})}},3025:function(a,e,r){r.d(e,{Z:function(){return I}});var s=r(3967),t=r.n(s),n=r(7294),i=r(6792),o=r(5893);const c=n.forwardRef((({className:a,bsPrefix:e,as:r="div",...s},n)=>(e=(0,i.vE)(e,"card-body"),(0,o.jsx)(r,{ref:n,className:t()(a,e),...s}))));c.displayName="CardBody";var d=c;const l=n.forwardRef((({className:a,bsPrefix:e,as:r="div",...s},n)=>(e=(0,i.vE)(e,"card-footer"),(0,o.jsx)(r,{ref:n,className:t()(a,e),...s}))));l.displayName="CardFooter";var m=l,f=r(9059);const v=n.forwardRef((({bsPrefix:a,className:e,as:r="div",...s},c)=>{const d=(0,i.vE)(a,"card-header"),l=(0,n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,o.jsx)(f.Z.Provider,{value:l,children:(0,o.jsx)(r,{ref:c,...s,className:t()(e,d)})})}));v.displayName="CardHeader";var h=v;const u=n.forwardRef((({bsPrefix:a,className:e,variant:r,as:s="img",...n},c)=>{const d=(0,i.vE)(a,"card-img");return(0,o.jsx)(s,{ref:c,className:t()(r?`${d}-${r}`:d,e),...n})}));u.displayName="CardImg";var p=u;const b=n.forwardRef((({className:a,bsPrefix:e,as:r="div",...s},n)=>(e=(0,i.vE)(e,"card-img-overlay"),(0,o.jsx)(r,{ref:n,className:t()(a,e),...s}))));b.displayName="CardImgOverlay";var x=b;const N=n.forwardRef((({className:a,bsPrefix:e,as:r="a",...s},n)=>(e=(0,i.vE)(e,"card-link"),(0,o.jsx)(r,{ref:n,className:t()(a,e),...s}))));N.displayName="CardLink";var g=N,j=r(9602);const w=(0,j.Z)("h6"),k=n.forwardRef((({className:a,bsPrefix:e,as:r=w,...s},n)=>(e=(0,i.vE)(e,"card-subtitle"),(0,o.jsx)(r,{ref:n,className:t()(a,e),...s}))));k.displayName="CardSubtitle";var y=k;const R=n.forwardRef((({className:a,bsPrefix:e,as:r="p",...s},n)=>(e=(0,i.vE)(e,"card-text"),(0,o.jsx)(r,{ref:n,className:t()(a,e),...s}))));R.displayName="CardText";var C=R;const P=(0,j.Z)("h5"),E=n.forwardRef((({className:a,bsPrefix:e,as:r=P,...s},n)=>(e=(0,i.vE)(e,"card-title"),(0,o.jsx)(r,{ref:n,className:t()(a,e),...s}))));E.displayName="CardTitle";var $=E;const Z=n.forwardRef((({bsPrefix:a,className:e,bg:r,text:s,border:n,body:c=!1,children:l,as:m="div",...f},v)=>{const h=(0,i.vE)(a,"card");return(0,o.jsx)(m,{ref:v,...f,className:t()(e,h,r&&`bg-${r}`,s&&`text-${s}`,n&&`border-${n}`),children:c?(0,o.jsx)(d,{children:l}):l})}));Z.displayName="Card";var I=Object.assign(Z,{Img:p,Title:$,Subtitle:y,Body:d,Link:g,Text:C,Header:h,Footer:m,ImgOverlay:x})}}]);
//# sourceMappingURL=component---src-pages-archive-tsx-11d59a71d78d4becf85c.js.map