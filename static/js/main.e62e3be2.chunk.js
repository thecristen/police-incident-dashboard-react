(window["webpackJsonpbos-criminal-incidence"]=window["webpackJsonpbos-criminal-incidence"]||[]).push([[0],{11:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(4),c=e.n(o),i=(e(11),e(2)),s=e.n(i),u=e(1),d=e.n(u),p=e(5),f=e.n(p),h="https://cors-anywhere.herokuapp.com/https://data.boston.gov/api/3/action/datastore_search_sql?sql=";var m="YYYY-MM-DD hh:mm",l="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",v='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',w=6e4;function E(t,n){return d.a.marker(n,{icon:d.a.divIcon({className:"incident-marker"})})}function b(t){var n=t.incidents;return d.a.geoJSON(n,{pointToLayer:E}).bindPopup((function(t){return function(t){var n=t.incident;return JSON.stringify(n)}({incident:t.feature.properties})}))}function g(){return Object(r.useEffect)((function(){var t,n=function(){var t=d.a.map("map").setView([42.3,-71.0589],13);return d.a.tileLayer(l,{TILE_LAYER_ATTRIBUTION:v,maxZoom:19}).addTo(t),t}(),e=s()().format(m),r=s()().subtract(24,"hours").format(m),a=function(){(function(t){var n=t.startDate,e=t.endDate,r='SELECT * from "12cb3883-56f5-47de-afa5-3b1cf61b257b" WHERE "OCCURRED_ON_DATE" BETWEEN \''.concat(n,"' and '").concat(e,"'");return fetch(h+r).then((function(t){return t.json()})).then((function(t){return f.a.parse(t.result.records,{Point:["Lat","Long"]})}))})({startDate:r,endDate:e}).then((function(e){t&&t.clearLayers(),t=b({incidents:e}).addTo(n)}))};a();var o=setInterval(a,w);return function(){return clearInterval(o)}})),a.a.createElement("div",{id:"map",style:{width:"100vw",height:"100vh"}})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement((function(){return a.a.createElement(g,null)}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},6:function(t,n,e){t.exports=e(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.e62e3be2.chunk.js.map