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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"dHVtd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "071135d094538dff";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"int3P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _smoothScrollbar = require("smooth-scrollbar");
var _smoothScrollbarDefault = parcelHelpers.interopDefault(_smoothScrollbar);
var _scrollSnap = require("scroll-snap");
var _scrollSnapDefault = parcelHelpers.interopDefault(_scrollSnap);
let body = document.querySelector('body');
let s = _smoothScrollbarDefault.default.init(body);
let two = document.getElementById('two');
let snapped = false;
s.addListener(()=>{
    reveal();
    observer.observe(two);
});
let observerConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
let observer = new IntersectionObserver((entries, observer)=>{
    if (entries[0].isIntersecting && entries[0].intersectionRatio != 1) s.scrollIntoView(two);
}, observerConfig);
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element)=>{
        if (s.isVisible(element)) element.classList.add('active');
    });
}
let btn = document.getElementById('goToWork');
btn.addEventListener('click', ()=>{
    let workArea = document.getElementById('work');
    s.scrollTo(0, workArea.getBoundingClientRect().top, 1000, 'easeInSine');
});
//for tablet & mobile view only
if (window.innerWidth <= 768) {
    s.destroy();
    let observerConfig = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };
    let observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                if (window.innerWidth <= 500 && entry.intersectionRatio < 1) entry.target.classList.add('slide');
                else entry.target.classList.add('active');
            }
        });
    }, observerConfig);
    const slides = document.querySelectorAll('.reveal');
    slides.forEach((slide)=>{
        observer.observe(slide);
    });
    let btn = document.getElementById('goToWork');
    btn.addEventListener('click', ()=>{
        let workArea = document.getElementById('work');
        btn.href = '#work';
    });
}
window.addEventListener('DOMContentLoaded', ()=>{
    //handle change of color theme
    let themeBtn = document.getElementById('colorTheme');
    themeBtn.addEventListener('click', ()=>{
        let htmlElement = document.querySelector('html');
        if (htmlElement.getAttribute('data-theme') === "light") {
            htmlElement.setAttribute('data-theme', "dark");
            themeBtn.classList.add('dark');
        } else {
            htmlElement.setAttribute('data-theme', "light");
            themeBtn.classList.remove('dark');
        }
    });
});

},{"smooth-scrollbar":"jRlDB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","scroll-snap":"fkImz"}],"jRlDB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarPlugin", ()=>_plugin.ScrollbarPlugin
);
var _tslib = require("tslib");
var _polyfills = require("./polyfills");
var _scrollbar = require("./scrollbar");
var _plugin = require("./plugin");
var _style = require("./style");
/**
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */ var SmoothScrollbar1 = function(_super) {
    _tslib.__extends(SmoothScrollbar, _super);
    function SmoothScrollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes a scrollbar on the given element.
     *
     * @param elem The DOM element that you want to initialize scrollbar to
     * @param [options] Initial options
     */ SmoothScrollbar.init = function(elem, options) {
        if (!elem || elem.nodeType !== 1) throw new TypeError("expect element to be DOM Element, but got " + elem);
        // attach stylesheet
        _style.attachStyle();
        if (_scrollbar.scrollbarMap.has(elem)) return _scrollbar.scrollbarMap.get(elem);
        return new _scrollbar.Scrollbar(elem, options);
    };
    /**
     * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
     *
     * @param options Initial options
     */ SmoothScrollbar.initAll = function(options) {
        return Array.from(document.querySelectorAll('[data-scrollbar]'), function(elem) {
            return SmoothScrollbar.init(elem, options);
        });
    };
    /**
     * Check if there is a scrollbar on given element
     *
     * @param elem The DOM element that you want to check
     */ SmoothScrollbar.has = function(elem) {
        return _scrollbar.scrollbarMap.has(elem);
    };
    /**
     * Gets scrollbar on the given element.
     * If no scrollbar instance exsits, returns `undefined`
     *
     * @param elem The DOM element that you want to check.
     */ SmoothScrollbar.get = function(elem) {
        return _scrollbar.scrollbarMap.get(elem);
    };
    /**
     * Returns an array that contains all scrollbar instances
     */ SmoothScrollbar.getAll = function() {
        return Array.from(_scrollbar.scrollbarMap.values());
    };
    /**
     * Removes scrollbar on the given element
     */ SmoothScrollbar.destroy = function(elem) {
        var scrollbar = _scrollbar.scrollbarMap.get(elem);
        if (scrollbar) scrollbar.destroy();
    };
    /**
     * Removes all scrollbar instances from current document
     */ SmoothScrollbar.destroyAll = function() {
        _scrollbar.scrollbarMap.forEach(function(scrollbar) {
            scrollbar.destroy();
        });
    };
    /**
     * Attaches plugins to scrollbars
     *
     * @param ...Plugins Scrollbar plugin classes
     */ SmoothScrollbar.use = function() {
        var Plugins = [];
        for(var _i = 0; _i < arguments.length; _i++)Plugins[_i] = arguments[_i];
        return _plugin.addPlugins.apply(void 0, Plugins);
    };
    /**
     * Attaches default style sheets to current document.
     * You don't need to call this method manually unless
     * you removed the default styles via `Scrollbar.detachStyle()`
     */ SmoothScrollbar.attachStyle = function() {
        return _style.attachStyle();
    };
    /**
     * Removes default styles from current document.
     * Use this method when you want to use your own css for scrollbars.
     */ SmoothScrollbar.detachStyle = function() {
        return _style.detachStyle();
    };
    SmoothScrollbar.version = "8.7.2";
    SmoothScrollbar.ScrollbarPlugin = _plugin.ScrollbarPlugin;
    return SmoothScrollbar;
}(_scrollbar.Scrollbar);
exports.default = SmoothScrollbar1;

},{"tslib":"j55WF","./polyfills":"gpgv4","./scrollbar":"fB77G","./plugin":"ccfnQ","./style":"kzCOd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j55WF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
parcelHelpers.export(exports, "__spread", ()=>__spread
);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"gpgv4":[function(require,module,exports) {
var _map = require("core-js/es/map");
var _set = require("core-js/es/set");
var _weakMap = require("core-js/es/weak-map");
var _from = require("core-js/es/array/from");
var _assign = require("core-js/es/object/assign");

},{"core-js/es/map":"9IL6y","core-js/es/set":"72SE4","core-js/es/weak-map":"7KBhD","core-js/es/array/from":"l4OUA","core-js/es/object/assign":"2cgsT"}],"9IL6y":[function(require,module,exports) {
require('../../modules/es.array.iterator');
require('../../modules/es.map');
require('../../modules/es.object.to-string');
require('../../modules/es.string.iterator');
var path = require('../../internals/path');
module.exports = path.Map;

},{"../../modules/es.array.iterator":"bLuDU","../../modules/es.map":"ayxWX","../../modules/es.object.to-string":"wRGKV","../../modules/es.string.iterator":"b0sE2","../../internals/path":"f1yhZ"}],"bLuDU":[function(require,module,exports) {
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineProperty = require('../internals/object-define-property').f;
var defineIterator = require('../internals/define-iterator');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function(iterated, kind) {
    setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind: kind // kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return {
            value: undefined,
            done: true
        };
    }
    if (kind == 'keys') return {
        value: index,
        done: false
    };
    if (kind == 'values') return {
        value: target[index],
        done: false
    };
    return {
        value: [
            index,
            target[index]
        ],
        done: false
    };
}, 'values');
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
    defineProperty(values, 'name', {
        value: 'values'
    });
} catch (error) {
}

},{"../internals/to-indexed-object":"8ueFu","../internals/add-to-unscopables":"icGQt","../internals/iterators":"nPOBX","../internals/internal-state":"i6AaM","../internals/object-define-property":"bauTd","../internals/define-iterator":"3Ugai","../internals/is-pure":"6Bbq0","../internals/descriptors":"6ZLib"}],"8ueFu":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"e5ccT","../internals/require-object-coercible":"3Qlyo"}],"e5ccT":[function(require,module,exports) {
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');
var Object = global.Object;
var split = uncurryThis(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;

},{"../internals/global":"jxPDA","../internals/function-uncurry-this":"jJnXC","../internals/fails":"8IfZQ","../internals/classof-raw":"A9m3U"}],"jxPDA":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
(function() {
    return this;
})() || Function('return this')();

},{}],"jJnXC":[function(require,module,exports) {
var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);
module.exports = bind ? function(fn) {
    return fn && callBind(call, fn);
} : function(fn) {
    return fn && function() {
        return call.apply(fn, arguments);
    };
};

},{}],"8IfZQ":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"A9m3U":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var toString = uncurryThis({
}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":"jJnXC"}],"3Qlyo":[function(require,module,exports) {
var global = require('../internals/global');
var TypeError = global.TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
};

},{"../internals/global":"jxPDA"}],"icGQt":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var create = require('../internals/object-create');
var definePropertyModule = require('../internals/object-define-property');
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
});
// add a key to Array.prototype[@@unscopables]
module.exports = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"../internals/well-known-symbol":"5C8sm","../internals/object-create":"1As5O","../internals/object-define-property":"bauTd"}],"5C8sm":[function(require,module,exports) {
var global = require('../internals/global');
var shared = require('../internals/shared');
var hasOwn = require('../internals/has-own-property');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
        var description = 'Symbol.' + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
        else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"jxPDA","../internals/shared":"7VLeP","../internals/has-own-property":"3ZdUC","../internals/uid":"eMBx9","../internals/native-symbol":"cBk0s","../internals/use-symbol-as-uid":"b6wgs"}],"7VLeP":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {
    });
})('versions', []).push({
    version: '3.20.1',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":"6Bbq0","../internals/shared-store":"3QdEO"}],"6Bbq0":[function(require,module,exports) {
module.exports = false;

},{}],"3QdEO":[function(require,module,exports) {
var global = require('../internals/global');
var setGlobal = require('../internals/set-global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {
});
module.exports = store;

},{"../internals/global":"jxPDA","../internals/set-global":"kehc7"}],"kehc7":[function(require,module,exports) {
var global = require('../internals/global');
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"jxPDA"}],"3ZdUC":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var toObject = require('../internals/to-object');
var hasOwnProperty = uncurryThis({
}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":"jJnXC","../internals/to-object":"eEdae"}],"eEdae":[function(require,module,exports) {
var global = require('../internals/global');
var requireObjectCoercible = require('../internals/require-object-coercible');
var Object = global.Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return Object(requireObjectCoercible(argument));
};

},{"../internals/global":"jxPDA","../internals/require-object-coercible":"3Qlyo"}],"eMBx9":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1..toString);
module.exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":"jJnXC"}],"cBk0s":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"9gYOM","../internals/fails":"8IfZQ"}],"9gYOM":[function(require,module,exports) {
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"../internals/global":"jxPDA","../internals/engine-user-agent":"boFeV"}],"boFeV":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":"78arb"}],"78arb":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":"jxPDA","../internals/is-callable":"kPhuP"}],"kPhuP":[function(require,module,exports) {
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function(argument) {
    return typeof argument == 'function';
};

},{}],"b6wgs":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require('../internals/native-symbol');
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"cBk0s"}],"1As5O":[function(require,module,exports) {
/* global ActiveXObject -- old IE, WSH */ var anObject = require('../internals/an-object');
var defineProperties = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument1;
var NullProtoObject = function() {
    try {
        activeXDocument1 = new ActiveXObject('htmlfile');
    } catch (error) {
    }
    NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument1 ? NullProtoObjectViaActiveX(activeXDocument1) // old IE
     : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument1); // WSH
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : defineProperties(result, Properties);
};

},{"../internals/an-object":"1LIz9","../internals/object-define-properties":"8PPlc","../internals/enum-bug-keys":"a0vpC","../internals/hidden-keys":"lHxXS","../internals/html":"fFwbI","../internals/document-create-element":"jKd7d","../internals/shared-key":"oNjWG"}],"1LIz9":[function(require,module,exports) {
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var String = global.String;
var TypeError = global.TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw TypeError(String(argument) + ' is not an object');
};

},{"../internals/global":"jxPDA","../internals/is-object":"dplrD"}],"dplrD":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
module.exports = function(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"../internals/is-callable":"kPhuP"}],"8PPlc":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var toIndexedObject = require('../internals/to-indexed-object');
var objectKeys = require('../internals/object-keys');
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
};

},{"../internals/descriptors":"6ZLib","../internals/object-define-property":"bauTd","../internals/an-object":"1LIz9","../internals/to-indexed-object":"8ueFu","../internals/object-keys":"9bK4Y"}],"6ZLib":[function(require,module,exports) {
var fails = require('../internals/fails');
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({
    }, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"8IfZQ"}],"bauTd":[function(require,module,exports) {
var global = require('../internals/global');
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPropertyKey = require('../internals/to-property-key');
var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/global":"jxPDA","../internals/descriptors":"6ZLib","../internals/ie8-dom-define":"8jKhl","../internals/an-object":"1LIz9","../internals/to-property-key":"bMDpS"}],"8jKhl":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');
// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"6ZLib","../internals/fails":"8IfZQ","../internals/document-create-element":"jKd7d"}],"jKd7d":[function(require,module,exports) {
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {
    };
};

},{"../internals/global":"jxPDA","../internals/is-object":"dplrD"}],"bMDpS":[function(require,module,exports) {
var toPrimitive = require('../internals/to-primitive');
var isSymbol = require('../internals/is-symbol');
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
};

},{"../internals/to-primitive":"ilNgA","../internals/is-symbol":"imyt8"}],"ilNgA":[function(require,module,exports) {
var global = require('../internals/global');
var call = require('../internals/function-call');
var isObject = require('../internals/is-object');
var isSymbol = require('../internals/is-symbol');
var getMethod = require('../internals/get-method');
var ordinaryToPrimitive = require('../internals/ordinary-to-primitive');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
};

},{"../internals/global":"jxPDA","../internals/function-call":"jhLed","../internals/is-object":"dplrD","../internals/is-symbol":"imyt8","../internals/get-method":"hEJ6b","../internals/ordinary-to-primitive":"fsThT","../internals/well-known-symbol":"5C8sm"}],"jhLed":[function(require,module,exports) {
var call = Function.prototype.call;
module.exports = call.bind ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{}],"imyt8":[function(require,module,exports) {
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var Object = global.Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};

},{"../internals/global":"jxPDA","../internals/get-built-in":"78arb","../internals/is-callable":"kPhuP","../internals/object-is-prototype-of":"fyf1A","../internals/use-symbol-as-uid":"b6wgs"}],"fyf1A":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
module.exports = uncurryThis({
}.isPrototypeOf);

},{"../internals/function-uncurry-this":"jJnXC"}],"hEJ6b":[function(require,module,exports) {
var aCallable = require('../internals/a-callable');
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable(func);
};

},{"../internals/a-callable":"83opn"}],"83opn":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var tryToString = require('../internals/try-to-string');
var TypeError = global.TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw TypeError(tryToString(argument) + ' is not a function');
};

},{"../internals/global":"jxPDA","../internals/is-callable":"kPhuP","../internals/try-to-string":"1hxsu"}],"1hxsu":[function(require,module,exports) {
var global = require('../internals/global');
var String = global.String;
module.exports = function(argument) {
    try {
        return String(argument);
    } catch (error) {
        return 'Object';
    }
};

},{"../internals/global":"jxPDA"}],"fsThT":[function(require,module,exports) {
var global = require('../internals/global');
var call = require('../internals/function-call');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var TypeError = global.TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"../internals/global":"jxPDA","../internals/function-call":"jhLed","../internals/is-callable":"kPhuP","../internals/is-object":"dplrD"}],"9bK4Y":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/object-keys-internal":"3Jr1l","../internals/enum-bug-keys":"a0vpC"}],"3Jr1l":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var hasOwn = require('../internals/has-own-property');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"../internals/function-uncurry-this":"jJnXC","../internals/has-own-property":"3ZdUC","../internals/to-indexed-object":"8ueFu","../internals/array-includes":"SXf52","../internals/hidden-keys":"lHxXS"}],"SXf52":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"8ueFu","../internals/to-absolute-index":"dDgEq","../internals/length-of-array-like":"afDy6"}],"dDgEq":[function(require,module,exports) {
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":"aqyxv"}],"aqyxv":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- safe
    return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

},{}],"afDy6":[function(require,module,exports) {
var toLength = require('../internals/to-length');
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"../internals/to-length":"bMgmi"}],"bMgmi":[function(require,module,exports) {
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":"aqyxv"}],"lHxXS":[function(require,module,exports) {
module.exports = {
};

},{}],"a0vpC":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"fFwbI":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"78arb"}],"oNjWG":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"7VLeP","../internals/uid":"eMBx9"}],"nPOBX":[function(require,module,exports) {
module.exports = {
};

},{}],"i6AaM":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var hasOwn = require('../internals/has-own-property');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {
    });
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    var wmget = uncurryThis(store.get);
    var wmhas = uncurryThis(store.has);
    var wmset = uncurryThis(store.set);
    set = function(it, metadata) {
        if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget(store, it) || {
        };
    };
    has = function(it) {
        return wmhas(store, it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {
        };
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/native-weak-map":"3Q3X6","../internals/global":"jxPDA","../internals/function-uncurry-this":"jJnXC","../internals/is-object":"dplrD","../internals/create-non-enumerable-property":"6Z1es","../internals/has-own-property":"3ZdUC","../internals/shared-store":"3QdEO","../internals/shared-key":"oNjWG","../internals/hidden-keys":"lHxXS"}],"3Q3X6":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var inspectSource = require('../internals/inspect-source');
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));

},{"../internals/global":"jxPDA","../internals/is-callable":"kPhuP","../internals/inspect-source":"7DOzX"}],"7DOzX":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var isCallable = require('../internals/is-callable');
var store = require('../internals/shared-store');
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":"jJnXC","../internals/is-callable":"kPhuP","../internals/shared-store":"3QdEO"}],"6Z1es":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"6ZLib","../internals/object-define-property":"bauTd","../internals/create-property-descriptor":"ermgb"}],"ermgb":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"3Ugai":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var IS_PURE = require('../internals/is-pure');
var FunctionName = require('../internals/function-name');
var isCallable = require('../internals/is-callable');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function() {
    return this;
};
module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
        else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return call(nativeIterator, this);
            };
        }
    }
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) {
            for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
        } else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    // define iterator
    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) redefine(IterablePrototype, ITERATOR, defaultIterator, {
        name: DEFAULT
    });
    Iterators[NAME] = defaultIterator;
    return methods;
};

},{"../internals/export":"8yfGv","../internals/function-call":"jhLed","../internals/is-pure":"6Bbq0","../internals/function-name":"6v6mP","../internals/is-callable":"kPhuP","../internals/create-iterator-constructor":"1fB00","../internals/object-get-prototype-of":"lBy7h","../internals/object-set-prototype-of":"lb6rR","../internals/set-to-string-tag":"9arwS","../internals/create-non-enumerable-property":"6Z1es","../internals/redefine":"kxbj8","../internals/well-known-symbol":"5C8sm","../internals/iterators":"nPOBX","../internals/iterators-core":"gL68y"}],"8yfGv":[function(require,module,exports) {
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var setGlobal = require('../internals/set-global');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {
    });
    else target = (global[TARGET] || {
    }).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        // extend global
        redefine(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"jxPDA","../internals/object-get-own-property-descriptor":"1gCBk","../internals/create-non-enumerable-property":"6Z1es","../internals/redefine":"kxbj8","../internals/set-global":"kehc7","../internals/copy-constructor-properties":"bCh2q","../internals/is-forced":"eTyNf"}],"1gCBk":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var call = require('../internals/function-call');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPropertyKey = require('../internals/to-property-key');
