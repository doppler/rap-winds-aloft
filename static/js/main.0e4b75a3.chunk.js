(this["webpackJsonprap-winds-aloft"]=this["webpackJsonprap-winds-aloft"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i=n.n(c),s=n(18),a=n.n(s),o=(n(25),n(9)),l=n(2),j=(n(26),function(){return Object(r.jsx)("button",{className:"menu icon",children:Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:[Object(r.jsx)("defs",{children:Object(r.jsx)("rect",{id:"bar",width:"256",height:"48",rx:"16"})}),Object(r.jsx)("use",{href:"#bar",transform:"translate(0, 16)"}),Object(r.jsx)("use",{href:"#bar",transform:"translate(0, 96)"}),Object(r.jsx)("use",{href:"#bar",transform:"translate(0, 176)"})]})})}),d=function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:Object(r.jsx)("path",{className:"arrow",d:"M 128 24 L 18 128 L 128 232",fill:"none",stroke:"var(--highlight-color)","stroke-width":"48","stroke-linejoin":"round","stroke-linecap":"round",transform:"translate(48,0)"})})},u=function(){var e=Object(l.g)(),t=Object(l.f)();return Object(r.jsx)("div",{children:"/"===e.pathname?Object(r.jsx)(o.b,{to:"/menu",children:Object(r.jsx)(j,{})}):Object(r.jsx)("button",{onClick:function(){return t.goBack()},className:"icon",children:Object(r.jsx)(d,{})})})},h=(n(32),function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:Object(r.jsx)("path",{className:"arrow",d:"M 128 24 L 18 128 L 128 232",fill:"none","stroke-width":"48","stroke-linejoin":"round","stroke-linecap":"round",transform:"rotate(180, 128 128) translate(48,0)"})})}),b=function(){var e=Object(l.f)();return Object(r.jsx)("ul",{className:"Menu",children:Object(r.jsxs)("li",{onClick:function(){return t="/about",void e.push(t);var t},children:[Object(r.jsx)("div",{children:"About"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"icon",children:Object(r.jsx)(h,{})})})]})})},f=(n(33),function(){return Object(r.jsxs)("div",{className:"About",children:[Object(r.jsx)("h1",{children:"About"}),Object(r.jsxs)("p",{children:["Display a current winds aloft forecast from"," ",Object(r.jsx)("a",{href:"https://rucsoundings.noaa.gov/",target:"_blank",rel:"noopener noreferrer",children:"rucsoundings.noaa.gov"}),"."]}),Object(r.jsx)("p",{children:"Your location is determined using your device's location service. The ground elevation and winds aloft forecast for your location are fetched from online services. The forecast data is cached on your device until the start of each hour, and refetched after that."}),Object(r.jsx)("p",{children:"Reported altitudes are Above Ground Level (AGL). A future option may allow the choice do display altitudes above Mean Sea Level (MSL)."}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"warning",children:"PLEASE NOTE:"})," This app probably only works correctly in the United States, as it uses NOAA and USGS services to gather data."]}),Object(r.jsx)("h2",{children:"Future plans"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Integrate map service to fine-tune location"}),Object(r.jsx)("li",{children:"Provide preference option to view metric or imperial units"}),Object(r.jsx)("li",{children:"Provide preference option for light or dark theme"}),Object(r.jsx)("li",{children:"Provide option to clear forecast cache"}),Object(r.jsx)("li",{children:'Provide option to "Save" app to device'})]}),Object(r.jsx)("h2",{children:"Contact"}),Object(r.jsx)("p",{children:"David Rose (doppler@gmail.com)"}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:"https://facebook.com/doppler",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})})]})}),O=n(10),x=n.n(O),p=n(16),v=n(11),g=n.p+"static/media/Loading.1831e8a7.svg",m=function(e){var t=e.dir;return Object(r.jsxs)("svg",{viewBox:"0 0 512 512",height:"2em",width:"2em",children:[Object(r.jsx)("circle",{id:"ring",cx:"256",cy:"256",r:"237.32505032019532",stroke:"var(--highlight-color)",strokeWidth:"37.349899359609346"}),Object(r.jsx)("path",{id:"arrow",d:" M 260.4 0 L 269.56814539771983 274.6749500197458 L 313.475583094649 335.1083534400135 L 256 512 L 198.52441690535102 335.1083534400135 L 242.43185460228014 274.6749500197458 L 251.6 0 Z",fill:"var(--warning-color)",transform:"rotate(".concat(t,", 256, 256)")})]})},w={latitude:0,longitude:0},k=function(){var e=Object(c.useState)(w),t=Object(v.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(0),a=Object(v.a)(s,2),o=a[0],l=a[1],j=Object(c.useState)(null),d=Object(v.a)(j,2),u=d[0],h=d[1],b=Object(c.useState)("Loading..."),f=Object(v.a)(b,2),O=f[0],k=f[1],L=function(e){i({latitude:Number(e.coords.latitude.toFixed(7)),longitude:Number(e.coords.longitude.toFixed(7))})};return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition(L)}),[]),Object(c.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("cache")||"null");e&&e.hour>(new Date).getUTCHours()&&(h(e),l(e.elevation))}),[]),Object(c.useEffect)((function(){if(!o&&n.latitude){var e=new AbortController;return function(){var t=Object(p.a)(x.a.mark((function t(n){var r,c,i,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k("Determining location elevation..."),r=Object.entries({x:n.longitude,y:n.latitude,units:"Meters",output:"json"}).map((function(e){return e.join("=")})).join("&"),c="https://nationalmap.gov/epqs/pqs.php?".concat(r),t.next=6,fetch(c,{signal:e.signal});case 6:return i=t.sent,t.next=9,i.json();case 9:s=t.sent,l(s.USGS_Elevation_Point_Query_Service.Elevation_Query.Elevation),k(""),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0.name);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()(n),function(){return e.abort()}}}),[n,o]),Object(c.useEffect)((function(){if(!u&&o){var e=new AbortController;return function(){var t=Object(p.a)(x.a.mark((function t(n,r){var c,i,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k("Fetching winds aloft forecast data..."),c="https://weatherflow-dash.herokuapp.com/winds-aloft/".concat(n.latitude,"/").concat(n.longitude,"/").concat(r),t.next=5,fetch(c,{signal:e.signal});case 5:return i=t.sent,t.next=8,i.json();case 8:s=t.sent,h(s),sessionStorage.setItem("cache",JSON.stringify(s)),k(""),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0.name);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,n){return t.apply(this,arguments)}}()(n,o),function(){return e.abort()}}}),[n,o,u]),u?Object(r.jsxs)("div",{id:"winds-aloft-chart",children:[u.soundings.map((function(e,t){return Object(r.jsxs)("div",{className:"sounding",children:[Object(r.jsxs)("div",{children:[e.altitude.feetAGL," ft."]}),Object(r.jsxs)("div",{children:[e.windSpd.mph," mph"]}),Object(r.jsx)("div",{children:Object(r.jsx)(m,{dir:e.windDir})}),Object(r.jsxs)("div",{children:[e.windDir,"\xb0"]}),Object(r.jsxs)("div",{children:[e.temp.f,"\xb0F"]})]},t)})).reverse(),Object(r.jsxs)("div",{className:"footer",children:[u.header,Object(r.jsx)("br",{}),u.op40,Object(r.jsx)("br",{}),"Elevation: ",u.elevation,"m MSL"]})]}):Object(r.jsxs)("div",{className:"Loading-indicator",children:[Object(r.jsx)("h2",{children:O}),Object(r.jsx)("img",{src:g,alt:"Loading indicator",className:"Loading-indicator-svg"})]})};var L=function(){return Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"Header",children:Object(r.jsx)(u,{})}),Object(r.jsx)("div",{className:"Main",children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/about",children:Object(r.jsx)(f,{})}),Object(r.jsx)(l.a,{path:"/menu",children:Object(r.jsx)(b,{})}),Object(r.jsx)(l.a,{path:"/",children:Object(r.jsx)(k,{})})]})})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),S()}},[[35,1,2]]]);
//# sourceMappingURL=main.0e4b75a3.chunk.js.map