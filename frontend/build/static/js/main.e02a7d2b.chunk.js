(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{16:function(e,t,r){},18:function(e,t,r){},19:function(e,t,r){},31:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),a=r(3),s=r.n(a),i=(r(16),r(10)),o=r(9),l=r(7),j=r.n(l),u=(r(18),r(19),r(2)),b=r(4),h=Object(b.b)({name:"pexel",initialState:{value:{}},reducers:{replacePexelObject:function(e,t){e.value=t.payload}}}),d=h.reducer,p=h.actions.replacePexelObject,O=(r(23),r(1));function x(){Object(u.c)((function(e){return e.pexel.value}));var e=Object(u.b)(),t=Object(c.useState)("candy"),r=Object(o.a)(t,2),n=r[0],a=r[1],s=function(){var t=Object(i.a)(j.a.mark((function t(r){var c,a,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PEXELS_API_KEY,"http://localhost:3001/search",c=new URLSearchParams({query:n,per_page:80}).toString(),a="http://localhost:3001/search?"+c,t.next=8,fetch(a,{method:"GET"});case 8:if(!(s=t.sent).ok){t.next=16;break}return t.next=12,s.json();case 12:i=t.sent,e(p(i)),t.next=17;break;case 16:throw new Error("Oops, response error occured!");case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"search-bar-container",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Image Search by Category"}),Object(O.jsxs)("div",{id:"poweredby-container",children:[Object(O.jsx)("h5",{children:"POWERED BY:"}),Object(O.jsx)("img",{id:"pexels-logo",src:"https://images.pexels.com/lib/api/pexels.png"})]})]}),Object(O.jsxs)("form",{id:"search-input-form",onSubmit:s,children:[Object(O.jsx)("input",{type:"text",value:n,onChange:function(e){a(e.target.value)}}),Object(O.jsx)("input",{type:"submit",value:"search"})]}),Object(O.jsx)("h4",{id:"search-helper-text",children:"e.g. ocean, nature, people, soccer"})]})}function g(e){var t=Object(u.c)((function(e){return e.pexel.value})),r=[],c=function(e){var t=e.currentTarget.getAttribute("tag");document.getElementById(t).classList.toggle("visible")};return Object(O.jsx)("div",{className:"gallery-container",children:function(){if(t.photos)for(var e=0,n=Object.entries(t.photos);e<n.length;e++){var a=Object(o.a)(n[e],2),s=(a[0],a[1]),i=s.src.portrait,l=s.id,j=s.photographer,u=s.photographer_url,b=s.avg_color;r.push(Object(O.jsxs)("div",{className:"image-container md-light",style:{backgroundColor:b},children:[Object(O.jsxs)("div",{className:"image-detail-container",id:l,children:[Object(O.jsx)("span",{children:"Photographer"}),Object(O.jsx)("a",{className:"artist-link",href:u,target:"_blank",children:j}),Object(O.jsx)("a",{className:"image-link",href:i,target:"_blank",children:"view image"})]}),Object(O.jsxs)("div",{className:"info-icon-container",tag:l,onClick:c,children:[Object(O.jsx)("span",{className:"circle-layer"}),Object(O.jsx)("i",{className:"fas fa-bars info-icon"})]}),Object(O.jsx)("img",{src:i})]},l))}return r}()})}var f=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(g,{})]})},m=Object(b.a)({reducer:{pexel:d}});s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(u.a,{store:m,children:Object(O.jsx)(f,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e02a7d2b.chunk.js.map