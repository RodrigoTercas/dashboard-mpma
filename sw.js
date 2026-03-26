var CACHE='mpma-v1';
var URLS=['/dashboard-mpma/','/dashboard-mpma/index.html','/dashboard-mpma/view/index.html','/dashboard-mpma/icon-192.png','/dashboard-mpma/icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(URLS)}))});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}))});
