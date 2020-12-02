(this["webpackJsonprap-winds-aloft"]=this["webpackJsonprap-winds-aloft"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),r=n.n(i),a=n(18),s=n.n(a),o=(n(25),n(8)),u=n(2),j=(n(26),n.p+"static/media/MenuIcon.5493e055.svg"),l=n.p+"static/media/BackButton.93e6347d.svg",d=function(){var e=Object(u.g)(),t=Object(u.f)();return Object(c.jsx)("div",{children:"/"===e.pathname?Object(c.jsx)(o.b,{to:"/menu",children:Object(c.jsx)("img",{src:j,alt:"menu icon",className:"menu-icon"})}):Object(c.jsx)("button",{onClick:function(){return t.goBack()},children:Object(c.jsx)("img",{src:l,alt:"back button",className:"menu-icon"})})})},b=function(){return Object(c.jsx)("div",{className:"Menu",children:Object(c.jsx)("div",{children:Object(c.jsx)(o.b,{to:"/about",children:"About"})})})},h=n(10),f=n.n(h),O=n(16),x=n(11),v=n.p+"static/media/Loading.1831e8a7.svg",p=function(e){var t=e.dir;return Object(c.jsxs)("svg",{viewBox:"0 0 512 512",height:"2em",width:"2em",children:[Object(c.jsx)("circle",{cx:"256",cy:"256",r:"237.32505032019532",fill:"hsl(210, 100%, 33%)",stroke:"hsl(210, 100%, 66%)",strokeWidth:"37.349899359609346"}),Object(c.jsx)("path",{d:" M 260.4 0 L 269.56814539771983 274.6749500197458 L 313.475583094649 335.1083534400135 L 256 512 L 198.52441690535102 335.1083534400135 L 242.43185460228014 274.6749500197458 L 251.6 0 Z",fill:"hsl(30, 100%, 50%)",transform:"rotate(".concat(t,", 256, 256)")})]})},g={latitude:0,longitude:0},m=function(){var e=Object(i.useState)(g),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(0),s=Object(x.a)(a,2),o=s[0],u=s[1],j=Object(i.useState)(null),l=Object(x.a)(j,2),d=l[0],b=l[1],h=Object(i.useState)("Loading..."),m=Object(x.a)(h,2),w=m[0],L=m[1],S=function(e){r({latitude:Number(e.coords.latitude.toFixed(7)),longitude:Number(e.coords.longitude.toFixed(7))})};return Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition(S)}),[]),Object(i.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("cache")||"null");e&&e.hour>(new Date).getUTCHours()&&(b(e),u(e.elevation))}),[]),Object(i.useEffect)((function(){if(!o&&n.latitude){var e=new AbortController;return function(){var t=Object(O.a)(f.a.mark((function t(n){var c,i,r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L("Determining location elevation..."),c=Object.entries({x:n.longitude,y:n.latitude,units:"Meters",output:"json"}).map((function(e){return e.join("=")})).join("&"),i="https://nationalmap.gov/epqs/pqs.php?".concat(c),t.next=6,fetch(i,{signal:e.signal});case 6:return r=t.sent,t.next=9,r.json();case 9:a=t.sent,u(a.USGS_Elevation_Point_Query_Service.Elevation_Query.Elevation),L(""),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0.name);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()(n),function(){return e.abort()}}}),[n,o]),Object(i.useEffect)((function(){if(!d&&o){var e=new AbortController;return function(){var t=Object(O.a)(f.a.mark((function t(n,c){var i,r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L("Fetching winds aloft forecast data..."),i="https://weatherflow-dash.herokuapp.com/winds-aloft/".concat(n.latitude,"/").concat(n.longitude,"/").concat(c),t.next=5,fetch(i,{signal:e.signal});case 5:return r=t.sent,t.next=8,r.json();case 8:a=t.sent,b(a),sessionStorage.setItem("cache",JSON.stringify(a)),L(""),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0.name);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,n){return t.apply(this,arguments)}}()(n,o),function(){return e.abort()}}}),[n,o,d]),d?Object(c.jsxs)("div",{id:"winds-aloft-chart",children:[d.soundings.map((function(e,t){return Object(c.jsxs)("div",{className:"sounding",children:[Object(c.jsxs)("div",{children:[e.altitude.feetAGL," ft."]}),Object(c.jsxs)("div",{children:[e.windSpd.mph," mph"]}),Object(c.jsx)("div",{children:Object(c.jsx)(p,{dir:e.windDir})}),Object(c.jsxs)("div",{children:[e.windDir,"\xb0"]}),Object(c.jsxs)("div",{children:[e.temp.f,"\xb0F"]})]},t)})).reverse(),Object(c.jsxs)("div",{className:"footer",children:[d.header,Object(c.jsx)("br",{}),d.op40,Object(c.jsx)("br",{}),"Elevation: ",d.elevation,"m MSL"]})]}):Object(c.jsxs)("div",{className:"Loading-indicator",children:[Object(c.jsx)("h2",{children:w}),Object(c.jsx)("img",{src:v,alt:"Loading indicator",className:"Loading-indicator-svg"})]})};var w=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"Header",children:Object(c.jsx)(d,{})}),Object(c.jsx)("div",{className:"Main",children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/about",children:Object(c.jsx)("h1",{children:"About"})}),Object(c.jsx)(u.a,{path:"/menu",children:Object(c.jsx)(b,{})}),Object(c.jsx)(u.a,{path:"/",children:Object(c.jsx)(m,{})})]})})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),L()}},[[33,1,2]]]);
//# sourceMappingURL=main.e1ad704a.chunk.js.map