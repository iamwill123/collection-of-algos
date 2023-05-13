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
})({"b4prh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c017dc3daa3519ca";
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

},{}],"eTQZV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _helpers = require("../../src/lib/helpers");
var _bubble = require("../../src/lib/sorts/bubble");
var _bubbleDefault = parcelHelpers.interopDefault(_bubble);
var _sortVisualizer = require("./components/SortVisualizer");
var _sortVisualizerDefault = parcelHelpers.interopDefault(_sortVisualizer);
var _selection = require("../../src/lib/sorts/selection");
var _selectionDefault = parcelHelpers.interopDefault(_selection);
// todo allow user input for random numbers
let sortProps = {
    arr: (0, _helpers.generateRandomNumbers)({
        n: 15,
        min: 1,
        max: 100
    })
};
let bubbleProps = {
    sortProps,
    sortFn: (0, _bubbleDefault.default),
    maxNumber: (0, _helpers.findMaxNumber)(sortProps.arr),
    containerSelector: '[data-component-sorts="BubbleSort"]'
};
const bubbleSortViz = new (0, _sortVisualizerDefault.default)(bubbleProps);
let selectionProps = {
    sortProps,
    sortFn: (0, _selectionDefault.default),
    maxNumber: (0, _helpers.findMaxNumber)(sortProps.arr),
    containerSelector: '[data-component-sorts="SelectionSort"]'
};
const selectionSortViz = new (0, _sortVisualizerDefault.default)(selectionProps);

},{"../../src/lib/helpers":"2nhj8","../../src/lib/sorts/bubble":"28QTb","./components/SortVisualizer":"4D9fF","../../src/lib/sorts/selection":"bVSfG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4D9fF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../../../src/lib/helpers");
var _component = require("./Bar/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _component1 = require("./Button/Component");
var _componentDefault1 = parcelHelpers.interopDefault(_component1);
class SortVisualizer {
    initialArray = [];
    currentArray = [];
    sortProps = {
        arr: []
    };
    container = null;
    barContainer = null;
    buttonContainer = null;
    execTimeElem = null;
    isSorting = false;
    colorState = false;
    maxNumber = 0;
    arrLength = 0;
    execTime = 0;
    animationSpeed = 300;
    isLoading = false;
    bars = [];
    buttons = [
        {
            label: "▶",
            action: "play"
        },
        {
            label: "⏸",
            action: "pause"
        },
        {
            label: "↺",
            action: "reset"
        },
        {
            label: "↺ ▶",
            action: "replay"
        }
    ];
    playButton = null;
    pauseButton = null;
    resetButton = null;
    replayButton = null;
    animationSpeedSlider = null;
    animationSpeedContainer = null;
    animationSpeedLabel = null;
    loaderMessage = null;
    componentMounted = false;
    constructor(props){
        this.initialArray = props.sortProps.arr;
        this.currentArray = [
            ...this.initialArray
        ];
        this.sortProps = props.sortProps;
        this.maxNumber = props.maxNumber;
        this.arrLength = this.currentArray.length;
        this.container = document.querySelector(props.containerSelector);
        this.buttonContainer = document.createElement("div");
        this.buttonContainer.className = "button-container";
        this.sortFn = props.sortFn;
        this.init();
    }
    init = ()=>{
        // set min height of container to be a bit higher than the max number
        this.container.style.minHeight = `${this.maxNumber * 5 + 100}px`;
        this.renderBars();
        this.createButtons();
        this.createAnimationSpeed();
        this.attachListeners();
        this.componentMounted = true;
    };
    renderBars = ()=>{
        const barContainer = document.createElement("div");
        barContainer.className = "bar-container";
        barContainer.style.minHeight = `${this.maxNumber * 5 + 50}px`;
        this.currentArray.forEach((value, i)=>{
            const bar = new (0, _componentDefault.default)({
                value
            });
            this.bars[i] = bar.element // Update the this.bars array with new instances
            ;
            barContainer.appendChild(this.bars[i]);
        });
        if (this.barContainer) this.container.replaceChild(barContainer, this.barContainer);
        else this.container.appendChild(barContainer);
        this.barContainer = barContainer;
    };
    createAnimationSpeed = ()=>{
        const loaderMessage = document.createElement("div");
        loaderMessage.className = "loader-message";
        loaderMessage.innerHTML = "...";
        this.loaderMessage = loaderMessage;
        const animationSpeedContainer = document.createElement("div");
        animationSpeedContainer.className = "animation-speed-container";
        const animationSpeedLabel = document.createElement("label");
        animationSpeedLabel.htmlFor = "animation-speed";
        animationSpeedLabel.innerHTML = `Tweak animation speed, ${this.animationSpeed}ms`;
        this.animationSpeedLabel = animationSpeedLabel;
        this.animationSpeedContainer = animationSpeedContainer;
        const animationSpeed = document.createElement("input");
        animationSpeed.type = "range";
        animationSpeed.min = "0";
        animationSpeed.step = "100";
        animationSpeed.max = "1000";
        animationSpeed.value = String(this.animationSpeed);
        animationSpeed.className = "animation-speed-slider";
        this.animationSpeedSlider = animationSpeed;
        animationSpeedContainer.appendChild(animationSpeedLabel);
        animationSpeedContainer.appendChild(animationSpeed);
        animationSpeedContainer.appendChild(loaderMessage);
        this.container.appendChild(animationSpeedContainer);
    };
    createButtons = ()=>{
        this.buttons.forEach((button)=>{
            const buttonElement = new (0, _componentDefault1.default)({
                label: button.label,
                action: button.action,
                clickHandler: ()=>{
                    // remove active class from all buttons
                    this.buttons.forEach((b)=>{
                        const el = document.querySelector(`[data-action="${b.action}"]`);
                        if (el) el.classList.remove("button--active");
                    });
                    // add active class to clicked button
                    buttonElement.getElement().classList.add("button--active");
                    // call the corresponding handler
                    switch(button.action){
                        case "play":
                            this.handlePlay(this.animationSpeed);
                            break;
                        case "pause":
                            this.handlePause();
                            break;
                        case "reset":
                            this.handleReset();
                            break;
                        case "replay":
                            this.handleReplay();
                            break;
                    }
                }
            });
            this.buttonContainer.appendChild(buttonElement.getElement());
        });
        const execTimeElem = document.createElement("div");
        execTimeElem.className = "exec-time";
        execTimeElem.innerHTML = `Execution time: ${this.execTime}ms`;
        this.execTimeElem = execTimeElem;
        this.container.appendChild(execTimeElem);
        this.container.appendChild(this.buttonContainer);
    };
    handleanimationSpeed = async (e)=>{
        await (0, _helpers.sleep)(0);
        this.animationSpeed = parseInt(e.target.value);
        if (this.animationSpeedLabel) this.animationSpeedLabel.innerHTML = `Tweak animation speed, ${this.animationSpeed}ms`;
    };
    handlePlay = (duration = 300)=>{
        if (!this.isSorting && !this.isSorted()) {
            this.updateLoaderMessage("playing...");
            this.isSorting = true;
            // let user set the time
            this.sort(duration);
        }
    };
    handlePause = async ()=>{
        if (!this.isSorted()) {
            this.updateLoaderMessage("pausing...");
            await (0, _helpers.sleep)(500);
            this.isSorting = false;
            this.updateLoaderMessage("paused");
        }
    };
    handleReset = async ()=>{
        this.isLoading = true;
        this.updateLoaderMessage("resetting...");
        await (0, _helpers.sleep)(this.animationSpeed + 500);
        this.currentArray = [
            ...this.initialArray
        ];
        this.renderBars();
        // reattach listeners
        this.attachListeners();
        this.isLoading = false;
        this.updateLoaderMessage("done!");
    };
    handleReplay = async (time = 1000)=>{
        this.handleReset();
        await (0, _helpers.sleep)(time);
        this.handlePlay(this.animationSpeed);
    };
    updateLoaderMessage = (message)=>{
        if (this.loaderMessage) this.loaderMessage.innerHTML = message;
    };
    sort = async (duration = 0)=>{
        while(!this.isSorted() && this.isSorting){
            await new Promise((resolve)=>setTimeout(resolve, duration));
            // Update the DOM to reflect the current state of the array after each step of the sorting
            await this.updateDOM(duration);
        }
        this.isSorting = false;
    };
    animateSwap = async (i, j, duration = 0, transitionDuration = 300)=>{
        if (!this.barContainer) {
            console.error("barContainer is not initialized");
            return;
        }
        const bars = Array.from(this.barContainer.children);
        const bar1 = bars[i];
        const bar2 = bars[j];
        const originalColor1 = bar1.style.background;
        const originalColor2 = bar2.style.background;
        const barWidth = bar1.offsetWidth;
        const xDifference = (j - i) * barWidth;
        // Add transition properties for smooth animations
        bar1.style.transition = `transform ${transitionDuration}ms ease, opacity ${transitionDuration}ms ease, background ${transitionDuration}ms ease`;
        bar2.style.transition = `transform ${transitionDuration}ms ease, opacity ${transitionDuration}ms ease, background ${transitionDuration}ms ease`;
        // Change opacity and background color during swap
        bar1.style.opacity = "0.8";
        bar2.style.opacity = "0.8";
        bar1.style.background = "red";
        bar2.style.background = "royalblue";
        // Move bars to their new positions
        bar1.style.transform = `translateX(${xDifference}px)`;
        bar2.style.transform = `translateX(${-xDifference}px)`;
        if (this.isLoading) return;
        await (0, _helpers.sleep)(duration);
        // Swap the elements in the DOM
        const bar1Clone = bar1.cloneNode(true);
        const bar2Clone = bar2.cloneNode(true);
        this.barContainer.replaceChild(bar1Clone, bar2);
        this.barContainer.replaceChild(bar2Clone, bar1);
        // Wait for the DOM update to be completed
        await (0, _helpers.sleep)(0);
        // Reset the transform property after the animation
        bar1Clone.style.transform = "translateX(0)";
        bar2Clone.style.transform = "translateX(0)";
        // Restore the original opacity and background colors
        bar1Clone.style.opacity = "1";
        bar2Clone.style.opacity = "1";
        bar1Clone.style.background = originalColor1;
        bar2Clone.style.background = originalColor2;
        // Remove the transition properties after the animation
        bar1Clone.style.transition = "";
        bar2Clone.style.transition = "";
    };
    updateDOM = async (duration = 0)=>{
        const input = {
            arr: this.currentArray,
            callback: async (i, j)=>{
                await this.animateSwap(i, j, duration);
            },
            isSorting: ()=>this.isSorting
        };
        const { arr , execTime =0  } = await this.sortFn(input);
        this.execTimeElem.innerHTML = `Animation time: ${execTime / 1000}s`;
        if (this.isSorted()) {
            this.updateLoaderMessage("done!");
            setTimeout(()=>{
                this.updateLoaderMessage("...");
            }, 1000);
        }
        // in seconds
        this.currentArray = arr;
        this.isLoading = false;
    };
    isSorted = ()=>{
        for(let i = 1; i < this.arrLength; i++){
            if (this.currentArray[i] < this.currentArray[i - 1]) return false;
        }
        return true;
    };
    addListeners = ()=>{
        this.animationSpeedSlider?.addEventListener("change", this.handleanimationSpeed);
        this.playButton?.addEventListener("click", this.handlePlay);
        this.pauseButton?.addEventListener("click", this.handlePause);
        this.resetButton?.addEventListener("click", this.handleReset);
        this.replayButton?.addEventListener("click", this.handleReplay);
    };
    removeListeners = ()=>{
        this.animationSpeedSlider?.addEventListener("change", this.handleanimationSpeed);
        this.playButton?.addEventListener("click", this.handlePlay);
        this.pauseButton?.addEventListener("click", this.handlePause);
        this.resetButton?.addEventListener("click", this.handleReset);
        this.replayButton?.addEventListener("click", this.handleReplay);
    };
    attachListeners = ()=>{
        this.removeListeners();
        // stuff can going here
        this.addListeners();
    };
}
exports.default = SortVisualizer;

},{"../../../src/lib/helpers":"2nhj8","./Bar/Component":"jxrYi","./Button/Component":"f6aXI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jxrYi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Base/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class BarComponent extends (0, _componentDefault.default) {
    constructor(props){
        let _props = {
            className: props.className || [
                "bar"
            ],
            elementType: props.elementType || "div"
        };
        super(_props);
        this.element.style.height = `${props.value * 5}px`;
        this.element.innerHTML = `<span class="text">${props.value}</span>`;
    }
}
exports.default = BarComponent;

},{"../Base/Component":"bEsR1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bEsR1":[function(require,module,exports) {
//  The base Component class to handle common functionality, such as element creation and applying classes.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Component {
    constructor(props){
        this.element = document.createElement(props.elementType);
        if (props.className) this.element.className = props.className.join(" ");
    }
    getElement() {
        return this.element;
    }
}
exports.default = Component;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f6aXI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Base/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class ButtonComponent extends (0, _componentDefault.default) {
    constructor(props){
        super({
            elementType: "button",
            className: [
                "button"
            ]
        });
        this.element.textContent = props.label;
        this.element.setAttribute("data-action", props.action);
        this.element.addEventListener("click", props.clickHandler);
    }
    getElement() {
        return this.element;
    }
}
exports.default = ButtonComponent;

},{"../Base/Component":"bEsR1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["b4prh","eTQZV"], "eTQZV", "parcelRequire197b")

//# sourceMappingURL=index.aa3519ca.js.map
