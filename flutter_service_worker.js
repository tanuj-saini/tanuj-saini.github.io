'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9b65826025a2b8eb43edfab714826e80",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "491b0f76b5c56e242a8d536c7fc6d974",
"/": "491b0f76b5c56e242a8d536c7fc6d974",
"main.dart.js": "2dfe513f7beb695edb537dcd02705792",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "adcafc2847e3357d7ab417fd8b71ee3f",
".git/ORIG_HEAD": "2c8736a9cda481585f93c08f3ad54c0d",
".git/config": "24dc9499dec430fdcfab1ca77043b73b",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3b/6b173f1b0b540f27047029fc84fc28541c2b9b": "69d2a59a81dceb669acfaeb6713a50d6",
".git/objects/32/b48d3bb10a492e9232e2b2a72aa7a891df66ff": "f90d5df3203ca5d9a9d981f673d6f7aa",
".git/objects/32/769ee44f34cabad2586578c2933bbd90ad5467": "03e0ff14c036b54c491171865fa6f982",
".git/objects/0b/2941eacc393befb80dc26051e76e6e2098ac5d": "609dd5f88d56606e9685587e3960856a",
".git/objects/5a/2ed602d1745f6393588b83dc67345b6eb2577a": "ab588056cadd4d3b6dcbf24ea9195e58",
".git/objects/05/152d2cc784827870253ff045841a405b7b6d46": "93fa582786bc51664493976800bfb592",
".git/objects/a2/f48cce6c6724979df0b4d6228f8012f4c6516e": "304b6afbddf8233a36f97667c1afa018",
".git/objects/bd/9ada6fd1b0d7b828588792a355c7c30e7e95c5": "b3bc75d278fadfb1e2c9527f3fdc7f4b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/dec999ef9e11a3a385a6c94488b195ab8b8617": "d17a0fa8741551bbd9fe8ca60fe9a85c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/ec356039d9ce7f83820b56c8c7e665acdaeac2": "529f820affe986807c4f7e8197565931",
".git/objects/f5/21b58d5356267595a96abf6499e2d399d9b37f": "4141bff9f15ca8ca162ee25ae4079457",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/78dfc39615914130922fc366066c7c0259197b": "2dd4b8d5d96baccd3ff913affe08e670",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/aac3040d006bafccad3e2153a925ad6728b557": "91bb3f5df37bacfd883c6e2e8821f03a",
".git/objects/20/f1b45bf0d9d387652da4a21739b620cb794b2e": "d2ae5d99f66ef54b61f031055e348ae7",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/1a/71c735f5ec4048b2f50da5c6e787f026336c9d": "0d5f2b5198fb8e0a0db720d3608b1399",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/e22048508ac813f4ccc3f0322f60a81b8aa47c": "098e8c8ef1f308d1eb821e7b5282dc8c",
".git/objects/4d/811d07778f85f0b4487e65b74a1e4a2ccfde06": "12a3196784451a168fa1267f804dded2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/d6b97787c6b149dea20e44fc0fb7306185c3a4": "908c3641bbcc3226e3d44541b7d2499c",
".git/objects/91/aa6188bd332bd1273efcbc0f181166e927286c": "7d0b2b5861414a34e2338acc9f5b0859",
".git/objects/65/bb36790610e18bee15169bca8b1e86e79c8bef": "4a302810cc69ee57226ac3015c1f891e",
".git/objects/5e/72316bc7d389776e439432d47276d196f0215f": "1627d540356a6cdb499a427ff01bfbce",
".git/objects/37/82dab75352bc9d565a29b74e10ddfd3adb1489": "4810d72daace999f9fb3c10a1fb13212",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/99/f75b243fe6be68c8a66935796a91b7c0a6417b": "e5ebe209ceeb6ca4b941e087617b7fc2",
".git/objects/52/55ca877b230e636cc552e280ddc29901074eb3": "cfc980a7541098b96438c87dd387dce4",
".git/objects/97/ab37067ab4ed102a51264fde142bc8d81d10d0": "b9c2f3e15963066ca0e6e45d46eb9546",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/bf/e19e3ad456065e41060bdc51e96a8866dfcf69": "cc114658be7ac456b8538b7aef7c6351",
".git/objects/bf/f53304f95f6b34142191fc0b0fb2440a0194b7": "56580a97d5ce4c96994bf691931f0f84",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/d3217ab333c3be388244c06c8cb802eab5e33d": "f57436d8157d94f94c3aa1ad4b8b8c91",
".git/objects/af/52e91368c3a69c647192098d83cae927099fe8": "1598370fde0739c50fd20324e6c3b078",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/1c6621521730c4ae25635758c60bee7dc52c8c": "a62693d52afb6ae83206ac7865d23710",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/744742cb521a5bc4b379a3f7af5c4af7213f1c": "62e1478c3fd4809060c70552c2908dd8",
".git/objects/ef/f4d66c549e506a663c0936d7eab0f2a26b841a": "92ec908c2fc527c67e76c75ce43a8ee3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/e6/9cc6849d0779e38b31a162718af174eecf586e": "6af552d15e704ecd1b0d79345da07431",
".git/objects/f6/8211730793ab23ee071c7ea1aa90a866c0caeb": "fe31512366452f4a55a3d8caf17ed618",
".git/objects/f1/dbbc1aea4a22112116fc7409553b4c751da16b": "53bd8ba8fd8eac429db59646e2cf832b",
".git/objects/e0/da531dd5ae0ad82bd8dff8b2bb1967aae01f45": "595e8bf6f690301e3b450b1c6c5fad90",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/136afab362b7853744af9ca4d509c03fb49414": "245ecace4841df7529f90c06d024dbf5",
".git/objects/14/8ae194bc3f3c2133b3a7db44fc29bb48dfa821": "533273e4702368e11e93cef9a019d77b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/24a0e3f0af0d27df2e0e150e5a426794758770": "c90f127f1d7ea120bc981f00dfedc4dd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "94d71426287e01bd06951b8b9466d34b",
".git/logs/refs/heads/main": "cbb2cb58980fed5d6c3d8e02481a4f25",
".git/logs/refs/remotes/origin/main": "0b2bb75d6c421afb07a816dce773abcf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2c8736a9cda481585f93c08f3ad54c0d",
".git/refs/remotes/origin/main": "2c8736a9cda481585f93c08f3ad54c0d",
".git/index": "0f884b16b7b0b815dbd7dddd44c43df1",
".git/COMMIT_EDITMSG": "ca2be4faea6cc32f8f540ab919d4b016",
".git/FETCH_HEAD": "eacacc169add8772792f9daa12a2c249",
"assets/AssetManifest.json": "7b65b370a4c1fcfbaffcb8fad4f061db",
"assets/NOTICES": "897917e2af92fab07b5e67df8c30f91b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0289ba3f5659f33531cf23156b2afabb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "380f1d89aef4c4ca35ace29d273d312c",
"assets/fonts/MaterialIcons-Regular.otf": "e3c7c12502fa48bbbcc27fc694a7dd3a",
"assets/assets/me.png": "94cc19171c28cfaf81465ef29609ccf9",
"assets/assets/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/instagram.png": "0634a5babf36db50e415356b348e3f30",
"assets/assets/macbook1.png": "b3dab6197c9c1ee22d65297dc8d8cbef",
"assets/assets/community.png": "22705af6dc5c470edc568b2c781e58f8",
"assets/assets/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/Doctor.png": "f100f5815f64c5f985fb3bb57146c116",
"assets/assets/butterfly.png": "e9277ce456f3eb825cefe95150924055",
"assets/assets/linkedin.png": "0dfdf900b4949bfe7a038c3121e99376",
"assets/assets/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/quiz.png": "9508e653b3cbbda8e6181052fa9210b1",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