var hasOwn = require('../internals/has-own-property');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/descriptors":"6ZLib","../internals/function-call":"jhLed","../internals/object-property-is-enumerable":"bz2pv","../internals/create-property-descriptor":"ermgb","../internals/to-indexed-object":"8ueFu","../internals/to-property-key":"bMDpS","../internals/has-own-property":"3ZdUC","../internals/ie8-dom-define":"8jKhl"}],"bz2pv":[function(require,module,exports) {
'use strict';
var $propertyIsEnumerable = {
}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"kxbj8":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var setGlobal = require('../internals/set-global');
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');
var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function(O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== undefined ? options.name : key;
    var state;
    if (isCallable(value)) {
        if (String(name).slice(0, 7) === 'Symbol(') name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
        if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) createNonEnumerableProperty(value, 'name', name);
        state = enforceInternalState(value);
        if (!state.source) state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
    if (O === global) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
    } else if (!unsafe) delete O[key];
    else if (!noTargetGet && O[key]) simple = true;
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
});

},{"../internals/global":"jxPDA","../internals/is-callable":"kPhuP","../internals/has-own-property":"3ZdUC","../internals/create-non-enumerable-property":"6Z1es","../internals/set-global":"kehc7","../internals/inspect-source":"7DOzX","../internals/internal-state":"i6AaM","../internals/function-name":"6v6mP"}],"6v6mP":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var hasOwn = require('../internals/has-own-property');
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {
}).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":"6ZLib","../internals/has-own-property":"3ZdUC"}],"bCh2q":[function(require,module,exports) {
var hasOwn = require('../internals/has-own-property');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has-own-property":"3ZdUC","../internals/own-keys":"e0KjM","../internals/object-get-own-property-descriptor":"1gCBk","../internals/object-define-property":"bauTd"}],"e0KjM":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"78arb","../internals/function-uncurry-this":"jJnXC","../internals/object-get-own-property-names":"evqXT","../internals/object-get-own-property-symbols":"dBB9V","../internals/an-object":"1LIz9"}],"evqXT":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"3Jr1l","../internals/enum-bug-keys":"a0vpC"}],"dBB9V":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"eTyNf":[function(require,module,exports) {
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {
};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"../internals/fails":"8IfZQ","../internals/is-callable":"kPhuP"}],"1fB00":[function(require,module,exports) {
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');
var returnThis = function() {
    return this;
};
module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
};

},{"../internals/iterators-core":"gL68y","../internals/object-create":"1As5O","../internals/create-property-descriptor":"ermgb","../internals/set-to-string-tag":"9arwS","../internals/iterators":"nPOBX"}],"gL68y":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var create = require('../internals/object-create');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var redefine = require('../internals/redefine');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */ if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
}
var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function() {
    var test = {
    };
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {
};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) redefine(IteratorPrototype, ITERATOR, function() {
    return this;
});
module.exports = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/fails":"8IfZQ","../internals/is-callable":"kPhuP","../internals/object-create":"1As5O","../internals/object-get-prototype-of":"lBy7h","../internals/redefine":"kxbj8","../internals/well-known-symbol":"5C8sm","../internals/is-pure":"6Bbq0"}],"lBy7h":[function(require,module,exports) {
var global = require('../internals/global');
var hasOwn = require('../internals/has-own-property');
var isCallable = require('../internals/is-callable');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
    var object = toObject(O);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof Object ? ObjectPrototype : null;
};

},{"../internals/global":"jxPDA","../internals/has-own-property":"3ZdUC","../internals/is-callable":"kPhuP","../internals/to-object":"eEdae","../internals/shared-key":"oNjWG","../internals/correct-prototype-getter":"5LqOC"}],"5LqOC":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    function F() {
    }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":"8IfZQ"}],"9arwS":[function(require,module,exports) {
