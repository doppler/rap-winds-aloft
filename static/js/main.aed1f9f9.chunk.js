(this["webpackJsonprap-winds-aloft"]=this["webpackJsonprap-winds-aloft"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"revision":"4304f0a1"}')},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i=n.n(c),a=n(19),o=n.n(a),s=(n(27),n(11)),l=n(2),d=(n(28),n(7)),u=n(17),j=JSON.parse(localStorage.getItem("settings")||"null")||{displayMetric:!1},h=function(e,t){switch(t.type){case"toggle-displayMetric":return Object(u.a)(Object(u.a)({},e),{},{displayMetric:!e.displayMetric});default:return e}},b=Object(c.createContext)({state:j,dispatch:function(){}}),f=function(){return Object(c.useContext)(b)},O=function(e){var t=e.children,n=Object(c.useReducer)(h,j),i=Object(d.a)(n,2),a=i[0],o=i[1];return Object(c.useEffect)((function(){localStorage.setItem("settings",JSON.stringify(a))}),[a]),Object(r.jsx)(b.Provider,{value:{state:a,dispatch:o},children:t})},p=n(20),v=function(){return Object(r.jsx)("button",{className:"menu icon",children:Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:[Object(r.jsx)("defs",{children:Object(r.jsx)("rect",{id:"bar",width:"256",height:"48",rx:"16"})}),Object(r.jsx)("use",{href:"#bar",transform:"translate(0, 16)"}),Object(r.jsx)("use",{href:"#bar",transform:"translate(0, 96)"}),Object(r.jsx)("use",{href:"#bar",transform:"translate(0, 176)"})]})})},x=function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:Object(r.jsx)("path",{"data-testid":"back-button",className:"arrow",d:"M 128 24 L 18 128 L 128 232",fill:"none",stroke:"var(--highlight-color)",strokeWidth:"48",strokeLinejoin:"round",strokeLinecap:"round",transform:"translate(48,0)"})})},g=function(){var e=Object(l.g)(),t=Object(l.f)();return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{children:"/"===e.pathname?Object(r.jsx)(s.b,{to:"/menu","aria-label":"Menu",children:Object(r.jsx)(v,{})}):Object(r.jsx)("button",{onClick:function(){return t.goBack()},className:"icon","aria-label":"Back",children:Object(r.jsx)(x,{})})}),Object(r.jsx)("div",{className:"title",children:"/"===e.pathname?"Winds Aloft":e.pathname.replace(/^\//,"").replace(/[^]/,(function(e){return e.toUpperCase()}))}),Object(r.jsxs)("div",{children:["Build: ",p.revision]})]})},m=(n(34),function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:Object(r.jsx)("path",{"data-testid":"forward-button",className:"arrow",d:"M 128 24 L 18 128 L 128 232",fill:"none",strokeWidth:"48",strokeLinejoin:"round",strokeLinecap:"round",transform:"rotate(180, 128 128) translate(48,0)"})})}),w=(n(35),function(){var e=f(),t=e.state,n=e.dispatch;return Object(r.jsxs)("label",{className:"switch",title:"displayMetricSwitch",children:[Object(r.jsx)("input",{"data-testid":"input",type:"checkbox",checked:t.displayMetric,onChange:function(e){n({type:"toggle-displayMetric"})}}),Object(r.jsx)("span",{className:"slider round"})]})}),k=function(){var e=Object(l.f)();return Object(r.jsxs)("ul",{className:"Menu",children:[Object(r.jsxs)("li",{onClick:function(){return e.push("/about")},"aria-label":"About",children:[Object(r.jsx)("div",{children:"About"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"icon",children:Object(r.jsx)(m,{})})})]}),Object(r.jsxs)("li",{onClick:function(){sessionStorage.removeItem("cache"),e.goBack()},children:[Object(r.jsx)("div",{children:"Clear Cache"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"icon","aria-label":"Clear Cache",children:Object(r.jsx)(m,{})})})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:"Display in Metric"}),Object(r.jsx)("div",{children:Object(r.jsx)(w,{})})]})]})},S=(n(36),function(){return Object(r.jsxs)("div",{className:"About",children:[Object(r.jsx)("h1",{children:"About"}),Object(r.jsxs)("p",{children:["Display a current winds aloft forecast from"," ",Object(r.jsx)("a",{href:"https://rucsoundings.noaa.gov/",target:"_blank",rel:"noopener noreferrer",children:"rucsoundings.noaa.gov"}),"."]}),Object(r.jsx)("p",{children:"Your location is determined using your device's location service. The ground elevation and winds aloft forecast for your location are fetched from online services. The forecast data is cached on your device until the start of each hour, and refetched after that."}),Object(r.jsx)("p",{children:"Reported altitudes are Above Ground Level (AGL). A future option may allow the choice do display altitudes above Mean Sea Level (MSL)."}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"warning",children:"PLEASE NOTE:"})," This app probably only works correctly in the United States, as it uses NOAA and USGS services to gather data."]}),Object(r.jsx)("h2",{children:"Future plans"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Integrate map service to fine-tune location"}),Object(r.jsx)("li",{children:"Provide preference option to view metric or imperial units"})]}),Object(r.jsx)("h2",{children:"Contact"}),Object(r.jsx)("p",{children:"David Rose (doppler@gmail.com)"}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:"https://facebook.com/doppler",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})})]})}),N=n(9),y=n.n(N),L=n(12),C=function(e,t,n){var r=Object(c.useState)(null),i=Object(d.a)(r,2),a=i[0],o=i[1];return Object(c.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("cache")||"null");o(e)}),[o]),Object(c.useEffect)((function(){var e=setInterval((function(){!function(e,t,n){if(!t)return!1;e===t.hour&&(sessionStorage.removeItem("cache"),n(null))}((new Date).getUTCHours(),a,o)}),6e4);return function(){return clearInterval(e)}}),[a,o]),Object(c.useEffect)((function(){if(!a&&t){var r=new AbortController;return function(){var e=Object(L.a)(y.a.mark((function e(t,c){var i,a,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n("Fetching winds aloft forecast data..."),i="https://weatherflow-dash.herokuapp.com/winds-aloft/".concat(t.latitude,"/").concat(t.longitude,"/").concat(c),e.next=5,fetch(i,{signal:r.signal});case 5:return a=e.sent,e.next=8,a.json();case 8:s=e.sent,o(s),sessionStorage.setItem("cache",JSON.stringify(s)),n(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.name);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}()(e,t),function(){return r.abort()}}}),[e,t,n,a]),{forecastJSON:a,setForecastJSON:o}},M=n.p+"static/media/Loading.54435b2a.svg",A=function(e){var t=e.dir;return Object(r.jsxs)("svg",{viewBox:"0 0 512 512",height:"2em",width:"2em",children:[Object(r.jsx)("circle",{id:"ring",cx:"256",cy:"256",r:"237.32505032019532",stroke:"var(--highlight-color)",strokeWidth:"37.349899359609346",fill:"var(--border-color)"}),Object(r.jsx)("path",{"data-testid":"arrow",id:"arrow",d:" M 260.4 0 L 269.56814539771983 274.6749500197458 L 313.475583094649 335.1083534400135 L 256 512 L 198.52441690535102 335.1083534400135 L 242.43185460228014 274.6749500197458 L 251.6 0 Z",fill:"var(--warning-color)",transform:"rotate(".concat(t,", 256, 256)")})]})},E=function(){var e=Object(c.useState)("Loading..."),t=Object(d.a)(e,2),n=t[0],i=t[1],a=function(){var e=Object(c.useState)({latitude:0,longitude:0}),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){r({latitude:Number(e.coords.latitude.toFixed(7)),longitude:Number(e.coords.longitude.toFixed(7))})}))}),[]),n}(),o=function(e,t){var n=Object(c.useState)(0),r=Object(d.a)(n,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){if(!i&&e.latitude){var n=new AbortController;return function(){var e=Object(L.a)(y.a.mark((function e(r){var c,i,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t("Determining location elevation..."),c=Object.entries({x:r.longitude,y:r.latitude,units:"Meters",output:"json"}).map((function(e){return e.join("=")})).join("&"),i="https://nationalmap.gov/epqs/pqs.php?".concat(c),e.next=6,fetch(i,{signal:n.signal});case 6:return o=e.sent,e.next=9,o.json();case 9:s=e.sent,a(s.USGS_Elevation_Point_Query_Service.Elevation_Query.Elevation),t(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()(e),function(){return n.abort()}}}),[e,i,t]),i}(a,i),s=C(a,o,i).forecastJSON;return Object(r.jsx)(J,{status:n,forecastJSON:s})},J=function(e){var t=e.status,n=e.forecastJSON;return n?Object(r.jsx)(B,{forecastJSON:n}):Object(r.jsx)(W,{status:t})},W=function(e){var t=e.status;return Object(r.jsxs)("div",{className:"Loading-indicator",children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("img",{src:M,alt:"Loading indicator",className:"Loading-indicator-svg"})]})},B=function(e){var t=e.forecastJSON,n=f().state.displayMetric;return Object(r.jsxs)("div",{id:"winds-aloft-chart","data-testid":"winds-aloft-chart",children:[t.soundings.map((function(e,t){return Object(r.jsxs)("div",{className:"sounding",children:[Object(r.jsx)("div",{children:n?"".concat(e.altitude.metersAGL," m."):"".concat(e.altitude.feetAGL," ft.")}),Object(r.jsx)("div",{children:n?"".concat(e.windSpd.kts," kts"):"".concat(e.windSpd.mph," mph")}),Object(r.jsx)("div",{children:Object(r.jsx)(A,{dir:e.windDir})}),Object(r.jsxs)("div",{children:[e.windDir,"\xb0"]}),Object(r.jsx)("div",{children:n?"".concat(e.temp.c," \xb0C"):"".concat(e.temp.f,"\xb0F")})]},t)})).reverse(),Object(r.jsxs)("div",{className:"footer",children:[t.header,Object(r.jsx)("br",{}),t.op40,Object(r.jsx)("br",{}),"Elevation: ",t.elevation,"m MSL"]})]})};var F=function(){return Object(r.jsx)(O,{children:Object(r.jsx)(s.a,{children:Object(r.jsxs)("div",{id:"App",children:[Object(r.jsx)("div",{id:"Header",children:Object(r.jsx)(g,{})}),Object(r.jsx)("div",{id:"Main",children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/about",children:Object(r.jsx)(S,{})}),Object(r.jsx)(l.a,{path:"/menu",children:Object(r.jsx)(k,{})}),Object(r.jsx)(l.a,{path:"/",children:Object(r.jsx)(E,{})})]})})]})})})},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rap-winds-aloft",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rap-winds-aloft","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}(),T()}},[[38,1,2]]]);
//# sourceMappingURL=main.aed1f9f9.chunk.js.map