"use strict";var precacheConfig=[["/site-queops/index.html","2fe06af4544800dee9c0d2fc960531c0"],["/site-queops/static/css/main.4f6d18bc.css","498990aa00c0aec23a30f544a705afc1"],["/site-queops/static/js/main.717e168c.js","e592a345326cf945ab2c639c01f7816d"],["/site-queops/static/media/1.9853979a.jpg","9853979a1e93d4423b8eb1963b53603f"],["/site-queops/static/media/1.ada0ae6f.png","ada0ae6f234abdea7ed3690bbf941b41"],["/site-queops/static/media/1.d1cdf97d.png","d1cdf97da0369acf7b98759bb4e32ea7"],["/site-queops/static/media/2.05c8bb2c.jpg","05c8bb2c810b4ea7e987a22cfbd75f25"],["/site-queops/static/media/2.43e45798.jpg","43e45798488936743c6ef6862847bd8b"],["/site-queops/static/media/2.c0ad2453.png","c0ad245349c7eeda930e4e60aac3435d"],["/site-queops/static/media/3.59f76311.png","59f76311e41f4e365c53d85484b2aa94"],["/site-queops/static/media/3.7aa03dac.png","7aa03dac420e46b53503307b91806dab"],["/site-queops/static/media/4.576a6c83.png","576a6c838535d124040bb74faccd0b8b"],["/site-queops/static/media/4.fd4a20ae.png","fd4a20aea003bba4435b81fc484234b5"],["/site-queops/static/media/5.8c380938.jpg","8c380938667e9eec20b3e9761c2b0cd9"],["/site-queops/static/media/5.fe8f142f.png","fe8f142f797c522f6857ad3a62525878"],["/site-queops/static/media/6.215d64df.png","215d64df2563290b8fec703d282d795d"],["/site-queops/static/media/6.44a22795.jpg","44a22795145617a337c23adcb935a078"],["/site-queops/static/media/7.16413be6.png","16413be6785e0a54fa4b84bb33839107"],["/site-queops/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/site-queops/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/site-queops/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/site-queops/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),t=urlsToCacheKeys.has(a));var n="/site-queops/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});