var defineProperty = require('../internals/object-define-property').f;
var hasOwn = require('../internals/has-own-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};

},{"../internals/object-define-property":"bauTd","../internals/has-own-property":"3ZdUC","../internals/well-known-symbol":"5C8sm"}],"lb6rR":[function(require,module,exports) {
/* eslint-disable no-proto -- safe */ var uncurryThis = require('../internals/function-uncurry-this');
var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {
} ? (function() {
    var CORRECT_SETTER = false;
    var test = {
    };
    var setter;
    try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {
    }
    return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
})() : undefined);

},{"../internals/function-uncurry-this":"jJnXC","../internals/an-object":"1LIz9","../internals/a-possible-prototype":"fVs6e"}],"fVs6e":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var String = global.String;
var TypeError = global.TypeError;
module.exports = function(argument) {
    if (typeof argument == 'object' || isCallable(argument)) return argument;
    throw TypeError("Can't set " + String(argument) + ' as a prototype');
};

},{"../internals/global":"jxPDA","../internals/is-callable":"kPhuP"}],"ayxWX":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');
// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function(init) {
    return function Map() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionStrong);

},{"../internals/collection":"g8aLF","../internals/collection-strong":"lnvQ9"}],"g8aLF":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var isForced = require('../internals/is-forced');
var redefine = require('../internals/redefine');
var InternalMetadataModule = require('../internals/internal-metadata');
var iterate = require('../internals/iterate');
var anInstance = require('../internals/an-instance');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var fails = require('../internals/fails');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var setToStringTag = require('../internals/set-to-string-tag');
var inheritIfRequired = require('../internals/inherit-if-required');
module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {
    };
    var fixMethod = function(KEY) {
        var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
        redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
            uncurriedNativeMethod(this, value === 0 ? 0 : value);
            return this;
        } : KEY == 'delete' ? function(key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
            uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
            return this;
        });
    };
    var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
        new NativeConstructor().entries().next();
    })));
    if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.enable();
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {
        } : -0, 1) != instance;
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
        });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
            new NativeConstructor(iterable);
        });
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function() {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new NativeConstructor();
            var index = 5;
            while(index--)$instance[ADDER](index, index);
            return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function(dummy, iterable) {
                anInstance(dummy, NativePrototype);
                var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
                if (iterable != undefined) iterate(iterable, that[ADDER], {
                    that: that,
                    AS_ENTRIES: IS_MAP
                });
                return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    $({
        global: true,
        forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
};

},{"../internals/export":"8yfGv","../internals/global":"jxPDA","../internals/function-uncurry-this":"jJnXC","../internals/is-forced":"eTyNf","../internals/redefine":"kxbj8","../internals/internal-metadata":"fD10R","../internals/iterate":"fTyka","../internals/an-instance":"2zeQg","../internals/is-callable":"kPhuP","../internals/is-object":"dplrD","../internals/fails":"8IfZQ","../internals/check-correctness-of-iteration":"788V9","../internals/set-to-string-tag":"9arwS","../internals/inherit-if-required":"kXY2O"}],"fD10R":[function(require,module,exports) {
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var hiddenKeys = require('../internals/hidden-keys');
var isObject = require('../internals/is-object');
var hasOwn = require('../internals/has-own-property');
var defineProperty = require('../internals/object-define-property').f;
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternalModule = require('../internals/object-get-own-property-names-external');
var isExtensible = require('../internals/object-is-extensible');
var uid = require('../internals/uid');
var FREEZING = require('../internals/freezing');
var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;
var setMetadata = function(it) {
    defineProperty(it, METADATA, {
        value: {
            objectID: 'O' + id++,
            weakData: {
            } // weak collections IDs
        }
    });
};
var fastKey = function(it, create) {
    // return a primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMetadata(it);
    // return object ID
    }
    return it[METADATA].objectID;
};
var getWeakData = function(it, create) {
    if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMetadata(it);
    // return the store of weak collections IDs
    }
    return it[METADATA].weakData;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it) {
    if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
    return it;
};
var enable = function() {
    meta.enable = function() {
    };
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis([].splice);
    var test = {
    };
    test[METADATA] = 1;
    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
        getOwnPropertyNamesModule.f = function(it) {
            var result = getOwnPropertyNames(it);
            for(var i = 0, length = result.length; i < length; i++)if (result[i] === METADATA) {
                splice(result, i, 1);
                break;
            }
            return result;
        };
        $({
            target: 'Object',
            stat: true,
            forced: true
        }, {
            getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        });
    }
};
var meta = module.exports = {
    enable: enable,
    fastKey: fastKey,
    getWeakData: getWeakData,
    onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;

},{"../internals/export":"8yfGv","../internals/function-uncurry-this":"jJnXC","../internals/hidden-keys":"lHxXS","../internals/is-object":"dplrD","../internals/has-own-property":"3ZdUC","../internals/object-define-property":"bauTd","../internals/object-get-own-property-names":"evqXT","../internals/object-get-own-property-names-external":"7r5nw","../internals/object-is-extensible":"eApj6","../internals/uid":"eMBx9","../internals/freezing":"5dl3e"}],"7r5nw":[function(require,module,exports) {
/* eslint-disable es/no-object-getownpropertynames -- safe */ var classof = require('../internals/classof-raw');
var toIndexedObject = require('../internals/to-indexed-object');
var $getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var arraySlice = require('../internals/array-slice-simple');
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
    try {
        return $getOwnPropertyNames(it);
    } catch (error) {
        return arraySlice(windowNames);
    }
};
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && classof(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};

},{"../internals/classof-raw":"A9m3U","../internals/to-indexed-object":"8ueFu","../internals/object-get-own-property-names":"evqXT","../internals/array-slice-simple":"bYLId"}],"bYLId":[function(require,module,exports) {
var global = require('../internals/global');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var createProperty = require('../internals/create-property');
var Array = global.Array;
var max = Math.max;
module.exports = function(O, start, end) {
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = Array(max(fin - k, 0));
    for(var n = 0; k < fin; k++, n++)createProperty(result, n, O[k]);
    result.length = n;
    return result;
};

},{"../internals/global":"jxPDA","../internals/to-absolute-index":"dDgEq","../internals/length-of-array-like":"afDy6","../internals/create-property":"a2n8E"}],"a2n8E":[function(require,module,exports) {
'use strict';
var toPropertyKey = require('../internals/to-property-key');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = function(object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
};

},{"../internals/to-property-key":"bMDpS","../internals/object-define-property":"bauTd","../internals/create-property-descriptor":"ermgb"}],"eApj6":[function(require,module,exports) {
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var ARRAY_BUFFER_NON_EXTENSIBLE = require('../internals/array-buffer-non-extensible');
// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function() {
    $isExtensible(1);
});
// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
    if (!isObject(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

},{"../internals/fails":"8IfZQ","../internals/is-object":"dplrD","../internals/classof-raw":"A9m3U","../internals/array-buffer-non-extensible":"9fgu5"}],"9fgu5":[function(require,module,exports) {
// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = require('../internals/fails');
module.exports = fails(function() {
    if (typeof ArrayBuffer == 'function') {
        var buffer = new ArrayBuffer(8);
        // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
        if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
            value: 8
        });
    }
});

},{"../internals/fails":"8IfZQ"}],"5dl3e":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({
    }));
});

},{"../internals/fails":"8IfZQ"}],"fTyka":[function(require,module,exports) {
var global = require('../internals/global');
var bind = require('../internals/function-bind-context');
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var tryToString = require('../internals/try-to-string');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
var iteratorClose = require('../internals/iterator-close');
var TypeError = global.TypeError;
var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
var ResultPrototype = Result.prototype;
module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
        if (iterator) iteratorClose(iterator, 'normal', condition);
        return new Result(true, condition);
    };
    var callFn = function(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
            for(index = 0, length = lengthOfArrayLike(iterable); length > index; index++){
                result = callFn(iterable[index]);
                if (result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
    }
    next = iterator.next;
    while(!(step = call(next, iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator, 'throw', error);
        }
        if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
};

},{"../internals/global":"jxPDA","../internals/function-bind-context":"kZubc","../internals/function-call":"jhLed","../internals/an-object":"1LIz9","../internals/try-to-string":"1hxsu","../internals/is-array-iterator-method":"7ORJD","../internals/length-of-array-like":"afDy6","../internals/object-is-prototype-of":"fyf1A","../internals/get-iterator":"dQrLE","../internals/get-iterator-method":"5CTSY","../internals/iterator-close":"cwu4L"}],"kZubc":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var aCallable = require('../internals/a-callable');
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : bind ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/function-uncurry-this":"jJnXC","../internals/a-callable":"83opn"}],"7ORJD":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/well-known-symbol":"5C8sm","../internals/iterators":"nPOBX"}],"dQrLE":[function(require,module,exports) {
var global = require('../internals/global');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var tryToString = require('../internals/try-to-string');
var getIteratorMethod = require('../internals/get-iterator-method');
var TypeError = global.TypeError;
module.exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
    throw TypeError(tryToString(argument) + ' is not iterable');
};

},{"../internals/global":"jxPDA","../internals/function-call":"jhLed","../internals/a-callable":"83opn","../internals/an-object":"1LIz9","../internals/try-to-string":"1hxsu","../internals/get-iterator-method":"5CTSY"}],"5CTSY":[function(require,module,exports) {
var classof = require('../internals/classof');
var getMethod = require('../internals/get-method');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function(it) {
    if (it != undefined) return getMethod(it, ITERATOR) || getMethod(it, '@@iterator') || Iterators[classof(it)];
};

},{"../internals/classof":"kJ8JQ","../internals/get-method":"hEJ6b","../internals/iterators":"nPOBX","../internals/well-known-symbol":"5C8sm"}],"kJ8JQ":[function(require,module,exports) {
var global = require('../internals/global');
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var isCallable = require('../internals/is-callable');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) == 'Arguments';
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {
    }
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

},{"../internals/global":"jxPDA","../internals/to-string-tag-support":"g8wEl","../internals/is-callable":"kPhuP","../internals/classof-raw":"A9m3U","../internals/well-known-symbol":"5C8sm"}],"g8wEl":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {
};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":"5C8sm"}],"cwu4L":[function(require,module,exports) {
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var getMethod = require('../internals/get-method');
module.exports = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
        innerResult = getMethod(iterator, 'return');
        if (!innerResult) {
            if (kind === 'throw') throw value;
            return value;
        }
        innerResult = call(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
};

},{"../internals/function-call":"jhLed","../internals/an-object":"1LIz9","../internals/get-method":"hEJ6b"}],"2zeQg":[function(require,module,exports) {
var global = require('../internals/global');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var TypeError = global.TypeError;
module.exports = function(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw TypeError('Incorrect invocation');
};

},{"../internals/global":"jxPDA","../internals/object-is-prototype-of":"fyf1A"}],"788V9":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;
try {
    var called = 0;
    var iteratorWithReturn = {
        next: function() {
            return {
                done: !!called++
            };
        },
        'return': function() {
            SAFE_CLOSING = true;
        }
    };
    iteratorWithReturn[ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {
}
module.exports = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
        var object = {
        };
        object[ITERATOR] = function() {
            return {
                next: function() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {
    }
    return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":"5C8sm"}],"kXY2O":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var setPrototypeOf = require('../internals/object-set-prototype-of');
// makes subclassing work correct for wrapped built-ins
module.exports = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (// it can work only with native `setPrototypeOf`
    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
};

},{"../internals/is-callable":"kPhuP","../internals/is-object":"dplrD","../internals/object-set-prototype-of":"lb6rR"}],"lnvQ9":[function(require,module,exports) {
'use strict';
var defineProperty = require('../internals/object-define-property').f;
var create = require('../internals/object-create');
var redefineAll = require('../internals/redefine-all');
var bind = require('../internals/function-bind-context');
var anInstance = require('../internals/an-instance');
var iterate = require('../internals/iterate');
var defineIterator = require('../internals/define-iterator');
var setSpecies = require('../internals/set-species');
var DESCRIPTORS = require('../internals/descriptors');
var fastKey = require('../internals/internal-metadata').fastKey;
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
module.exports = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function(that, iterable) {
            anInstance(that, Prototype);
            setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: undefined,
                last: undefined,
                size: 0
            });
            if (!DESCRIPTORS) that.size = 0;
            if (iterable != undefined) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
            });
        });
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index;
            // change existing entry
            if (entry) entry.value = value;
            else {
                state.last = entry = {
                    index: index = fastKey(key, true),
                    key: key,
                    value: value,
                    previous: previous = state.last,
                    next: undefined,
                    removed: false
                };
                if (!state.first) state.first = entry;
                if (previous) previous.next = entry;
                if (DESCRIPTORS) state.size++;
                else that.size++;
                // add to index
                if (index !== 'F') state.index[index] = entry;
            }
            return that;
        };
        var getEntry = function(that, key) {
            var state = getInternalState(that);
            // fast case
            var index = fastKey(key);
            var entry;
            if (index !== 'F') return state.index[index];
            // frozen object case
            for(entry = state.first; entry; entry = entry.next){
                if (entry.key == key) return entry;
            }
        };
        redefineAll(Prototype, {
            // `{ Map, Set }.prototype.clear()` methods
            // https://tc39.es/ecma262/#sec-map.prototype.clear
            // https://tc39.es/ecma262/#sec-set.prototype.clear
            clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while(entry){
                    entry.removed = true;
                    if (entry.previous) entry.previous = entry.previous.next = undefined;
                    delete data[entry.index];
                    entry = entry.next;
                }
                state.first = state.last = undefined;
                if (DESCRIPTORS) state.size = 0;
                else that.size = 0;
            },
            // `{ Map, Set }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.delete
            // https://tc39.es/ecma262/#sec-set.prototype.delete
            'delete': function(key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                if (entry) {
                    var next = entry.next;
                    var prev = entry.previous;
                    delete state.index[entry.index];
                    entry.removed = true;
                    if (prev) prev.next = next;
                    if (next) next.previous = prev;
                    if (state.first == entry) state.first = next;
                    if (state.last == entry) state.last = prev;
                    if (DESCRIPTORS) state.size--;
                    else that.size--;
                }
                return !!entry;
            },
            // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.foreach
            // https://tc39.es/ecma262/#sec-set.prototype.foreach
            forEach: function forEach(callbackfn /* , that = undefined */ ) {
                var state = getInternalState(this);
                var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                var entry;
                while(entry = entry ? entry.next : state.first){
                    boundFunction(entry.value, entry.key, this);
                    // revert to the last existing entry
                    while(entry && entry.removed)entry = entry.previous;
                }
            },
            // `{ Map, Set}.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.has
            // https://tc39.es/ecma262/#sec-set.prototype.has
            has: function has(key) {
                return !!getEntry(this, key);
            }
        });
        redefineAll(Prototype, IS_MAP ? {
            // `Map.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-map.prototype.get
            get: function get(key) {
                var entry = getEntry(this, key);
                return entry && entry.value;
            },
            // `Map.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-map.prototype.set
            set: function set(key, value) {
                return define(this, key === 0 ? 0 : key, value);
            }
        } : {
            // `Set.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-set.prototype.add
            add: function add(value) {
                return define(this, value = value === 0 ? 0 : value, value);
            }
        });
        if (DESCRIPTORS) defineProperty(Prototype, 'size', {
            get: function() {
                return getInternalState(this).size;
            }
        });
        return Constructor;
    },
    setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.entries
        // https://tc39.es/ecma262/#sec-map.prototype.keys
        // https://tc39.es/ecma262/#sec-map.prototype.values
        // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
        // https://tc39.es/ecma262/#sec-set.prototype.entries
        // https://tc39.es/ecma262/#sec-set.prototype.keys
        // https://tc39.es/ecma262/#sec-set.prototype.values
        // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
        defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
            setInternalState(this, {
                type: ITERATOR_NAME,
                target: iterated,
                state: getInternalCollectionState(iterated),
                kind: kind,
                last: undefined
            });
        }, function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            // revert to the last existing entry
            while(entry && entry.removed)entry = entry.previous;
            // get next entry
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                // or finish the iteration
                state.target = undefined;
                return {
                    value: undefined,
                    done: true
                };
            }
            // return step by kind
            if (kind == 'keys') return {
                value: entry.key,
                done: false
            };
            if (kind == 'values') return {
                value: entry.value,
                done: false
            };
            return {
                value: [
                    entry.key,
                    entry.value
                ],
                done: false
            };
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
        // `{ Map, Set }.prototype[@@species]` accessors
        // https://tc39.es/ecma262/#sec-get-map-@@species
        // https://tc39.es/ecma262/#sec-get-set-@@species
        setSpecies(CONSTRUCTOR_NAME);
    }
};

},{"../internals/object-define-property":"bauTd","../internals/object-create":"1As5O","../internals/redefine-all":"ch5Rt","../internals/function-bind-context":"kZubc","../internals/an-instance":"2zeQg","../internals/iterate":"fTyka","../internals/define-iterator":"3Ugai","../internals/set-species":"hBKMQ","../internals/descriptors":"6ZLib","../internals/internal-metadata":"fD10R","../internals/internal-state":"i6AaM"}],"ch5Rt":[function(require,module,exports) {
var redefine = require('../internals/redefine');
module.exports = function(target, src, options) {
    for(var key in src)redefine(target, key, src[key], options);
    return target;
};

},{"../internals/redefine":"kxbj8"}],"hBKMQ":[function(require,module,exports) {
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var definePropertyModule = require('../internals/object-define-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var DESCRIPTORS = require('../internals/descriptors');
var SPECIES = wellKnownSymbol('species');
module.exports = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule.f;
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};

},{"../internals/get-built-in":"78arb","../internals/object-define-property":"bauTd","../internals/well-known-symbol":"5C8sm","../internals/descriptors":"6ZLib"}],"wRGKV":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var redefine = require('../internals/redefine');
var toString = require('../internals/object-to-string');
// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) redefine(Object.prototype, 'toString', toString, {
    unsafe: true
});

},{"../internals/to-string-tag-support":"g8wEl","../internals/redefine":"kxbj8","../internals/object-to-string":"hEWlD"}],"hEWlD":[function(require,module,exports) {
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');
// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? ({
}).toString : function toString() {
    return '[object ' + classof(this) + ']';
};

},{"../internals/to-string-tag-support":"g8wEl","../internals/classof":"kJ8JQ"}],"b0sE2":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
var toString = require('../internals/to-string');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function(iterated) {
    setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
    });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
        value: undefined,
        done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
        value: point,
        done: false
    };
});

},{"../internals/string-multibyte":"a9S4J","../internals/to-string":"4cTlm","../internals/internal-state":"i6AaM","../internals/define-iterator":"3Ugai"}],"a9S4J":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);
var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = toString(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = charCodeAt(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
    };
};
module.exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
};

},{"../internals/function-uncurry-this":"jJnXC","../internals/to-integer-or-infinity":"aqyxv","../internals/to-string":"4cTlm","../internals/require-object-coercible":"3Qlyo"}],"4cTlm":[function(require,module,exports) {
var global = require('../internals/global');
var classof = require('../internals/classof');
var String = global.String;
module.exports = function(argument) {
    if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return String(argument);
};

},{"../internals/global":"jxPDA","../internals/classof":"kJ8JQ"}],"f1yhZ":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = global;

},{"../internals/global":"jxPDA"}],"72SE4":[function(require,module,exports) {
require('../../modules/es.array.iterator');
require('../../modules/es.object.to-string');
require('../../modules/es.set');
require('../../modules/es.string.iterator');
var path = require('../../internals/path');
module.exports = path.Set;

},{"../../modules/es.array.iterator":"bLuDU","../../modules/es.object.to-string":"wRGKV","../../modules/es.set":"8dCmg","../../modules/es.string.iterator":"b0sE2","../../internals/path":"f1yhZ"}],"8dCmg":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');
// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function(init) {
    return function Set() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionStrong);

},{"../internals/collection":"g8aLF","../internals/collection-strong":"lnvQ9"}],"7KBhD":[function(require,module,exports) {
require('../../modules/es.array.iterator');
require('../../modules/es.object.to-string');
require('../../modules/es.weak-map');
var path = require('../../internals/path');
module.exports = path.WeakMap;

},{"../../modules/es.array.iterator":"bLuDU","../../modules/es.object.to-string":"wRGKV","../../modules/es.weak-map":"lEfis","../../internals/path":"f1yhZ"}],"lEfis":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var redefineAll = require('../internals/redefine-all');
var InternalMetadataModule = require('../internals/internal-metadata');
var collection = require('../internals/collection');
var collectionWeak = require('../internals/collection-weak');
var isObject = require('../internals/is-object');
var isExtensible = require('../internals/object-is-extensible');
var enforceInternalState = require('../internals/internal-state').enforce;
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var InternalWeakMap;
var wrapper = function(init) {
    return function WeakMap() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
};
// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
    InternalMetadataModule.enable();
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
    var nativeHas = uncurryThis(WeakMapPrototype.has);
    var nativeGet = uncurryThis(WeakMapPrototype.get);
    var nativeSet = uncurryThis(WeakMapPrototype.set);
    redefineAll(WeakMapPrototype, {
        'delete': function(key) {
            if (isObject(key) && !isExtensible(key)) {
                var state = enforceInternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeDelete(this, key) || state.frozen['delete'](key);
            }
            return nativeDelete(this, key);
        },
        has: function has(key) {
            if (isObject(key) && !isExtensible(key)) {
                var state = enforceInternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas(this, key) || state.frozen.has(key);
            }
            return nativeHas(this, key);
        },
        get: function get(key) {
            if (isObject(key) && !isExtensible(key)) {
                var state = enforceInternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
            }
            return nativeGet(this, key);
        },
        set: function set(key, value) {
            if (isObject(key) && !isExtensible(key)) {
                var state = enforceInternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
            } else nativeSet(this, key, value);
            return this;
        }
    });
}

},{"../internals/global":"jxPDA","../internals/function-uncurry-this":"jJnXC","../internals/redefine-all":"ch5Rt","../internals/internal-metadata":"fD10R","../internals/collection":"g8aLF","../internals/collection-weak":"jVw7W","../internals/is-object":"dplrD","../internals/object-is-extensible":"eApj6","../internals/internal-state":"i6AaM","../internals/native-weak-map":"3Q3X6"}],"jVw7W":[function(require,module,exports) {
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var redefineAll = require('../internals/redefine-all');
var getWeakData = require('../internals/internal-metadata').getWeakData;
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var anInstance = require('../internals/an-instance');
var iterate = require('../internals/iterate');
var ArrayIterationModule = require('../internals/array-iteration');
var hasOwn = require('../internals/has-own-property');
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;
// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function() {
    this.entries = [];
};
var findUncaughtFrozen = function(store, key) {
    return find(store.entries, function(it) {
        return it[0] === key;
    });
};
UncaughtFrozenStore.prototype = {
    get: function(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
    },
    has: function(key) {
        return !!findUncaughtFrozen(this, key);
    },
    set: function(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;
        else this.entries.push([
            key,
            value
        ]);
    },
    'delete': function(key) {
        var index = findIndex(this.entries, function(it) {
            return it[0] === key;
        });
        if (~index) splice(this.entries, index, 1);
        return !!~index;
    }
};
module.exports = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function(that, iterable) {
            anInstance(that, Prototype);
            setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                id: id++,
                frozen: undefined
            });
            if (iterable != undefined) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
            });
        });
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
            var state = getInternalState(that);
            var data = getWeakData(anObject(key), true);
            if (data === true) uncaughtFrozenStore(state).set(key, value);
            else data[state.id] = value;
            return that;
        };
        redefineAll(Prototype, {
            // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
            // https://tc39.es/ecma262/#sec-weakset.prototype.delete
            'delete': function(key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state)['delete'](key);
                return data && hasOwn(data, state.id) && delete data[state.id];
            },
            // `{ WeakMap, WeakSet }.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-weakmap.prototype.has
            // https://tc39.es/ecma262/#sec-weakset.prototype.has
            has: function has(key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state).has(key);
                return data && hasOwn(data, state.id);
            }
        });
        redefineAll(Prototype, IS_MAP ? {
            // `WeakMap.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-weakmap.prototype.get
            get: function get(key) {
                var state = getInternalState(this);
                if (isObject(key)) {
                    var data = getWeakData(key);
                    if (data === true) return uncaughtFrozenStore(state).get(key);
                    return data ? data[state.id] : undefined;
                }
            },
            // `WeakMap.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-weakmap.prototype.set
            set: function set(key, value) {
                return define(this, key, value);
            }
        } : {
            // `WeakSet.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-weakset.prototype.add
            add: function add(value) {
                return define(this, value, true);
            }
        });
        return Constructor;
    }
};

},{"../internals/function-uncurry-this":"jJnXC","../internals/redefine-all":"ch5Rt","../internals/internal-metadata":"fD10R","../internals/an-object":"1LIz9","../internals/is-object":"dplrD","../internals/an-instance":"2zeQg","../internals/iterate":"fTyka","../internals/array-iteration":"8a6lB","../internals/has-own-property":"3ZdUC","../internals/internal-state":"i6AaM"}],"8a6lB":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var uncurryThis = require('../internals/function-uncurry-this');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var arraySpeciesCreate = require('../internals/array-species-create');
var push = uncurryThis([].push);
// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var boundFunction = bind(callbackfn, that);
        var length = lengthOfArrayLike(self);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
        var value, result;
        for(; length > index; index++)if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch(TYPE){
                    case 3:
                        return true; // some
                    case 5:
                        return value; // find
                    case 6:
                        return index; // findIndex
                    case 2:
                        push(target, value); // filter
                }
                else switch(TYPE){
                    case 4:
                        return false; // every
                    case 7:
                        push(target, value); // filterReject
                }
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
};
module.exports = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod(7)
};

},{"../internals/function-bind-context":"kZubc","../internals/function-uncurry-this":"jJnXC","../internals/indexed-object":"e5ccT","../internals/to-object":"eEdae","../internals/length-of-array-like":"afDy6","../internals/array-species-create":"dEli4"}],"dEli4":[function(require,module,exports) {
var arraySpeciesConstructor = require('../internals/array-species-constructor');
// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

},{"../internals/array-species-constructor":"8YJbm"}],"8YJbm":[function(require,module,exports) {
var global = require('../internals/global');
var isArray = require('../internals/is-array');
var isConstructor = require('../internals/is-constructor');
var isObject = require('../internals/is-object');
var wellKnownSymbol = require('../internals/well-known-symbol');
var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray) {
    var C;
    if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
        else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
        }
    }
    return C === undefined ? Array : C;
};

},{"../internals/global":"jxPDA","../internals/is-array":"gN5mt","../internals/is-constructor":"iNoNi","../internals/is-object":"dplrD","../internals/well-known-symbol":"5C8sm"}],"gN5mt":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
    return classof(argument) == 'Array';
};

},{"../internals/classof-raw":"A9m3U"}],"iNoNi":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var classof = require('../internals/classof');
var getBuiltIn = require('../internals/get-built-in');
var inspectSource = require('../internals/inspect-source');
var noop = function() {
};
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
        construct(noop, empty, argument);
        return true;
    } catch (error) {
        return false;
    }
};
var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch(classof(argument)){
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
    } catch (error) {
        return true;
    }
};
isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function() {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
    }) || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"../internals/function-uncurry-this":"jJnXC","../internals/fails":"8IfZQ","../internals/is-callable":"kPhuP","../internals/classof":"kJ8JQ","../internals/get-built-in":"78arb","../internals/inspect-source":"7DOzX"}],"l4OUA":[function(require,module,exports) {
require('../../modules/es.string.iterator');
require('../../modules/es.array.from');
var path = require('../../internals/path');
module.exports = path.Array.from;

},{"../../modules/es.string.iterator":"b0sE2","../../modules/es.array.from":"6k4iU","../../internals/path":"f1yhZ"}],"6k4iU":[function(require,module,exports) {
var $ = require('../internals/export');
var from = require('../internals/array-from');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
});
// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    from: from
});

},{"../internals/export":"8yfGv","../internals/array-from":"feEcT","../internals/check-correctness-of-iteration":"788V9"}],"feEcT":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var bind = require('../internals/function-bind-context');
var call = require('../internals/function-call');
var toObject = require('../internals/to-object');
var callWithSafeIterationClosing = require('../internals/call-with-safe-iteration-closing');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var isConstructor = require('../internals/is-constructor');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var createProperty = require('../internals/create-property');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
var Array = global.Array;
// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
    var O = toObject(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        result = IS_CONSTRUCTOR ? new this() : [];
        for(; !(step = call(next, iterator)).done; index++){
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                step.value,
                index
            ], true) : step.value;
            createProperty(result, index, value);
        }
    } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : Array(length);
        for(; length > index; index++){
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
        }
    }
    result.length = index;
    return result;
};

},{"../internals/global":"jxPDA","../internals/function-bind-context":"kZubc","../internals/function-call":"jhLed","../internals/to-object":"eEdae","../internals/call-with-safe-iteration-closing":"b1Dt0","../internals/is-array-iterator-method":"7ORJD","../internals/is-constructor":"iNoNi","../internals/length-of-array-like":"afDy6","../internals/create-property":"a2n8E","../internals/get-iterator":"dQrLE","../internals/get-iterator-method":"5CTSY"}],"b1Dt0":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var iteratorClose = require('../internals/iterator-close');
// call something on iterator step with safe closing on error
module.exports = function(iterator, fn, value, ENTRIES) {
    try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
        iteratorClose(iterator, 'throw', error);
    }
};

},{"../internals/an-object":"1LIz9","../internals/iterator-close":"cwu4L"}],"2cgsT":[function(require,module,exports) {
require('../../modules/es.object.assign');
var path = require('../../internals/path');
module.exports = path.Object.assign;

},{"../../modules/es.object.assign":"d9U4P","../../internals/path":"f1yhZ"}],"d9U4P":[function(require,module,exports) {
var $ = require('../internals/export');
var assign = require('../internals/object-assign');
// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({
    target: 'Object',
    stat: true,
    forced: Object.assign !== assign
}, {
    assign: assign
});

},{"../internals/export":"8yfGv","../internals/object-assign":"aXKvb"}],"aXKvb":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var uncurryThis = require('../internals/function-uncurry-this');
var call = require('../internals/function-call');
var fails = require('../internals/fails');
var objectKeys = require('../internals/object-keys');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);
// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function() {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS && $assign({
        b: 1
    }, $assign(defineProperty({
    }, 'a', {
        enumerable: true,
        get: function() {
            defineProperty(this, 'b', {
                value: 3,
                enumerable: false
            });
        }
    }), {
        b: 2
    })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {
    };
    var B = {
    };
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function(chr) {
        B[chr] = chr;
    });
    return $assign({
    }, A)[symbol] != 7 || objectKeys($assign({
    }, B)).join('') != alphabet;
}) ? function assign(target, source) {
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while(argumentsLength > index){
        var S = IndexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while(length > j){
            key = keys[j++];
            if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
        }
    }
    return T;
} : $assign;

},{"../internals/descriptors":"6ZLib","../internals/function-uncurry-this":"jJnXC","../internals/function-call":"jhLed","../internals/fails":"8IfZQ","../internals/object-keys":"9bK4Y","../internals/object-get-own-property-symbols":"dBB9V","../internals/object-property-is-enumerable":"bz2pv","../internals/to-object":"eEdae","../internals/indexed-object":"e5ccT"}],"fB77G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollbarMap", ()=>scrollbarMap
);
parcelHelpers.export(exports, "Scrollbar", ()=>Scrollbar1
);
var _tslib = require("tslib");
var _clamp = require("lodash-es/clamp");
var _clampDefault = parcelHelpers.interopDefault(_clamp);
var _options = require("./options");
var _ = require("./utils/");
var _1 = require("./decorators/");
var _2 = require("./track/");
var _3 = require("./geometry/");
var _4 = require("./scrolling/");
var _plugin = require("./plugin");
var _5 = require("./events/");
var scrollbarMap = new Map();
var Scrollbar1 = function() {
    function Scrollbar(containerEl, options) {
        var _this = this;
        /**
         * Current scrolling offsets
         */ this.offset = {
            x: 0,
            y: 0
        };
        /**
         * Max-allowed scrolling offsets
         */ this.limit = {
            x: Infinity,
            y: Infinity
        };
        /**
         * Container bounding rect
         */ this.bounding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        this._plugins = [];
        this._momentum = {
            x: 0,
            y: 0
        };
        this._listeners = new Set();
        this.containerEl = containerEl;
        var contentEl = this.contentEl = document.createElement('div');
        this.options = new _options.Options(options);
        // mark as a scroll element
        containerEl.setAttribute('data-scrollbar', 'true');
        // make container focusable
        containerEl.setAttribute('tabindex', '-1');
        _.setStyle(containerEl, {
            overflow: 'hidden',
            outline: 'none'
        });
        // enable touch event capturing in IE, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/39
        if (window.navigator.msPointerEnabled) containerEl.style.msTouchAction = 'none';
        // mount content
        contentEl.className = 'scroll-content';
        Array.from(containerEl.childNodes).forEach(function(node) {
            contentEl.appendChild(node);
        });
        containerEl.appendChild(contentEl);
        // attach track
        this.track = new _2.TrackController(this);
        // initial measuring
        this.size = this.getSize();
        // init plugins
        this._plugins = _plugin.initPlugins(this, this.options.plugins);
        // preserve scroll offset
        var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
        containerEl.scrollLeft = containerEl.scrollTop = 0;
        this.setPosition(scrollLeft, scrollTop, {
            withoutCallbacks: true
        });
        var global = window;
        var MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver;
        // observe
        if (typeof MutationObserver === 'function') {
            this._observer = new MutationObserver(function() {
                _this.update();
            });
            this._observer.observe(contentEl, {
                subtree: true,
                childList: true
            });
        }
        scrollbarMap.set(containerEl, this);
        // wait for DOM ready
        requestAnimationFrame(function() {
            _this._init();
        });
    }
    Object.defineProperty(Scrollbar.prototype, "parent", {
        /**
         * Parent scrollbar
         */ get: function() {
            var elem = this.containerEl.parentElement;
            while(elem){
                var parentScrollbar = scrollbarMap.get(elem);
                if (parentScrollbar) return parentScrollbar;
                elem = elem.parentElement;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollTop", {
        /**
         * Gets or sets `scrollbar.offset.y`
         */ get: function() {
            return this.offset.y;
        },
        set: function(y) {
            this.setPosition(this.scrollLeft, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
        /**
         * Gets or sets `scrollbar.offset.x`
         */ get: function() {
            return this.offset.x;
        },
        set: function(x) {
            this.setPosition(x, this.scrollTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the size of the scrollbar container element
     * and the content wrapper element
     */ Scrollbar.prototype.getSize = function() {
        return _3.getSize(this);
    };
    /**
     * Forces scrollbar to update geometry infomation.
     *
     * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
     * You can call this method to force an update when you modified contents
     */ Scrollbar.prototype.update = function() {
        _3.update(this);
        this._plugins.forEach(function(plugin) {
            plugin.onUpdate();
        });
    };
    /**
     * Checks if an element is visible in the current view area
     */ Scrollbar.prototype.isVisible = function(elem) {
        return _3.isVisible(this, elem);
    };
    /**
     * Sets the scrollbar to the given offset without easing
     */ Scrollbar.prototype.setPosition = function(x, y, options) {
        var _this = this;
        if (x === void 0) x = this.offset.x;
        if (y === void 0) y = this.offset.y;
        if (options === void 0) options = {
        };
        var status = _4.setPosition(this, x, y);
        if (!status || options.withoutCallbacks) return;
        this._listeners.forEach(function(fn) {
            fn.call(_this, status);
        });
    };
    /**
     * Scrolls to given position with easing function
     */ Scrollbar.prototype.scrollTo = function(x, y, duration, options) {
        if (x === void 0) x = this.offset.x;
        if (y === void 0) y = this.offset.y;
        if (duration === void 0) duration = 0;
        if (options === void 0) options = {
        };
        _4.scrollTo(this, x, y, duration, options);
    };
    /**
     * Scrolls the target element into visible area of scrollbar,
     * likes the DOM method `element.scrollIntoView().
     */ Scrollbar.prototype.scrollIntoView = function(elem, options) {
        if (options === void 0) options = {
        };
        _4.scrollIntoView(this, elem, options);
    };
    /**
     * Adds scrolling listener
     */ Scrollbar.prototype.addListener = function(fn) {
        if (typeof fn !== 'function') throw new TypeError('[smooth-scrollbar] scrolling listener should be a function');
        this._listeners.add(fn);
    };
    /**
     * Removes listener previously registered with `scrollbar.addListener()`
     */ Scrollbar.prototype.removeListener = function(fn) {
        this._listeners.delete(fn);
    };
    /**
     * Adds momentum and applys delta transformers.
     */ Scrollbar.prototype.addTransformableMomentum = function(x, y, fromEvent, callback) {
        this._updateDebounced();
        var finalDelta = this._plugins.reduce(function(delta, plugin) {
            return plugin.transformDelta(delta, fromEvent) || delta;
        }, {
            x: x,
            y: y
        });
        var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
        if (willScroll) this.addMomentum(finalDelta.x, finalDelta.y);
        if (callback) callback.call(this, willScroll);
    };
    /**
     * Increases scrollbar's momentum
     */ Scrollbar.prototype.addMomentum = function(x, y) {
        this.setMomentum(this._momentum.x + x, this._momentum.y + y);
    };
    /**
     * Sets scrollbar's momentum to given value
     */ Scrollbar.prototype.setMomentum = function(x, y) {
        if (this.limit.x === 0) x = 0;
        if (this.limit.y === 0) y = 0;
        if (this.options.renderByPixels) {
            x = Math.round(x);
            y = Math.round(y);
        }
        this._momentum.x = x;
        this._momentum.y = y;
    };
    /**
     * Update options for specific plugin
     *
     * @param pluginName Name of the plugin
     * @param [options] An object includes the properties that you want to update
     */ Scrollbar.prototype.updatePluginOptions = function(pluginName, options) {
        this._plugins.forEach(function(plugin) {
            if (plugin.name === pluginName) Object.assign(plugin.options, options);
        });
    };
    Scrollbar.prototype.destroy = function() {
        var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
        _.clearEventsOn(this);
        this._listeners.clear();
        this.setMomentum(0, 0);
        cancelAnimationFrame(this._renderID);
        if (this._observer) this._observer.disconnect();
        scrollbarMap.delete(this.containerEl);
        // restore contents
        var childNodes = Array.from(contentEl.childNodes);
        while(containerEl.firstChild)containerEl.removeChild(containerEl.firstChild);
        childNodes.forEach(function(el) {
            containerEl.appendChild(el);
        });
        // reset scroll position
        _.setStyle(containerEl, {
            overflow: ''
        });
        containerEl.scrollTop = this.scrollTop;
        containerEl.scrollLeft = this.scrollLeft;
        // invoke plugin.onDestroy
        this._plugins.forEach(function(plugin) {
            plugin.onDestroy();
        });
        this._plugins.length = 0;
    };
    Scrollbar.prototype._init = function() {
        var _this = this;
        this.update();
        // init evet handlers
        Object.keys(_5).forEach(function(prop) {
            _5[prop](_this);
        });
        // invoke `plugin.onInit`
        this._plugins.forEach(function(plugin) {
            plugin.onInit();
        });
        this._render();
    };
    Scrollbar.prototype._updateDebounced = function() {
        this.update();
    };
    // check whether to propagate monmentum to parent scrollbar
    // the following situations are considered as `true`:
    //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
    //         2. scrollbar reaches one side and is not about to scroll on the other direction
    Scrollbar.prototype._shouldPropagateMomentum = function(deltaX, deltaY) {
        if (deltaX === void 0) deltaX = 0;
        if (deltaY === void 0) deltaY = 0;
        var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
        if (!options.continuousScrolling) return false;
        // force an update when scrollbar is "unscrollable", see #106
        if (limit.x === 0 && limit.y === 0) this._updateDebounced();
        var destX = _clampDefault.default(deltaX + offset.x, 0, limit.x);
        var destY = _clampDefault.default(deltaY + offset.y, 0, limit.y);
        var res = true;
        // offsets are not about to change
        // `&=` operator is not allowed for boolean types
        res = res && destX === offset.x;
        res = res && destY === offset.y;
        // current offsets are on the edge
        res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
        return res;
    };
    Scrollbar.prototype._render = function() {
        var _momentum = this._momentum;
        if (_momentum.x || _momentum.y) {
            var nextX = this._nextTick('x');
            var nextY = this._nextTick('y');
            _momentum.x = nextX.momentum;
            _momentum.y = nextY.momentum;
            this.setPosition(nextX.position, nextY.position);
        }
        var remain = _tslib.__assign({
        }, this._momentum);
        this._plugins.forEach(function(plugin) {
            plugin.onRender(remain);
        });
        this._renderID = requestAnimationFrame(this._render.bind(this));
    };
    Scrollbar.prototype._nextTick = function(direction) {
        var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
        var current = offset[direction];
        var remain = _momentum[direction];
        if (Math.abs(remain) <= 0.1) return {
            momentum: 0,
            position: current + remain
        };
        var nextMomentum = remain * (1 - options.damping);
        if (options.renderByPixels) nextMomentum |= 0;
        return {
            momentum: nextMomentum,
            position: current + remain - nextMomentum
        };
    };
    _tslib.__decorate([
        _1.debounce(100, {
            leading: true
        })
    ], Scrollbar.prototype, "_updateDebounced", null);
    return Scrollbar;
}();

},{"tslib":"j55WF","lodash-es/clamp":"7c7oI","./options":"j6tdl","./utils/":"bJzPm","./decorators/":"kOXT5","./track/":"hDVPW","./geometry/":"awVr9","./scrolling/":"jwCHG","./plugin":"ccfnQ","./events/":"iCOOH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7c7oI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseClampJs = require("./_baseClamp.js");
var _baseClampJsDefault = parcelHelpers.interopDefault(_baseClampJs);
var _toNumberJs = require("./toNumber.js");
var _toNumberJsDefault = parcelHelpers.interopDefault(_toNumberJs);
/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */ function clamp(number, lower, upper) {
    if (upper === undefined) {
        upper = lower;
        lower = undefined;
    }
    if (upper !== undefined) {
        upper = _toNumberJsDefault.default(upper);
        upper = upper === upper ? upper : 0;
    }
    if (lower !== undefined) {
        lower = _toNumberJsDefault.default(lower);
        lower = lower === lower ? lower : 0;
    }
    return _baseClampJsDefault.default(_toNumberJsDefault.default(number), lower, upper);
}
exports.default = clamp;

},{"./_baseClamp.js":"80F9e","./toNumber.js":"c9pBc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"80F9e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */ function baseClamp(number, lower, upper) {
    if (number === number) {
        if (upper !== undefined) number = number <= upper ? number : upper;
        if (lower !== undefined) number = number >= lower ? number : lower;
    }
    return number;
}
exports.default = baseClamp;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c9pBc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseTrimJs = require("./_baseTrim.js");
var _baseTrimJsDefault = parcelHelpers.interopDefault(_baseTrimJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isSymbolJs = require("./isSymbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') return value;
    if (_isSymbolJsDefault.default(value)) return NAN;
    if (_isObjectJsDefault.default(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = _isObjectJsDefault.default(other) ? other + '' : other;
    }
    if (typeof value != 'string') return value === 0 ? value : +value;
    value = _baseTrimJsDefault.default(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
exports.default = toNumber;

},{"./_baseTrim.js":"bUY4k","./isObject.js":"3yMvk","./isSymbol.js":"4Ri4W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bUY4k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _trimmedEndIndexJs = require("./_trimmedEndIndex.js");
var _trimmedEndIndexJsDefault = parcelHelpers.interopDefault(_trimmedEndIndexJs);
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, _trimmedEndIndexJsDefault.default(string) + 1).replace(reTrimStart, '') : string;
}
exports.default = baseTrim;

},{"./_trimmedEndIndex.js":"9lGl6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9lGl6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index)));
    return index;
}
exports.default = trimmedEndIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3yMvk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
exports.default = isObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4Ri4W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || _isObjectLikeJsDefault.default(value) && _baseGetTagJsDefault.default(value) == symbolTag;
}
exports.default = isSymbol;

},{"./_baseGetTag.js":"1JwEk","./isObjectLike.js":"85060","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1JwEk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
var _getRawTagJs = require("./_getRawTag.js");
var _getRawTagJsDefault = parcelHelpers.interopDefault(_getRawTagJs);
var _objectToStringJs = require("./_objectToString.js");
var _objectToStringJsDefault = parcelHelpers.interopDefault(_objectToStringJs);
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = _symbolJsDefault.default ? _symbolJsDefault.default.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? _getRawTagJsDefault.default(value) : _objectToStringJsDefault.default(value);
}
exports.default = baseGetTag;

},{"./_Symbol.js":"hpdhb","./_getRawTag.js":"4rNUq","./_objectToString.js":"21TGX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hpdhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Built-in value references. */ var Symbol = _rootJsDefault.default.Symbol;
exports.default = Symbol;

},{"./_root.js":"3otD7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3otD7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _freeGlobalJs = require("./_freeGlobal.js");
var _freeGlobalJsDefault = parcelHelpers.interopDefault(_freeGlobalJs);
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = _freeGlobalJsDefault.default || freeSelf || Function('return this')();
exports.default = root;

},{"./_freeGlobal.js":"59W0Z","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"59W0Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
exports.default = freeGlobal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4rNUq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = _symbolJsDefault.default ? _symbolJsDefault.default.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
exports.default = getRawTag;

},{"./_Symbol.js":"hpdhb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"21TGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
exports.default = objectToString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"85060":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
exports.default = isObjectLike;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j6tdl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Options", ()=>Options1
);
var _tslib = require("tslib");
var _ = require("./decorators/");
var Options1 = function() {
    function Options(config) {
        var _this = this;
        if (config === void 0) config = {
        };
        /**
         * Momentum reduction damping factor, a float value between `(0, 1)`.
         * The lower the value is, the more smooth the scrolling will be
         * (also the more paint frames).
         */ this.damping = 0.1;
        /**
         * Minimal size for scrollbar thumbs.
         */ this.thumbMinSize = 20;
        /**
         * Render every frame in integer pixel values
         * set to `true` to improve scrolling performance.
         */ this.renderByPixels = true;
        /**
         * Keep scrollbar tracks visible
         */ this.alwaysShowTracks = false;
        /**
         * Set to `true` to allow outer scrollbars continue scrolling
         * when current scrollbar reaches edge.
         */ this.continuousScrolling = true;
        /**
         * Delegate wheel events and touch events to the given element.
         * By default, the container element is used.
         * This option will be useful for dealing with fixed elements.
         */ this.delegateTo = null;
        /**
         * Options for plugins. Syntax:
         *   plugins[pluginName] = pluginOptions: any
         */ this.plugins = {
        };
        Object.keys(config).forEach(function(prop) {
            _this[prop] = config[prop];
        });
    }
    Object.defineProperty(Options.prototype, "wheelEventTarget", {
        get: function() {
            return this.delegateTo;
        },
        set: function(el) {
            console.warn('[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.');
            this.delegateTo = el;
        },
        enumerable: true,
        configurable: true
    });
    _tslib.__decorate([
        _.range(0, 1)
    ], Options.prototype, "damping", void 0);
    _tslib.__decorate([
        _.range(0, Infinity)
    ], Options.prototype, "thumbMinSize", void 0);
    _tslib.__decorate([
        _.boolean
    ], Options.prototype, "renderByPixels", void 0);
    _tslib.__decorate([
        _.boolean
    ], Options.prototype, "alwaysShowTracks", void 0);
    _tslib.__decorate([
        _.boolean
    ], Options.prototype, "continuousScrolling", void 0);
    return Options;
}();

},{"tslib":"j55WF","./decorators/":"kOXT5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kOXT5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _range = require("./range");
parcelHelpers.exportAll(_range, exports);
var _boolean = require("./boolean");
parcelHelpers.exportAll(_boolean, exports);
var _debounce = require("./debounce");
parcelHelpers.exportAll(_debounce, exports);

},{"./range":"4EobA","./boolean":"88Fjf","./debounce":"6b7zy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4EobA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range
);
var _clamp = require("lodash-es/clamp");
var _clampDefault = parcelHelpers.interopDefault(_clamp);
function range(min, max) {
    if (min === void 0) min = -Infinity;
    if (max === void 0) max = Infinity;
    return function(proto, key) {
        var alias = "_" + key;
        Object.defineProperty(proto, key, {
            get: function() {
                return this[alias];
            },
            set: function(val) {
                Object.defineProperty(this, alias, {
                    value: _clampDefault.default(val, min, max),
                    enumerable: false,
                    writable: true,
                    configurable: true
                });
            },
            enumerable: true,
            configurable: true
        });
    };
}

},{"lodash-es/clamp":"7c7oI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"88Fjf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boolean", ()=>boolean
);
function boolean(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
        get: function() {
            return this[alias];
        },
        set: function(val) {
            Object.defineProperty(this, alias, {
                value: !!val,
                enumerable: false,
                writable: true,
                configurable: true
            });
        },
        enumerable: true,
        configurable: true
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6b7zy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce
);
var _tslib = require("tslib");
var _debounce = require("lodash-es/debounce");
var _debounceDefault = parcelHelpers.interopDefault(_debounce);
function debounce() {
    var options = [];
    for(var _i = 0; _i < arguments.length; _i++)options[_i] = arguments[_i];
    return function(_proto, key, descriptor) {
        var fn = descriptor.value;
        return {
            get: function() {
                if (!this.hasOwnProperty(key)) Object.defineProperty(this, key, {
                    value: _debounceDefault.default.apply(void 0, _tslib.__spreadArrays([
                        fn
                    ], options))
                });
                return this[key];
            }
        };
    };
}

},{"tslib":"j55WF","lodash-es/debounce":"hpr7C","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hpr7C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _nowJs = require("./now.js");
var _nowJsDefault = parcelHelpers.interopDefault(_nowJs);
var _toNumberJs = require("./toNumber.js");
var _toNumberJsDefault = parcelHelpers.interopDefault(_toNumberJs);
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    wait = _toNumberJsDefault.default(wait) || 0;
    if (_isObjectJsDefault.default(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(_toNumberJsDefault.default(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = _nowJsDefault.default();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(_nowJsDefault.default());
    }
    function debounced() {
        var time = _nowJsDefault.default(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
exports.default = debounce;

},{"./isObject.js":"3yMvk","./now.js":"hbH7j","./toNumber.js":"c9pBc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hbH7j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return _rootJsDefault.default.Date.now();
};
exports.default = now;

},{"./_root.js":"3otD7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bJzPm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventHub = require("./event-hub");
parcelHelpers.exportAll(_eventHub, exports);
var _getPointerData = require("./get-pointer-data");
parcelHelpers.exportAll(_getPointerData, exports);
var _getPosition = require("./get-position");
parcelHelpers.exportAll(_getPosition, exports);
var _isOneOf = require("./is-one-of");
parcelHelpers.exportAll(_isOneOf, exports);
var _setStyle = require("./set-style");
parcelHelpers.exportAll(_setStyle, exports);
var _touchRecord = require("./touch-record");
parcelHelpers.exportAll(_touchRecord, exports);

},{"./event-hub":"4eS8D","./get-pointer-data":"bJuuM","./get-position":"chcpa","./is-one-of":"8ohRq","./set-style":"jNcr4","./touch-record":"q6bdW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4eS8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventScope", ()=>eventScope
);
parcelHelpers.export(exports, "clearEventsOn", ()=>clearEventsOn
);
var eventListenerOptions;
var eventMap = new WeakMap();
function getOptions() {
    if (eventListenerOptions !== undefined) return eventListenerOptions;
    var supportPassiveEvent = false;
    try {
        var noop = function() {
        };
        var options = Object.defineProperty({
        }, 'passive', {
            get: function() {
                supportPassiveEvent = true;
            }
        });
        window.addEventListener('testPassive', noop, options);
        window.removeEventListener('testPassive', noop, options);
    } catch (e) {
    }
    eventListenerOptions = supportPassiveEvent ? {
        passive: false
    } : false;
    return eventListenerOptions;
}
function eventScope(scrollbar) {
    var configs = eventMap.get(scrollbar) || [];
    eventMap.set(scrollbar, configs);
    return function addEvent(elem, events, fn) {
        function handler(event) {
            // ignore default prevented events
            if (event.defaultPrevented) return;
            fn(event);
        }
        events.split(/\s+/g).forEach(function(eventName) {
            configs.push({
                elem: elem,
                eventName: eventName,
                handler: handler
            });
            elem.addEventListener(eventName, handler, getOptions());
        });
    };
}
function clearEventsOn(scrollbar) {
    var configs = eventMap.get(scrollbar);
    if (!configs) return;
    configs.forEach(function(_a) {
        var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
        elem.removeEventListener(eventName, handler, getOptions());
    });
    eventMap.delete(scrollbar);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bJuuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get pointer/touch data
 */ parcelHelpers.export(exports, "getPointerData", ()=>getPointerData
);
function getPointerData(evt) {
    // if is touch event, return last item in touchList
    // else return original event
    return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"chcpa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get pointer/finger position
 */ parcelHelpers.export(exports, "getPosition", ()=>getPosition
);
var _getPointerData = require("./get-pointer-data");
function getPosition(evt) {
    var data = _getPointerData.getPointerData(evt);
    return {
        x: data.clientX,
        y: data.clientY
    };
}

},{"./get-pointer-data":"bJuuM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8ohRq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Check if `a` is one of `[...b]`
 */ parcelHelpers.export(exports, "isOneOf", ()=>isOneOf
);
function isOneOf(a, b) {
    if (b === void 0) b = [];
    return b.some(function(v) {
        return a === v;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jNcr4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setStyle", ()=>setStyle
);
var VENDOR_PREFIX = [
    'webkit',
    'moz',
    'ms',
    'o', 
];
var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join('|') + ")-)");
function autoPrefix(styles) {
    var res = {
    };
    Object.keys(styles).forEach(function(prop) {
        if (!RE.test(prop)) {
            res[prop] = styles[prop];
            return;
        }
        var val = styles[prop];
        prop = prop.replace(/^-/, '');
        res[prop] = val;
        VENDOR_PREFIX.forEach(function(prefix) {
            res["-" + prefix + "-" + prop] = val;
        });
    });
    return res;
}
function setStyle(elem, styles) {
    styles = autoPrefix(styles);
    Object.keys(styles).forEach(function(prop) {
        var cssProp = prop.replace(/^-/, '').replace(/-([a-z])/g, function(_, $1) {
            return $1.toUpperCase();
        });
        elem.style[cssProp] = styles[prop];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"q6bdW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tracker", ()=>Tracker1
);
parcelHelpers.export(exports, "TouchRecord", ()=>TouchRecord1
);
var _tslib = require("tslib");
var _getPosition = require("./get-position");
var Tracker1 = function() {
    function Tracker(touch) {
        this.velocityMultiplier = /Android/.test(navigator.userAgent) ? window.devicePixelRatio : 1;
        this.updateTime = Date.now();
        this.delta = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.lastPosition = _getPosition.getPosition(touch);
    }
    Tracker.prototype.update = function(touch) {
        var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
        var now = Date.now();
        var position = _getPosition.getPosition(touch);
        var delta = {
            x: -(position.x - lastPosition.x),
            y: -(position.y - lastPosition.y)
        };
        var duration = now - updateTime || 16.7;
        var vx = delta.x / duration * 16.7;
        var vy = delta.y / duration * 16.7;
        velocity.x = vx * this.velocityMultiplier;
        velocity.y = vy * this.velocityMultiplier;
        this.delta = delta;
        this.updateTime = now;
        this.lastPosition = position;
    };
    return Tracker;
}();
var TouchRecord1 = function() {
    function TouchRecord() {
        this._touchList = {
        };
    }
    Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
        get: function() {
            return {
                x: 0,
                y: 0
            };
        },
        enumerable: true,
        configurable: true
    });
    TouchRecord.prototype.isActive = function() {
        return this._activeTouchID !== undefined;
    };
    TouchRecord.prototype.getDelta = function() {
        var tracker = this._getActiveTracker();
        if (!tracker) return this._primitiveValue;
        return _tslib.__assign({
        }, tracker.delta);
    };
    TouchRecord.prototype.getVelocity = function() {
        var tracker = this._getActiveTracker();
        if (!tracker) return this._primitiveValue;
        return _tslib.__assign({
        }, tracker.velocity);
    };
    TouchRecord.prototype.getEasingDistance = function(damping) {
        var deAcceleration = 1 - damping;
        var distance = {
            x: 0,
            y: 0
        };
        var vel = this.getVelocity();
        Object.keys(vel).forEach(function(dir) {
            // ignore small velocity
            var v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
            while(v !== 0){
                distance[dir] += v;
                v = v * deAcceleration | 0;
            }
        });
        return distance;
    };
    TouchRecord.prototype.track = function(evt) {
        var _this = this;
        var targetTouches = evt.targetTouches;
        Array.from(targetTouches).forEach(function(touch) {
            _this._add(touch);
        });
        return this._touchList;
    };
    TouchRecord.prototype.update = function(evt) {
        var _this = this;
        var touches = evt.touches, changedTouches = evt.changedTouches;
        Array.from(touches).forEach(function(touch) {
            _this._renew(touch);
        });
        this._setActiveID(changedTouches);
        return this._touchList;
    };
    TouchRecord.prototype.release = function(evt) {
        var _this = this;
        delete this._activeTouchID;
        Array.from(evt.changedTouches).forEach(function(touch) {
            _this._delete(touch);
        });
    };
    TouchRecord.prototype._add = function(touch) {
        if (this._has(touch)) return;
        var tracker = new Tracker1(touch);
        this._touchList[touch.identifier] = tracker;
    };
    TouchRecord.prototype._renew = function(touch) {
        if (!this._has(touch)) return;
        var tracker = this._touchList[touch.identifier];
        tracker.update(touch);
    };
    TouchRecord.prototype._delete = function(touch) {
        delete this._touchList[touch.identifier];
    };
    TouchRecord.prototype._has = function(touch) {
        return this._touchList.hasOwnProperty(touch.identifier);
    };
    TouchRecord.prototype._setActiveID = function(touches) {
        this._activeTouchID = touches[touches.length - 1].identifier;
    };
    TouchRecord.prototype._getActiveTracker = function() {
        var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
        return _touchList[_activeTouchID];
    };
    return TouchRecord;
}();

},{"tslib":"j55WF","./get-position":"chcpa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hDVPW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrackController", ()=>TrackController1
);
var _tslib = require("tslib");
var _track = require("./track");
var _direction = require("./direction");
var _ = require("../decorators/");
var TrackController1 = function() {
    function TrackController(_scrollbar) {
        this._scrollbar = _scrollbar;
        var thumbMinSize = _scrollbar.options.thumbMinSize;
        this.xAxis = new _track.ScrollbarTrack(_direction.TrackDirection.X, thumbMinSize);
        this.yAxis = new _track.ScrollbarTrack(_direction.TrackDirection.Y, thumbMinSize);
        this.xAxis.attachTo(_scrollbar.containerEl);
        this.yAxis.attachTo(_scrollbar.containerEl);
        if (_scrollbar.options.alwaysShowTracks) {
            this.xAxis.show();
            this.yAxis.show();
        }
    }
    /**
     * Updates track appearance
     */ TrackController.prototype.update = function() {
        var _a = this._scrollbar, size = _a.size, offset = _a.offset;
        this.xAxis.update(offset.x, size.container.width, size.content.width);
        this.yAxis.update(offset.y, size.container.height, size.content.height);
    };
    /**
     * Automatically hide tracks when scrollbar is in idle state
     */ TrackController.prototype.autoHideOnIdle = function() {
        if (this._scrollbar.options.alwaysShowTracks) return;
        this.xAxis.hide();
        this.yAxis.hide();
    };
    _tslib.__decorate([
        _.debounce(300)
    ], TrackController.prototype, "autoHideOnIdle", null);
    return TrackController;
}();

},{"tslib":"j55WF","./track":"y5Ixz","./direction":"7HOge","../decorators/":"kOXT5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"y5Ixz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarTrack", ()=>ScrollbarTrack1
);
var _thumb = require("./thumb");
var _ = require("../utils/");
var ScrollbarTrack1 = function() {
    function ScrollbarTrack(direction, thumbMinSize) {
        if (thumbMinSize === void 0) thumbMinSize = 0;
        /**
         * Track element
         */ this.element = document.createElement('div');
        this._isShown = false;
        this.element.className = "scrollbar-track scrollbar-track-" + direction;
        this.thumb = new _thumb.ScrollbarThumb(direction, thumbMinSize);
        this.thumb.attachTo(this.element);
    }
    /**
     * Attach to scrollbar container element
     *
     * @param scrollbarContainer Scrollbar container element
     */ ScrollbarTrack.prototype.attachTo = function(scrollbarContainer) {
        scrollbarContainer.appendChild(this.element);
    };
    /**
     * Show track immediately
     */ ScrollbarTrack.prototype.show = function() {
        if (this._isShown) return;
        this._isShown = true;
        this.element.classList.add('show');
    };
    /**
     * Hide track immediately
     */ ScrollbarTrack.prototype.hide = function() {
        if (!this._isShown) return;
        this._isShown = false;
        this.element.classList.remove('show');
    };
    ScrollbarTrack.prototype.update = function(scrollOffset, containerSize, pageSize) {
        _.setStyle(this.element, {
            display: pageSize <= containerSize ? 'none' : 'block'
        });
        this.thumb.update(scrollOffset, containerSize, pageSize);
    };
    return ScrollbarTrack;
}();

},{"./thumb":"kBi6Y","../utils/":"bJzPm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kBi6Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarThumb", ()=>ScrollbarThumb1
);
var _direction1 = require("./direction");
var _ = require("../utils/");
var ScrollbarThumb1 = function() {
    function ScrollbarThumb(_direction, _minSize) {
        if (_minSize === void 0) _minSize = 0;
        this._direction = _direction;
        this._minSize = _minSize;
        /**
         * Thumb element
         */ this.element = document.createElement('div');
        /**
         * Display size of the thumb
         * will always be greater than `scrollbar.options.thumbMinSize`
         */ this.displaySize = 0;
        /**
         * Actual size of the thumb
         */ this.realSize = 0;
        /**
         * Thumb offset to the top
         */ this.offset = 0;
        this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
    }
    /**
     * Attach to track element
     *
     * @param trackEl Track element
     */ ScrollbarThumb.prototype.attachTo = function(trackEl) {
        trackEl.appendChild(this.element);
    };
    ScrollbarThumb.prototype.update = function(scrollOffset, containerSize, pageSize) {
        // calculate thumb size
        // pageSize > containerSize -> scrollable
        this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
        this.displaySize = Math.max(this.realSize, this._minSize);
        // calculate thumb offset
        this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
        _.setStyle(this.element, this._getStyle());
    };
    ScrollbarThumb.prototype._getStyle = function() {
        switch(this._direction){
            case _direction1.TrackDirection.X:
                return {
                    width: this.displaySize + "px",
                    '-transform': "translate3d(" + this.offset + "px, 0, 0)"
                };
            case _direction1.TrackDirection.Y:
                return {
                    height: this.displaySize + "px",
                    '-transform': "translate3d(0, " + this.offset + "px, 0)"
                };
            default:
                return null;
        }
    };
    return ScrollbarThumb;
}();

},{"./direction":"7HOge","../utils/":"bJzPm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7HOge":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrackDirection", ()=>TrackDirection1
);
var TrackDirection1;
(function(TrackDirection) {
    TrackDirection["X"] = "x";
    TrackDirection["Y"] = "y";
})(TrackDirection1 || (TrackDirection1 = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"awVr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getSize = require("./get-size");
parcelHelpers.exportAll(_getSize, exports);
var _isVisible = require("./is-visible");
parcelHelpers.exportAll(_isVisible, exports);
var _update = require("./update");
parcelHelpers.exportAll(_update, exports);

},{"./get-size":"1Q6yr","./is-visible":"i1QKY","./update":"3B2SR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1Q6yr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSize", ()=>getSize
);
function getSize(scrollbar) {
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var containerStyles = getComputedStyle(containerEl);
    var paddings = [
        'paddingTop',
        'paddingBottom',
        'paddingLeft',
        'paddingRight', 
    ].map(function(prop) {
        return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
    });
    var verticalPadding = paddings[0] + paddings[1];
    var horizontalPadding = paddings[2] + paddings[3];
    return {
        container: {
            // requires `overflow: hidden`
            width: containerEl.clientWidth,
            height: containerEl.clientHeight
        },
        content: {
            // border width and paddings should be included
            width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
            height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i1QKY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVisible", ()=>isVisible
);
function isVisible(scrollbar, elem) {
    var bounding = scrollbar.bounding;
    var targetBounding = elem.getBoundingClientRect();
    // check overlapping
    var top = Math.max(bounding.top, targetBounding.top);
    var left = Math.max(bounding.left, targetBounding.left);
    var right = Math.min(bounding.right, targetBounding.right);
    var bottom = Math.min(bounding.bottom, targetBounding.bottom);
    return top < bottom && left < right;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3B2SR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "update", ()=>update
);
function update(scrollbar) {
    var newSize = scrollbar.getSize();
    var limit = {
        x: Math.max(newSize.content.width - newSize.container.width, 0),
        y: Math.max(newSize.content.height - newSize.container.height, 0)
    };
    // metrics
    var containerBounding = scrollbar.containerEl.getBoundingClientRect();
    var bounding = {
        top: Math.max(containerBounding.top, 0),
        right: Math.min(containerBounding.right, window.innerWidth),
        bottom: Math.min(containerBounding.bottom, window.innerHeight),
        left: Math.max(containerBounding.left, 0)
    };
    // assign props
    scrollbar.size = newSize;
    scrollbar.limit = limit;
    scrollbar.bounding = bounding;
    // update tracks
    scrollbar.track.update();
    // re-positioning
    scrollbar.setPosition();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jwCHG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPosition = require("./set-position");
parcelHelpers.exportAll(_setPosition, exports);
var _scrollTo = require("./scroll-to");
parcelHelpers.exportAll(_scrollTo, exports);
var _scrollIntoView = require("./scroll-into-view");
parcelHelpers.exportAll(_scrollIntoView, exports);

},{"./set-position":"22qXi","./scroll-to":"du2ol","./scroll-into-view":"gIE7k","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"22qXi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setPosition", ()=>setPosition
);
var _tslib = require("tslib");
var _clamp = require("lodash-es/clamp");
var _clampDefault = parcelHelpers.interopDefault(_clamp);
var _ = require("../utils/");
function setPosition(scrollbar, x, y) {
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
    if (options.renderByPixels) {
        x = Math.round(x);
        y = Math.round(y);
    }
    x = _clampDefault.default(x, 0, limit.x);
    y = _clampDefault.default(y, 0, limit.y);
    // position changed -> show track for 300ms
    if (x !== offset.x) track.xAxis.show();
    if (y !== offset.y) track.yAxis.show();
    if (!options.alwaysShowTracks) track.autoHideOnIdle();
    if (x === offset.x && y === offset.y) return null;
    offset.x = x;
    offset.y = y;
    _.setStyle(contentEl, {
        '-transform': "translate3d(" + -x + "px, " + -y + "px, 0)"
    });
    track.update();
    return {
        offset: _tslib.__assign({
        }, offset),
        limit: _tslib.__assign({
        }, limit)
    };
}

},{"tslib":"j55WF","lodash-es/clamp":"7c7oI","../utils/":"bJzPm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"du2ol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollTo", ()=>scrollTo
);
var _clamp = require("lodash-es/clamp");
var _clampDefault = parcelHelpers.interopDefault(_clamp);
var animationIDStorage = new WeakMap();
function scrollTo(scrollbar, x, y, duration, _a) {
    if (duration === void 0) duration = 0;
    var _b = _a === void 0 ? {
    } : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }
    var startX = offset.x;
    var startY = offset.y;
    var disX = _clampDefault.default(x, 0, limit.x) - startX;
    var disY = _clampDefault.default(y, 0, limit.y) - startY;
    var start = Date.now();
    function scroll() {
        var elapse = Date.now() - start;
        var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
        scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
        if (elapse >= duration) {
            if (typeof callback === 'function') callback.call(scrollbar);
        } else {
            var animationID = requestAnimationFrame(scroll);
            animationIDStorage.set(scrollbar, animationID);
        }
    }
    cancelAnimationFrame(animationIDStorage.get(scrollbar));
    scroll();
}
/**
 * easeOutCubic
 */ function defaultEasing(t) {
    return Math.pow(t - 1, 3) + 1;
}

},{"lodash-es/clamp":"7c7oI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gIE7k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollIntoView", ()=>scrollIntoView
);
var _clamp = require("lodash-es/clamp");
var _clampDefault = parcelHelpers.interopDefault(_clamp);
function scrollIntoView(scrollbar, elem, _a) {
    var _b = _a === void 0 ? {
    } : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
    var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
    if (!elem || !containerEl.contains(elem)) return;
    var targetBounding = elem.getBoundingClientRect();
    if (onlyScrollIfNeeded && scrollbar.isVisible(elem)) return;
    var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
    scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, _clampDefault.default(delta, -offset.y, limit.y - offset.y));
}

},{"lodash-es/clamp":"7c7oI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ccfnQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarPlugin", ()=>ScrollbarPlugin1
);
parcelHelpers.export(exports, "globalPlugins", ()=>globalPlugins
);
parcelHelpers.export(exports, "addPlugins", ()=>addPlugins
);
parcelHelpers.export(exports, "initPlugins", ()=>initPlugins
);
var _tslib = require("tslib");
var ScrollbarPlugin1 = function() {
    function ScrollbarPlugin(scrollbar, options) {
        var _newTarget = this.constructor;
        this.scrollbar = scrollbar;
        this.name = _newTarget.pluginName;
        this.options = _tslib.__assign(_tslib.__assign({
        }, _newTarget.defaultOptions), options);
    }
    ScrollbarPlugin.prototype.onInit = function() {
    };
    ScrollbarPlugin.prototype.onDestroy = function() {
    };
    ScrollbarPlugin.prototype.onUpdate = function() {
    };
    ScrollbarPlugin.prototype.onRender = function(_remainMomentum) {
    };
    ScrollbarPlugin.prototype.transformDelta = function(delta, _evt) {
        return _tslib.__assign({
        }, delta);
    };
    ScrollbarPlugin.pluginName = '';
    ScrollbarPlugin.defaultOptions = {
    };
    return ScrollbarPlugin;
}();
var globalPlugins = {
    order: new Set(),
    constructors: {
    }
};
function addPlugins() {
    var Plugins = [];
    for(var _i = 0; _i < arguments.length; _i++)Plugins[_i] = arguments[_i];
    Plugins.forEach(function(P) {
        var pluginName = P.pluginName;
        if (!pluginName) throw new TypeError("plugin name is required");
        globalPlugins.order.add(pluginName);
        globalPlugins.constructors[pluginName] = P;
    });
}
function initPlugins(scrollbar, options) {
    return Array.from(globalPlugins.order).filter(function(pluginName) {
        return options[pluginName] !== false;
    }).map(function(pluginName) {
        var Plugin = globalPlugins.constructors[pluginName];
        var instance = new Plugin(scrollbar, options[pluginName]);
        // bind plugin options to `scrollbar.options`
        options[pluginName] = instance.options;
        return instance;
    });
}

},{"tslib":"j55WF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iCOOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _keyboard = require("./keyboard");
parcelHelpers.exportAll(_keyboard, exports);
var _mouse = require("./mouse");
parcelHelpers.exportAll(_mouse, exports);
var _resize = require("./resize");
parcelHelpers.exportAll(_resize, exports);
var _select = require("./select");
parcelHelpers.exportAll(_select, exports);
var _touch = require("./touch");
parcelHelpers.exportAll(_touch, exports);
var _wheel = require("./wheel");
parcelHelpers.exportAll(_wheel, exports);

},{"./keyboard":"ihQc6","./mouse":"hbnq9","./resize":"knhbp","./select":"8To74","./touch":"lk41U","./wheel":"7PSVM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ihQc6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keyboardHandler", ()=>keyboardHandler
);
var _ = require("../utils/");
var KEY_CODE1;
(function(KEY_CODE) {
    KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
    KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
    KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEY_CODE[KEY_CODE["END"] = 35] = "END";
    KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
    KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
    KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
    KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
    KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})(KEY_CODE1 || (KEY_CODE1 = {
}));
function keyboardHandler(scrollbar) {
    var addEvent = _.eventScope(scrollbar);
    var container = scrollbar.containerEl;
    addEvent(container, 'keydown', function(evt) {
        var activeElement = document.activeElement;
        if (activeElement !== container && !container.contains(activeElement)) return;
        if (isEditable(activeElement)) return;
        var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
        if (!delta) return;
        var x = delta[0], y = delta[1];
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll) evt.preventDefault();
            else {
                scrollbar.containerEl.blur();
                if (scrollbar.parent) scrollbar.parent.containerEl.focus();
            }
        });
    });
}
function getKeyDelta(scrollbar, keyCode) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    switch(keyCode){
        case KEY_CODE1.TAB:
            return handleTabKey(scrollbar);
        case KEY_CODE1.SPACE:
            return [
                0,
                200
            ];
        case KEY_CODE1.PAGE_UP:
            return [
                0,
                -size.container.height + 40
            ];
        case KEY_CODE1.PAGE_DOWN:
            return [
                0,
                size.container.height - 40
            ];
        case KEY_CODE1.END:
            return [
                0,
                limit.y - offset.y
            ];
        case KEY_CODE1.HOME:
            return [
                0,
                -offset.y
            ];
        case KEY_CODE1.LEFT:
            return [
                -40,
                0
            ];
        case KEY_CODE1.UP:
            return [
                0,
                -40
            ];
        case KEY_CODE1.RIGHT:
            return [
                40,
                0
            ];
        case KEY_CODE1.DOWN:
            return [
                0,
                40
            ];
        default:
            return null;
    }
}
function handleTabKey(scrollbar) {
    // handle in next frame
    requestAnimationFrame(function() {
        scrollbar.scrollIntoView(document.activeElement, {
            offsetTop: scrollbar.size.container.height / 2,
            onlyScrollIfNeeded: true
        });
    });
}
function isEditable(elem) {
    if (elem.tagName === 'INPUT' || elem.tagName === 'SELECT' || elem.tagName === 'TEXTAREA' || elem.isContentEditable) return !elem.disabled;
    return false;
}

},{"../utils/":"bJzPm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hbnq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mouseHandler", ()=>mouseHandler
);
var _clamp = require("lodash-es/clamp");
var _clampDefault = parcelHelpers.interopDefault(_clamp);
var _ = require("../utils/");
var Direction1;
(function(Direction) {
    Direction[Direction["X"] = 0] = "X";
    Direction[Direction["Y"] = 1] = "Y";
})(Direction1 || (Direction1 = {
}));
function mouseHandler(scrollbar) {
    var addEvent = _.eventScope(scrollbar);
    var container = scrollbar.containerEl;
    var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
    function calcMomentum(direction, clickPosition) {
        var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
        if (direction === Direction1.X) {
            var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
            return _clampDefault.default(clickPosition / totalWidth * size.content.width, 0, limit.x) - offset.x;
        }
        if (direction === Direction1.Y) {
            var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
            return _clampDefault.default(clickPosition / totalHeight * size.content.height, 0, limit.y) - offset.y;
        }
        return 0;
    }
    function getTrackDirection(elem) {
        if (_.isOneOf(elem, [
            xAxis.element,
            xAxis.thumb.element
        ])) return Direction1.X;
        if (_.isOneOf(elem, [
            yAxis.element,
            yAxis.thumb.element
        ])) return Direction1.Y;
        return void 0;
    }
    var isMouseDown;
    var isMouseMoving;
    var startOffsetToThumb;
    var trackDirection;
    var containerRect;
    addEvent(container, 'click', function(evt) {
        if (isMouseMoving || !_.isOneOf(evt.target, [
            xAxis.element,
            yAxis.element
        ])) return;
        var track = evt.target;
        var direction = getTrackDirection(track);
        var rect = track.getBoundingClientRect();
        var clickPos = _.getPosition(evt);
        if (direction === Direction1.X) {
            var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(calcMomentum(direction, offsetOnTrack), 0);
        }
        if (direction === Direction1.Y) {
            var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(0, calcMomentum(direction, offsetOnTrack));
        }
    });
    addEvent(container, 'mousedown', function(evt) {
        if (!_.isOneOf(evt.target, [
            xAxis.thumb.element,
            yAxis.thumb.element
        ])) return;
        isMouseDown = true;
        var thumb = evt.target;
        var cursorPos = _.getPosition(evt);
        var thumbRect = thumb.getBoundingClientRect();
        trackDirection = getTrackDirection(thumb);
        // pointer offset to thumb
        startOffsetToThumb = {
            x: cursorPos.x - thumbRect.left,
            y: cursorPos.y - thumbRect.top
        };
        // container bounding rectangle
        containerRect = container.getBoundingClientRect();
        // prevent selection, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/48
        _.setStyle(scrollbar.containerEl, {
            '-user-select': 'none'
        });
    });
    addEvent(window, 'mousemove', function(evt) {
        if (!isMouseDown) return;
        isMouseMoving = true;
        var cursorPos = _.getPosition(evt);
        if (trackDirection === Direction1.X) {
            // get percentage of pointer position in track
            // then tranform to px
            // don't need easing
            var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
            scrollbar.setMomentum(calcMomentum(trackDirection, offsetOnTrack), 0);
        }
        if (trackDirection === Direction1.Y) {
            var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
            scrollbar.setMomentum(0, calcMomentum(trackDirection, offsetOnTrack));
        }
    });
    addEvent(window, 'mouseup blur', function() {
        isMouseDown = isMouseMoving = false;
        _.setStyle(scrollbar.containerEl, {
            '-user-select': ''
        });
    });
}

},{"lodash-es/clamp":"7c7oI","../utils/":"bJzPm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"knhbp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeHandler", ()=>resizeHandler
);
var _debounce = require("lodash-es/debounce");
var _debounceDefault = parcelHelpers.interopDefault(_debounce);
var _ = require("../utils/");
function resizeHandler(scrollbar) {
    var addEvent = _.eventScope(scrollbar);
    addEvent(window, 'resize', _debounceDefault.default(scrollbar.update.bind(scrollbar), 300));
}

},{"lodash-es/debounce":"hpr7C","../utils/":"bJzPm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8To74":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectHandler", ()=>selectHandler
);
var _clamp = require("lodash-es/clamp");
var _clampDefault = parcelHelpers.interopDefault(_clamp);
var _ = require("../utils/");
function selectHandler(scrollbar) {
    var addEvent = _.eventScope(scrollbar);
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var isSelected = false;
    var animationID;
    function scroll(_a) {
        var x = _a.x, y = _a.y;
        if (!x && !y) return;
        var offset = scrollbar.offset, limit = scrollbar.limit;
        // DISALLOW delta transformation
        scrollbar.setMomentum(_clampDefault.default(offset.x + x, 0, limit.x) - offset.x, _clampDefault.default(offset.y + y, 0, limit.y) - offset.y);
        animationID = requestAnimationFrame(function() {
            scroll({
                x: x,
                y: y
            });
        });
    }
    addEvent(window, 'mousemove', function(evt) {
        if (!isSelected) return;
        cancelAnimationFrame(animationID);
        var dir = calcMomentum(scrollbar, evt);
        scroll(dir);
    });
    addEvent(contentEl, 'selectstart', function(evt) {
        evt.stopPropagation();
        cancelAnimationFrame(animationID);
        isSelected = true;
    });
    addEvent(window, 'mouseup blur', function() {
        cancelAnimationFrame(animationID);
        isSelected = false;
    });
    // patch for touch devices
    addEvent(containerEl, 'scroll', function(evt) {
        evt.preventDefault();
        containerEl.scrollTop = containerEl.scrollLeft = 0;
    });
}
function calcMomentum(scrollbar, evt) {
    var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var _b = _.getPosition(evt), x = _b.x, y = _b.y;
    var res = {
        x: 0,
        y: 0
    };
    var padding = 20;
    if (x === 0 && y === 0) return res;
    if (x > right - padding) res.x = x - right + padding;
    else if (x < left + padding) res.x = x - left - padding;
    if (y > bottom - padding) res.y = y - bottom + padding;
    else if (y < top + padding) res.y = y - top - padding;
    res.x *= 2;
    res.y *= 2;
    return res;
}

},{"lodash-es/clamp":"7c7oI","../utils/":"bJzPm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lk41U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "touchHandler", ()=>touchHandler
);
var _ = require("../utils/");
var activeScrollbar;
function touchHandler(scrollbar) {
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var touchRecord = new _.TouchRecord();
    var addEvent = _.eventScope(scrollbar);
    var damping;
    var pointerCount = 0;
    addEvent(target, 'touchstart', function(evt) {
        // start records
        touchRecord.track(evt);
        // stop scrolling
        scrollbar.setMomentum(0, 0);
        // save damping
        if (pointerCount === 0) {
            damping = scrollbar.options.damping;
            scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
        }
        pointerCount++;
    });
    addEvent(target, 'touchmove', function(evt) {
        if (activeScrollbar && activeScrollbar !== scrollbar) return;
        touchRecord.update(evt);
        var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll && evt.cancelable) {
                evt.preventDefault();
                activeScrollbar = scrollbar;
            }
        });
    });
    addEvent(target, 'touchcancel touchend', function(evt) {
        var delta = touchRecord.getEasingDistance(damping);
        scrollbar.addTransformableMomentum(delta.x, delta.y, evt);
        pointerCount--;
        // restore damping
        if (pointerCount === 0) scrollbar.options.damping = damping;
        touchRecord.release(evt);
        activeScrollbar = null;
    });
}

},{"../utils/":"bJzPm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7PSVM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wheelHandler", ()=>wheelHandler
);
var _ = require("../utils/");
function wheelHandler(scrollbar) {
    var addEvent = _.eventScope(scrollbar);
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var eventName = 'onwheel' in window || document.implementation.hasFeature('Events.wheel', '3.0') ? 'wheel' : 'mousewheel';
    addEvent(target, eventName, function(evt) {
        var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll) evt.preventDefault();
        });
    });
}
// Normalizing wheel delta
var DELTA_SCALE = {
    STANDARD: 1,
    OTHERS: -3
};
var DELTA_MODE = [
    1,
    28,
    500
];
var getDeltaMode = function(mode) {
    return DELTA_MODE[mode] || DELTA_MODE[0];
};
function normalizeDelta(evt) {
    if ('deltaX' in evt) {
        var mode = getDeltaMode(evt.deltaMode);
        return {
            x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
            y: evt.deltaY / DELTA_SCALE.STANDARD * mode
        };
    }
    if ('wheelDeltaX' in evt) return {
        x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
        y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
    };
    // ie with touchpad
    return {
        x: 0,
        y: evt.wheelDelta / DELTA_SCALE.OTHERS
    };
}

},{"../utils/":"bJzPm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kzCOd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachStyle", ()=>attachStyle
);
parcelHelpers.export(exports, "detachStyle", ()=>detachStyle
);
var TRACK_BG = 'rgba(222, 222, 222, .75)';
var THUMB_BG = 'rgba(0, 0, 0, .5)';
// sets content's display type to `flow-root` to suppress margin collapsing
var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var STYLE_ID = 'smooth-scrollbar-style';
var isStyleAttached = false;
function attachStyle() {
    if (isStyleAttached || typeof window === 'undefined') return;
    var styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    styleEl.textContent = SCROLLBAR_STYLE;
    if (document.head) document.head.appendChild(styleEl);
    isStyleAttached = true;
}
function detachStyle() {
    if (!isStyleAttached || typeof window === 'undefined') return;
    var styleEl = document.getElementById(STYLE_ID);
    if (!styleEl || !styleEl.parentNode) return;
    styleEl.parentNode.removeChild(styleEl);
    isStyleAttached = false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fkImz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
var TIMEOUT_MIN = 50;
var TIMEOUT_DEFAULT = 100;
var DURATION_DEFAULT = 300;
var THRESHOLD_DEFAULT = 0.2;
var SNAPSTOP_DEFAULT = false;
var EASING_DEFAULT = easeInOutQuad;
var NOOP = function() {
};
function createScrollSnap(element1, settings, callback1) {
    if (settings === void 0) settings = {
    };
    var onAnimationEnd = typeof callback1 === 'function' ? callback1 : NOOP;
    var listenerElement;
    var target1;
    var animating = false;
    var scrollHandlerTimer;
    var scrollSpeedTimer;
    var scrollStart;
    var speedDeltaX;
    var speedDeltaY;
    var snapLengthUnit;
    var lastScrollValue = {
        x: 0,
        y: 0
    };
    var animationFrame;
    var snapDestinationX = settings.snapDestinationX, snapDestinationY = settings.snapDestinationY;
    if (snapDestinationX && typeof snapDestinationX !== 'string' && typeof snapDestinationX !== 'number') throw new Error("Settings property 'snapDestinationX' is not valid, expected STRING or NUMBER but found " + (typeof snapDestinationX).toUpperCase());
    if (snapDestinationY && typeof snapDestinationY !== 'string' && typeof snapDestinationY !== 'number') throw new Error("Settings property 'snapDestinationY' is not valid, expected STRING or NUMBER but found " + (typeof snapDestinationY).toUpperCase());
    if (settings.timeout && (isNaN(settings.timeout) || typeof settings.timeout === 'boolean')) throw new Error("Optional settings property 'timeout' is not valid, expected NUMBER but found " + (typeof settings.timeout).toUpperCase());
    // any value less then TIMEOUT_MIN may cause weird bahaviour on some devices (especially on mobile with momentum scrolling)
    var timeout = settings.timeout && settings.timeout >= TIMEOUT_MIN ? settings.timeout : TIMEOUT_DEFAULT;
    if (settings.duration && (isNaN(settings.duration) || typeof settings.duration === 'boolean')) throw new Error("Optional settings property 'duration' is not valid, expected NUMBER but found " + (typeof settings.duration).toUpperCase());
    var duration = settings.duration || DURATION_DEFAULT;
    if (settings.threshold && (isNaN(settings.threshold) || typeof settings.threshold === 'boolean')) throw new Error("Optional settings property 'threshold' is not valid, expected NUMBER but found " + (typeof settings.threshold).toUpperCase());
    var threshold = settings.threshold || THRESHOLD_DEFAULT;
    if (settings.easing && typeof settings.easing !== 'function') throw new Error("Optional settings property 'easing' is not valid, expected FUNCTION but found " + (typeof settings.easing).toUpperCase());
    var easing = settings.easing || EASING_DEFAULT;
    if (settings.snapStop && typeof settings.snapStop !== 'boolean') throw new Error("Optional settings property 'snapStop' is not valid, expected BOOLEAN but found " + (typeof settings.snapStop).toUpperCase());
    var snapStop = settings.snapStop || SNAPSTOP_DEFAULT;
    function checkScrollSpeed(value, axis) {
        var clear = function() {
            lastScrollValue[axis] = null;
        };
        var newValue = value;
        var delta;
        if (lastScrollValue[axis] !== null) delta = newValue - lastScrollValue[axis];
        else delta = 0;
        lastScrollValue[axis] = newValue;
        scrollSpeedTimer && clearTimeout(scrollSpeedTimer);
        scrollSpeedTimer = window.setTimeout(clear, 100);
        return delta;
    }
    function bindElement(element) {
        target1 = element;
        listenerElement = element === document.documentElement ? window : element;
        listenerElement.addEventListener('scroll', startAnimation, false);
        snapLengthUnit = parseSnapCoordinatesValue(snapDestinationX, snapDestinationY);
    }
    function unbindElement() {
        listenerElement.removeEventListener('scroll', startAnimation, false);
    }
    function startAnimation() {
        speedDeltaX = checkScrollSpeed(target1.scrollLeft, 'x');
        speedDeltaY = checkScrollSpeed(target1.scrollTop, 'y');
        if (animating || speedDeltaX === 0 && speedDeltaY === 0) return;
        handler(target1);
    }
    /**
     * scroll handler
     * this is the callback for scroll events.
     */ function handler(target) {
        // if currently animating, stop it. this prevents flickering.
        if (animationFrame) clearTimeout(animationFrame);
        // if a previous timeout exists, clear it.
        if (scrollHandlerTimer) // we only want to call a timeout once after scrolling..
        clearTimeout(scrollHandlerTimer);
        else scrollStart = {
            y: target.scrollTop,
            x: target.scrollLeft
        };
        scrollHandlerTimer = window.setTimeout(animationHandler, timeout);
    }
    function animationHandler() {
        // if we don't move a thing, we can ignore the timeout: if we did, there'd be another timeout added for scrollStart+1.
        if (scrollStart.y === target1.scrollTop && scrollStart.x === target1.scrollLeft) // ignore timeout
        return;
        // detect direction of scroll. negative is up, positive is down.
        var direction = {
            y: Math.sign(speedDeltaY),
            x: Math.sign(speedDeltaX)
        };
        // get the next snap-point to snap-to
        var snapPoint = getNextSnapPoint(target1, direction);
        listenerElement.removeEventListener('scroll', startAnimation, false);
        animating = true;
        // smoothly move to the snap point
        smoothScroll(target1, snapPoint, function() {
            // after moving to the snap point, rebind the scroll event handler
            animating = false;
            listenerElement.addEventListener('scroll', startAnimation, false);
            onAnimationEnd();
            // reset scrollStart
            scrollStart = {
                y: target1.scrollTop,
                x: target1.scrollLeft
            };
        });
    }
    function getNextSnapPoint(target, direction) {
        // get snap length
        var snapLength = {
            y: Math.round(getYSnapLength(target, snapLengthUnit.y)),
            x: Math.round(getXSnapLength(target, snapLengthUnit.x))
        };
        var top = target.scrollTop;
        var left = target.scrollLeft;
        var startPoint = {
            y: scrollStart.y / snapLength.y || 0,
            x: scrollStart.x / snapLength.x || 0
        };
        var currentPoint = {
            y: top / snapLength.y || 0,
            x: left / snapLength.x || 0
        };
        var nextPoint = {
            y: 0,
            x: 0
        };
        /**
         * Set target and bounds by direction,
         * if threshold has not been reached, scroll back to currentPoint
         **/ if (isAboveThreshold(direction.y, currentPoint.y)) {
            if (snapStop) nextPoint.y = roundByDirection(-direction.y, startPoint.y + direction.y);
            else nextPoint.y = roundByDirection(direction.y, currentPoint.y);
        } else nextPoint.y = roundByDirection(direction.y * -1, currentPoint.y);
        if (isAboveThreshold(direction.x, currentPoint.x)) {
            if (snapStop) nextPoint.x = roundByDirection(-direction.x, startPoint.x + direction.x);
            else nextPoint.x = roundByDirection(direction.x, currentPoint.x);
        } else nextPoint.x = roundByDirection(direction.x * -1, currentPoint.x);
        // DEBUG
        // console.log('direction', direction)
        // console.log('startPoint', startPoint)
        // console.log('currentPoint', currentPoint)
        // console.log('nextPoint', nextPoint)
        // calculate where to scroll
        var scrollTo = {
            y: nextPoint.y * snapLength.y,
            x: nextPoint.x * snapLength.x
        };
        // stay in bounds (minimum: 0, maxmimum: absolute height)
        scrollTo.y = stayInBounds(0, target.scrollHeight, scrollTo.y);
        scrollTo.x = stayInBounds(0, target.scrollWidth, scrollTo.x);
        return scrollTo;
    }
    function isAboveThreshold(direction, value) {
        return direction > 0 ? value % 1 > threshold : 1 - value % 1 > threshold;
    }
    function roundByDirection(direction, value) {
        if (direction === -1) // when we go up, we floor the number to jump to the next snap-point in scroll direction
        return Math.floor(value);
        // go down, we ceil the number to jump to the next in view.
        return Math.ceil(value);
    }
    function stayInBounds(min, max, destined) {
        return Math.max(Math.min(destined, max), min);
    }
    function parseSnapCoordinatesValue(x, y) {
        // regex to parse lengths
        var regex = /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*)(?:[eE][+-]?\d+)?)(px|%|vw|vh)/;
        // defaults
        var parsed = {
            y: {
                value: 0,
                unit: 'px'
            },
            x: {
                value: 0,
                unit: 'px'
            }
        };
        if (typeof y === 'number') parsed.y.value = y;
        else {
            var resultY = regex.exec(y);
            if (resultY !== null) parsed.y = {
                value: Number(resultY[1]),
                unit: resultY[2]
            };
        }
        if (typeof x === 'number') parsed.x.value = x;
        else {
            var resultX = regex.exec(x);
            if (resultX !== null) parsed.x = {
                value: Number(resultX[1]),
                unit: resultX[2]
            };
        }
        return parsed;
    }
    function getYSnapLength(obj, declaration) {
        // get y snap length based on declaration unit
        if (declaration.unit === 'vh') return Math.max(document.documentElement.clientHeight, window.innerHeight || 1) / 100 * declaration.value;
        else if (declaration.unit === '%') return obj.clientHeight / 100 * declaration.value;
        else return declaration.value;
    }
    function getXSnapLength(obj, declaration) {
        // get x snap length based on declaration unit
        if (declaration.unit === 'vw') return Math.max(document.documentElement.clientWidth, window.innerWidth || 1) / 100 * declaration.value;
        else if (declaration.unit === '%') return obj.clientWidth / 100 * declaration.value;
        else return declaration.value;
    }
    function isEdge(Coordinates) {
        return Coordinates.x === 0 && speedDeltaY === 0 || Coordinates.y === 0 && speedDeltaX === 0;
    }
    function smoothScroll(obj, end1, callback) {
        var position = function(start, end, elapsed, period) {
            if (elapsed > period) return end;
            return start + (end - start) * easing(elapsed / period);
        };
        var start1 = {
            y: obj.scrollTop,
            x: obj.scrollLeft
        };
        // get animation frame or a fallback
        var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
            return window.setTimeout(fn, 15);
        };
        var period1 = isEdge(start1) ? 1 : duration;
        var startTime;
        // setup the stepping function
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var elapsed = timestamp - startTime;
            // change position on y-axis if result is a number.
            if (!isNaN(end1.y)) obj.scrollTop = position(start1.y, end1.y, elapsed, period1);
            // change position on x-axis if result is a number.
            if (!isNaN(end1.x)) obj.scrollLeft = position(start1.x, end1.x, elapsed, period1);
            // check if we are over due;
            if (elapsed < period1) requestAnimationFrame(step);
            else {
                // is there a callback?
                if (typeof callback === 'function') // stop execution and run the callback
                return callback(end1);
            }
        }
        animationFrame = requestAnimationFrame(step);
    }
    function bind() {
        bindElement(element1);
    }
    function unbind() {
        unbindElement();
    }
    bind();
    return {
        bind: bind,
        unbind: unbind
    };
}
exports.default = createScrollSnap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["dHVtd","int3P"], "int3P", "parcelRequire82ef")

//# sourceMappingURL=index.94538dff.js.map
