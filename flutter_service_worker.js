'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "74e9f48092619022f3db764af92896b1",
"index.html": "57c8405bfe77f07a4ed3e7f6fd1555a3",
"/": "57c8405bfe77f07a4ed3e7f6fd1555a3",
"main.dart.js": "9d8c7bde0912142fa4e440a5f31523ff",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "46424276593870cde7b0828aa36bfaa1",
"icons/Icon-192.png": "46424276593870cde7b0828aa36bfaa1",
"icons/Icon-maskable-192.png": "46424276593870cde7b0828aa36bfaa1",
"icons/Icon-maskable-512.png": "46424276593870cde7b0828aa36bfaa1",
"icons/Icon-512.png": "46424276593870cde7b0828aa36bfaa1",
"manifest.json": "e44b02cb382a56328d234edcf9eb9046",
"assets/AssetManifest.json": "16363dbd0dad01211231a8f7d665a144",
"assets/NOTICES": "deeea30e42c845b60c42ae46d7aad9c8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/cerf_gran.jpg": "8a30a92fc214942e1e541ba33da3d3ae",
"assets/assets/images/162.png": "f068242847a5f9760304f87aeed8085e",
"assets/assets/images/63.png": "9c29b7228abe0c40cde37821187250ad",
"assets/assets/images/russia.png": "a5519713ca22024f5fc69db35b6760f0",
"assets/assets/images/scanner8.png": "d5fcecff165234c96654381d9c660972",
"assets/assets/images/euromasterSe_acc.png": "64027cc0d21b0592c04dd08d696d1b02",
"assets/assets/images/prog2_acc.png": "4ee62375cd59882b87b7da48358535a4",
"assets/assets/images/scanner9.png": "49e89feecfff2f12ef176e5eb5caf9d6",
"assets/assets/images/62.png": "175cca72ce506444f10585800b8690eb",
"assets/assets/images/163.png": "5f59ca295372ff48c918f09f55a10c8f",
"assets/assets/images/komp609.jpg": "2990747cc64ba75443094809dcd242be",
"assets/assets/images/euromasterx_acc.png": "371de737155e83850d84b39dd16e118d",
"assets/assets/images/74.png": "4b5482a954bfa2d1c9edfb344d3f881d",
"assets/assets/images/cerf.jpg": "3097767d78c2c89056f5ab2dd02a8434",
"assets/assets/images/164.png": "62bd9a77b2ddd2352dcbb245754bf5b1",
"assets/assets/images/twand900_acc.png": "9971b6e8d02041fd801aca93b95d91d3",
"assets/assets/images/time.png": "8ed5b4ccae214f49f8e16861af734239",
"assets/assets/images/64.png": "33008ce3d5bf5566189d06ebe45adc4b",
"assets/assets/images/bg_mobile.jpg": "03fafb505fc5e354c477dd15008bc47b",
"assets/assets/images/72.png": "784ff6b3a081179d136c9abb6d11e348",
"assets/assets/images/instagram.png": "b48f88d0075943d6ace94162173ba1f9",
"assets/assets/images/73.png": "11f0d4aad7add3ce44148e76a0f350f5",
"assets/assets/images/14.jpg": "f1078c61cd43f5f9f0c4c3ab38907682",
"assets/assets/images/second_bg.png": "4cfb3a133d9751c68cad9e44789942c3",
"assets/assets/images/114.png": "5e76e3203902e14e46b86fe3440f0ab5",
"assets/assets/images/unique.png": "d3c9238324fb92becb9a8e55bd9dbb71",
"assets/assets/images/102.png": "eaa314a44ded98c929d92e2c06318149",
"assets/assets/images/komp906.png": "d8598fb66a4287a6240dfff6f4761230",
"assets/assets/images/103.png": "b5adfd0af9f4a160df39c9d84c08dfcc",
"assets/assets/images/12.jpg": "af54706fd829d83e316694fa82502b42",
"assets/assets/images/113.png": "99b5381418f6a7953ba524c90a32d9a7",
"assets/assets/images/112.png": "502b88cc51016f097dad77648b60c189",
"assets/assets/images/13.jpg": "ce4ea832e689f959c0ec9b1e7e321fde",
"assets/assets/images/104.png": "c9bea00e2ceba0db0f8a6a2b6b5f9186",
"assets/assets/images/scanner14.png": "dd0ce58cd3333fe909f97a67e5fd3e00",
"assets/assets/images/134.png": "065a6e78000360e154e0d0641840e7cd",
"assets/assets/images/gdi100_ca.png": "d99bf64753452197809199ac9fa49b8c",
"assets/assets/images/scanner15.png": "f738854a66f367fc08020ffcb1c6cc24",
"assets/assets/images/34.jpg": "f3ca7ba4e1b60a03192459709b89bd10",
"assets/assets/images/123.png": "181a449077e3450e7b70346eeef0514c",
"assets/assets/images/22.png": "e9ab02d140ff70ec22954f3a6f5ca66e",
"assets/assets/images/azerbaijan.png": "317ca43e6424969e0321ac0a10c69166",
"assets/assets/images/23.png": "cd93c61f2cd2569dcc6d412810a41e02",
"assets/assets/images/122.png": "233beb17182772fed4cedb2232417d51",
"assets/assets/images/scanner16.png": "3c72e9858f7076cbdb31d875cfc64657",
"assets/assets/images/logo.png": "76e3adada85d4fe8c38cc74eecb7f01f",
"assets/assets/images/33.jpg": "0ace8f7b2dc89c5a130e63498fcdfc68",
"assets/assets/images/132.png": "a7028127e137728162a49ff595c500d8",
"assets/assets/images/scanner12.png": "63d8e375245465867561cacbb43b5043",
"assets/assets/images/scanner13.png": "56086242e94fd11796d36e9db064419e",
"assets/assets/images/133.png": "58a0cf9c0255f9afbb3ce0f838c0a2e1",
"assets/assets/images/32.jpg": "ec153284f77022146f54c386ff405196",
"assets/assets/images/scanner11.png": "38eaaa7ab25d578befbaa94a3d409a89",
"assets/assets/images/main_bg.jpg": "03fafb505fc5e354c477dd15008bc47b",
"assets/assets/images/cerf_kajo.jpg": "b01e365715d74734a5642522b6f87875",
"assets/assets/images/komp908.png": "33356136149ddb7c6c6e3b695d82e237",
"assets/assets/images/euroexpert_acc.png": "05e093519cbe86d24c303fd0dacbea40",
"assets/assets/images/phone.png": "85ec05ca774884315647dfa00a9586a4",
"assets/assets/images/komp909.png": "7a3b44d317d7b8d3e2f96a292355cc7d",
"assets/assets/images/quality.png": "830c63eda90a6030402d6d38d41d86dc",
"assets/assets/images/scanner10.png": "21522f85ac752dbc6498eb3ce6b00ded",
"assets/assets/images/124.png": "b473f7747e8d1b6c040702065ca45344",
"assets/assets/images/42.jpg": "4087bf3c165ac4ca018f6349fa57558d",
"assets/assets/images/lider.png": "a7b92c71044a679b1a1552a423f2892b",
"assets/assets/images/143.png": "0a03acfdd9774803cb34bf7e704bc71e",
"assets/assets/images/scanner1.jpg": "4b561485ffe9ed486d26ac3e0ad8addf",
"assets/assets/images/youtube.png": "c35053a09cc0ad14611ba87c5b258cea",
"assets/assets/images/142.png": "b10c63c31828ab271620d54035c0f97f",
"assets/assets/images/proffesional.png": "0860d61410fb61ec9e64c7def7ef8d35",
"assets/assets/images/43.jpg": "68a2b6ec8b248175d986b5b2dfc07570",
"assets/assets/images/82.png": "4a4b5356b27312c9557f6f1f3b32d7fe",
"assets/assets/images/readerhd_acc.png": "9b3b470b3ad0e5cd105a694747820cb0",
"assets/assets/images/scanner2.jpg": "46ce36c55e19e5e7f34fede64dd3a657",
"assets/assets/images/scanner3.jpg": "c81384ee074c39dbc63e376e1577ebc7",
"assets/assets/images/83.png": "cc459d47eb1fba66d4b6472c197db5e0",
"assets/assets/images/whatsapp.png": "f800b23acb9734bbc05bff56f44f8967",
"assets/assets/images/54.jpg": "bd505be9086a5630283b42a7a7ee2164",
"assets/assets/images/44.jpg": "a466c35340c680817e0825cc5f02943f",
"assets/assets/images/komp808.png": "f67fc5468ec72079f56360cd07c09373",
"assets/assets/images/93.png": "98ee85bc636a8fe217ccaee42ebc608e",
"assets/assets/images/scanner7.jpg": "36ca1c30a1cad2c9b2c5583115f36b3f",
"assets/assets/images/scanner6.png": "16176084b74c1bd135505cf5b90388d4",
"assets/assets/images/92.png": "0f937940b2cb0531322b68fbdd304735",
"assets/assets/images/53.jpg": "109b9326fcce4fd705a677bd0d1418c1",
"assets/assets/images/152.png": "f5336798cb626aa706a6b40848038710",
"assets/assets/images/84.png": "f93c8eee3e8b2aedc4b9fa0b9f8a5bb0",
"assets/assets/images/scanner4.jpg": "3e2a7c6139317b998cba1ef0f477ff81",
"assets/assets/images/scanner5.jpg": "97f4a26a391cb4a78c1d00c7523ab621",
"assets/assets/images/153.png": "7f67918fb882c7d7ab94df3330d1fd47",
"assets/assets/images/52.jpg": "d4a7edc387f84a0a461c11c9bd4080fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
