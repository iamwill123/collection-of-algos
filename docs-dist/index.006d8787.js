// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4K1yG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f1bbffd5006d8787";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nativeSort", ()=>(0, _nativeDefault.default));
parcelHelpers.export(exports, "bubbleSort", ()=>(0, _bubbleDefault.default));
parcelHelpers.export(exports, "selectionSort", ()=>(0, _selectionDefault.default));
parcelHelpers.export(exports, "insertionSort", ()=>(0, _insertionDefault.default));
parcelHelpers.export(exports, "mergeSort", ()=>(0, _mergeDefault.default));
var _bubble = require("./lib/sorts/bubble");
var _bubbleDefault = parcelHelpers.interopDefault(_bubble);
var _native = require("./lib/sorts/native");
var _nativeDefault = parcelHelpers.interopDefault(_native);
var _selection = require("./lib/sorts/selection");
var _selectionDefault = parcelHelpers.interopDefault(_selection);
var _insertion = require("./lib/sorts/insertion");
var _insertionDefault = parcelHelpers.interopDefault(_insertion);
var _merge = require("./lib/sorts/merge");
var _mergeDefault = parcelHelpers.interopDefault(_merge);

},{"./lib/sorts/bubble":"28QTb","./lib/sorts/native":"61f6A","./lib/sorts/selection":"bVSfG","./lib/sorts/insertion":"ezuOS","./lib/sorts/merge":"OTFHq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28QTb":[function(require,module,exports) {
/*
bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

The time complexity of bubble sort is O(n^2) in the worst case and O(n) in the best case.
The space complexity of bubble sort is O(1).

- This function sorts an array of numbers.
- The parameter arr is the array to sort.
- The parameter n is the number of elements in the array.
- The function returns the sorted array.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../../helpers");
async function bubble(input) {
    const _s = (0, _helpers.startTime)();
    const { arr , order ="asc" , key ="" , callback =()=>{} , isSorting =()=>true  } = input;
    const n = arr.length;
    let animate = false;
    if (n <= 1) return {
        arr,
        key,
        order,
        n,
        execTime: 0,
        animate: false
    };
    if ((0, _helpers.isAnObj)(0, arr) && !key) throw new Error("key is required");
    for(let i = 0; i < n; i++)for(let j = 0; j < n - i - 1; j++){
        if (!isSorting()) // Check if sorting is paused
        return {
            arr,
            key,
            order,
            n,
            execTime: 0,
            animate: false
        };
        const leftNum = (0, _helpers.isAsc)(order) ? j : j + 1;
        const rightNum = (0, _helpers.isAsc)(order) ? j + 1 : j;
        let _leftNum = (0, _helpers.isAnObj)(leftNum, arr) ? arr[leftNum][key] : arr[leftNum];
        let _rightNum = (0, _helpers.isAnObj)(rightNum, arr) ? arr[rightNum][key] : arr[rightNum];
        if (_leftNum > _rightNum) {
            [arr[j], arr[j + 1]] = [
                arr[j + 1],
                arr[j]
            ] // swap
            ;
            // if callback contains a function with arguments then execute it
            if (callback.length && isSorting()) {
                animate = true;
                await callback(leftNum, rightNum) // animate swap
                ;
            }
        }
    }
    const _e = (0, _helpers.endTime)();
    const execTimeInMs = (0, _helpers.howLongExecTook)(_s, _e);
    return {
        arr,
        key,
        order,
        n,
        execTime: execTimeInMs,
        animate
    };
}
exports.default = bubble // todo add page tracking for documentation page, utilize a way to select and load a specific page or sort.
;

},{"../../helpers":"2nhj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nhj8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startTime", ()=>startTime);
parcelHelpers.export(exports, "endTime", ()=>endTime);
parcelHelpers.export(exports, "howLongExecTook", ()=>howLongExecTook);
parcelHelpers.export(exports, "isAsc", ()=>isAsc);
parcelHelpers.export(exports, "isDesc", ()=>isDesc);
parcelHelpers.export(exports, "isAnObj", ()=>isAnObj);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "generateRandomNumbers", ()=>generateRandomNumbers);
parcelHelpers.export(exports, "findMaxNumber", ()=>findMaxNumber);
parcelHelpers.export(exports, "sleep", ()=>sleep);
const startTime = ()=>Date.now();
const endTime = ()=>Date.now();
const howLongExecTook = (_, __)=>__ - _;
const isAsc = (order = "asc")=>order === "asc";
const isDesc = (order = "desc")=>order === "desc";
const isAnObj = (idx, arr)=>typeof arr[idx] === "object" && arr[idx] !== null;
const isNumber = (idx, arr)=>typeof arr[idx] === "number";
// O(n) time complexity, O(1) space complexity
const findMaxNumber = (arr)=>Math.max(...arr);
// O(1) time complexity, O(n) space complexity
// usage const randomNumbers = generateRandomNumbers(5, 1, 10);
const generateRandomNumbers = ({ n =0 , min =0 , max =0  } = {})=>Array.from({
        length: n
    }, ()=>Math.floor(Math.random() * (max - min + 1) + min));
const sleep = (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve, ms));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"61f6A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../../helpers");
function native(input) {
    const _s = (0, _helpers.startTime)();
    const { arr , order ="asc" , key =""  } = input;
    const n = arr.length;
    if (n <= 1) return {
        arr,
        key,
        order,
        n,
        execTime: 0
    };
    if ((0, _helpers.isAnObj)(0, arr) && !key) throw new Error("key is required");
    const cb = (a, b)=>{
        let result = null;
        if ((0, _helpers.isNumber)(a, arr)) result = (0, _helpers.isAsc)(order) ? a - b : b - a;
        else result = (0, _helpers.isAsc)(order) ? a[key] - b[key] : b[key] - a[key];
        return result;
    };
    // Using JS native sort
    const sorted = arr.sort(cb);
    const _e = (0, _helpers.endTime)();
    const execTimeInMs = (0, _helpers.howLongExecTook)(_s, _e);
    return {
        arr: sorted,
        key,
        order,
        n,
        execTime: execTimeInMs
    };
}
exports.default = native;

},{"../../helpers":"2nhj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVSfG":[function(require,module,exports) {
/*
Selection sort, find the smallest element in the array, then swap with the first element
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../../helpers");
async function selection(input) {
    const _s = (0, _helpers.startTime)();
    const { arr , order ="asc" , key ="" , callback =()=>{} , isSorting =()=>true  } = input;
    const n = arr.length;
    let animate = false;
    if (n <= 1) return {
        arr,
        key,
        order,
        n,
        execTime: 0
    };
    if ((0, _helpers.isAnObj)(0, arr) && !key) throw new Error("key is required");
    for(let k = 0; k < n - 1; k++){
        // initialize min to k, the first element
        let min = k;
        for(let i = k + 1; i < n; i++){
            if (!isSorting()) // Check if sorting is paused
            return {
                arr,
                key,
                order,
                n,
                execTime: 0,
                animate: false
            };
            // find where the smallest element is and grab it's index
            const leftNum = (0, _helpers.isAsc)(order) ? i : min;
            const rightNum = (0, _helpers.isAsc)(order) ? min : i;
            let _leftNum = (0, _helpers.isAnObj)(leftNum, arr) ? arr[leftNum][key] : arr[leftNum];
            let _rightNum = (0, _helpers.isAnObj)(rightNum, arr) ? arr[rightNum][key] : arr[rightNum];
            if (_leftNum < _rightNum) min = i;
        }
        if (k !== min) {
            // Only call the callback if we're actually going to swap elements
            if (callback.length && isSorting()) {
                animate = true;
                await callback(k, min) // animate swap
                ;
            }
            [arr[k], arr[min]] = [
                arr[min],
                arr[k]
            ];
        }
    }
    const _e = (0, _helpers.endTime)();
    const execTimeInMs = (0, _helpers.howLongExecTook)(_s, _e);
    return {
        arr,
        key,
        order,
        n,
        execTime: execTimeInMs,
        animate
    };
}
exports.default = selection;

},{"../../helpers":"2nhj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezuOS":[function(require,module,exports) {
/*
	Insertion sort, like selection sort, is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

	O(n^2) worst and avg case
	O(n) best case

	https://en.wikipedia.org/wiki/Insertion_sort

	In this sort, we start at the beginning of the array and assume that the first element is sorted. We then look at the next element, and insert it into the correct position in the sorted array. We accomplish this by shifting all of the elements that are larger than the new element to the right. We repeat this process for every element in the array, inserting it into the correct position in the sorted portion of the array.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../../helpers");
async function insertion(input) {
    const _s = (0, _helpers.startTime)();
    const { arr , order ="asc" , key ="" , callback =()=>{} , isSorting =()=>true  } = input;
    const n = arr.length;
    let animate = false;
    if (n <= 1) return {
        arr,
        key,
        order,
        n,
        execTime: 0,
        animate: false
    };
    for(let i = 1; i < n; i++){
        if (!isSorting()) // Check if sorting is paused
        return {
            arr,
            key,
            order,
            n,
            execTime: 0,
            animate: false
        };
        let currentVal = arr[i];
        // j is the index to the left of the current index
        let j = i - 1;
        // Go through the "sub-array" from right to left, comparing the current value to the next value to the left until we find the correct position for the current value, inserting larger numbers to the right, and inserting the current value to the right of the smallest number, until we reach the end of the array at 0.
        // if j is greater than or equal to 0 and the order is ascending otherwise descending
        while(j >= 0 && compare(arr[j], currentVal, key, order) > 0){
            // shift larger numbers to the right
            arr[j + 1] = arr[j];
            if (callback.length && isSorting()) {
                animate = true;
                await callback(j, j + 1) // animate
                ;
            }
            j--;
        }
        // insert to the right of the smallest number
        arr[j + 1] = currentVal;
    }
    const _e = (0, _helpers.endTime)();
    const execTimeInMs = (0, _helpers.howLongExecTook)(_s, _e);
    return {
        arr,
        key,
        order,
        n,
        execTime: execTimeInMs,
        animate
    };
}
// compare is a helper function that compares two numbers or two objects by a key and order (asc or desc) and returns a number (-1, 0, or 1) based on the comparison.
function compare(a, b, key = "", order = "asc") {
    if (key) {
        a = a[key];
        b = b[key];
    }
    if ((0, _helpers.isAsc)(order)) return a < b ? -1 : a > b ? 1 : 0;
    else if ((0, _helpers.isDesc)(order)) return a > b ? -1 : a < b ? 1 : 0;
    else throw new Error(`Invalid order: ${order}.`);
}
exports.default = insertion;

},{"../../helpers":"2nhj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"OTFHq":[function(require,module,exports) {
/*
merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. A detailed description and analysis of bottom-up mergesort appeared in a report by Goldstine and von Neumann as early as 1948. It is a comparison-based algorithm that focuses on how to merge together two pre-sorted arrays such that the resulting array is also sorted. The time complexity of merge sort is O(n log n) in the worst case and O(n log n) in the best case. The space complexity of merge sort is O(n).
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../../helpers");
async function merge_sort(input) {
    const _s = (0, _helpers.startTime)();
    const { arr , order ="asc" , key ="" , callback =()=>{} , isSorting =()=>true  } = input;
    const n = arr.length;
    let animate = false;
    if (n <= 1 || !isSorting()) return {
        arr,
        key,
        order,
        n,
        execTime: 0,
        animate: false
    };
    if ((0, _helpers.isAnObj)(0, arr) && !key) throw new Error("key is required");
    const middle = Math.floor(n / 2) // get the middle item of the array rounded down
    ;
    const left = arr.slice(0, middle) // items on the left side
    ;
    const right = arr.slice(middle) // items on the right side
    ;
    const { arr: sortedLeft  } = await merge_sort({
        arr: left,
        order,
        key
    });
    const { arr: sortedRight  } = await merge_sort({
        arr: right,
        order,
        key
    });
    const merged = merge(sortedLeft, sortedRight, order, key);
    const _e = (0, _helpers.endTime)();
    const execTimeInMs = (0, _helpers.howLongExecTook)(_s, _e);
    return {
        arr: merged,
        key,
        order,
        n,
        execTime: execTimeInMs,
        animate
    };
}
// compare the arrays item by item and return the concatenated result
function merge(left, right, order, key) {
    const merged = [];
    let indexLeft = 0;
    let indexRight = 0;
    while(indexLeft < left.length && indexRight < right.length){
        const leftValue = key ? left[indexLeft][key] : left[indexLeft];
        const rightValue = key ? right[indexRight][key] : right[indexRight];
        // Todo: add animation logic
        // if (callback.length && isSorting()) {
        // 	animate = true
        // 	await callback(leftNum, rightNum) // animate swap
        // }
        if ((0, _helpers.isAsc)(order) && leftValue < rightValue || !(0, _helpers.isAsc)(order) && leftValue > rightValue) {
            merged.push(left[indexLeft]);
            indexLeft++;
        } else {
            merged.push(right[indexRight]);
            indexRight++;
        }
    }
    // in case one of the arrays has remaining items due to unequal lengths, we add them to the result array as well (the items left are already sorted)
    const remainingLeft = left.slice(indexLeft);
    const remainingRight = right.slice(indexRight);
    return merged.concat(remainingLeft, remainingRight);
}
exports.default = merge_sort // we can also use while loops instead
 //  while (indexLeft < left.length) {
 // 		result.push(left[indexLeft])
 // 		indexLeft++
 // 	}
 // 	while (indexRight < right.length) {
 // 		result.push(right[indexRight])
 // 		indexRight++
 // 	}
;

},{"../../helpers":"2nhj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4K1yG","h7u1C"], "h7u1C", "parcelRequire197b")

//# sourceMappingURL=index.006d8787.js.map
