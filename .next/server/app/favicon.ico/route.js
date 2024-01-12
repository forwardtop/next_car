"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 2196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 4432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata
var favicon_next_metadata_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_namespaceObject);
__webpack_require__.d(favicon_next_metadata_namespaceObject, {
  "GET": () => (GET),
  "dynamic": () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(4664);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata


const contentType = "image/x-icon"
const buffer = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAl0SURBVHhe5doJVFNXGgDg5EFAE0AWUUDr2gFEXHqk4jKaDktFaR2HjqLgOC7Fw9EZCrVjx6l13HBBLeAClbpQLA5jx7FFplIpM2jHqogKggqobCphEUhYEkhY5r/pPxxzQiTwbkKA7xxO7n/z8u57P+/de99NuBw9MubxeG6+7yxx8vDwsXVymcLY2Y2Wm5lZthsbmzRzuIycy+V+N2/WhKrS0mL8iEHQeZJGOzo6+3y0eZvNzFlCiZW1fWM3bV6eP3twJMl0KJ/vt/XT8DFL/AIrzM1t2zrwDS0YYpIYfKXCwsrKeuPJ00nBDx9JjFb+PvS5Wc8SZKioJIlnYmIS9MXJpBXZedUSrwX+NVyuMb41ILBO0pzfLg0IfVBYK3t7oX8TdL5YPaD0+qRM+Xx+WGrajYmHohNFPBMBVg9IvUqS86xZc0NyHlRWT5rsPgC6nG71OEkea9YGz0s6f1VkYmKGVQNej5K0fPuO/eN2hMfKuAOz79FE65MNiDh4zHRN0GZ5x2C4wVRplSRyBfH8Aza0YTzYdJskrzXrggVr128erAkiXpkkJ/dZcydu3xXTMghvsZdpTNIQgUCw+Kuk1CY9PAQbOo1J2nghOWMwDfOv0mWShAGBq6ucJrlhOOipJYk8rLrv3hszuHshVWr9zftxJ842L1i0AkOdEXA62i2rK8vEd+/efHz9pyuVBfn3a0Si8oqSkqKO9vZ23MwgqCTJ0tZ2hH9WtkiXT/P2DfXVxWe/Op4ceWiPXCaTYbVBU0nShoQzF+qFnkswpMquVSHNCd+5Ke3Uyc+xqt/oTBJZcn3/YaFEwmWoLpgZwZ/l7ZvpR5ct9WlrbW39ubZ/6bytyJo07QSZcjo6aiMPbIn2+41Xf00Q0XklfXy/oIqsSWPIGklQ6V+3Bv8QfzoOq/ot5ZU01sXFlXyroayhgNxilZ8d2NKTBA2DQWOGl7fPzAU+vrajXxuD1QZBmSTPD8K20PxWw+pO5r9ToqP2Y6iRV+DK1X/PzMypkMkU4qqqyqy0y5dupl5KqXpaVlonl7cl59wrWBYW9jFu3meUt9ufc+6XP7O0slfWsGQnlzdFT3a0VsjlcqxS4zJ7zryYxMSk+ePHOagMrxpkV1aJQ4KD1//4zYWvsUqvGCNjY2OxpZUdxqyQE74bvuPDVyXo3aCgDdeuZGQItUwQMX3kCMv0f54/t+nw4eNYpVdG7osXv2e20HcZxqyMkjbUnAla54+hGr+Nfww7H3PsMN/ISNv8dDLicjne7u4zGm1sHa5f+i4Fq/WCmeTltQjLrBXGxx/Fohpyi52O/OwQOdneIp/c+4cN671X/m7NzzX6wf3o+/TMCudJb2Lca+ZcTscp59fNWqRSKVapyCgueS4cN9YBQ1aK6xtkv7CxttDX3IshP3/BMivmlaISTQkio9h8SgkixluYDw0O33MQQ51jFBYWVlhmRZKdnYlFNUEfhIT1/ibrWmBAgM5XKv6PaWUYHpZZKc269RMW1QinTHHBIjVuoxxGkAkohjrFyCktizy5c7vLK8lq5Ei7kUOGUP+VCQ8GgKlz5wox1CmmhctiuHlJU03tCyyqGO/qOhWL1I1xdHLCok5xa6TSFlNTUxOMe2308OHW4rq6Ogw7WTs5uy79ISMXQ6q+X7d6Scnl1G8xVPHkyZMiS4Bhr02bNm0qt6mpScrn84diXa+NA6UAw048c4th/nn5Ygyp+tdC7zfqHtzPxrCTEWhpaZHDC+uuZARgxABjVsYCLKpQNNRLZDXVVRhS06FQtDY+fdrlbyttAI0EEXARNTFVAGNWJgIsqilPT6f+GFFx6+ZV8g/AUMV0gEVW6uvrG2DqJ2UqANaxIhQK38KimpLkb5KwSE1p8rca9zkHYJGVZ4C8MgVAWcOSN4CBssuRUvTj1bSKa/9Nx5C1xtKSoqJ/nPsSQzUeHh6eWGSlBJBXJj8//6GyhiUHBwf7eQBDNbd3bd/UJmtm/RVSe1tbe+a2Tza2KxRdLsc4grkAQ1ZyAHll7gJlDQWhoaFhWFRT9/BBzrUPQ1Zx2ttZrYHmHNz/SXnGf1IxVLMWMAxDZe4HOVKOnFwegOmNWCAQ8JXvsNAG/2VXV9fJcHXmY5WaCe8tXTVzb8RxY1PTIVilFXIF3TsUsTUv5ug+TkfXvwWyA4WFhY/Mzc2p/NBjDHgKGAW4AbCeFTLsxsTExGrqm4ii818npC3zE9bm5d7Bqm41FBU/yli7yjfv2JG9mhJE7Ny5cxetBEFXXUgShCGHEwagbWrWAdy1ZpDIse8u9v/V6YSU5YXFspWl5R0v/wU+LlV4/u1c+usrAoMYY163D+Fk4GhtbW3DQ2DtyJEjqguIZLZMbhV8nzUyi58NcPfdMubzBZbw+OLwlsfCUZ7e71i5TJ5uYmGh9SMFuS1guleNzVMBUxr1h+fr16/fwPepEIlEFRMA7l5nRoJ79+7lYrNUwF32DDp/9Rk7GRVwG2qeP39e7gawCepeAzBGFGBz1OzevTscm1AFo5ugtra2DrejpqGhoXEFwGaoWQTKy8tF2Aw1crlcMRpgM+rI6IDbUnfx4sUU0ndgU71GnspjY2M/p9mHviwxMfEsNtU18vQskUjqcXvqZDJZ84kTJ05OAdik1kiC9+3bt59cmbg76mA21OoMsEnNtgH8jE7BRD+bnPTbYDwgk1o8BKVRgLz3FwDTuJu6unJedurUqdPY/KsNBcXFxSX4Ob0h/8WamhroFun3i9oQi8USe4Bp6N6vAX520AgBePrai4+P/xI/P+BlZGRcIUu+eOraGwbIYjruZ8B68eJFDZlv4Wn3HFkGbWxsbML9DTikH/QFeLq9txzoY2TpC+TBHk+TPdKp4X4HjKioqGg8PXo+Bbj/fq+7NS9WQkF/v/UiIyOjunzCpykQSKVSGbbZb5B/7iaAp6F7b4CioqJibN/gVVdXvyCrBnj4+jMcnAN4HAaLTBRZzYNoIGtFuljXYYusZmwAOuuge8oCREREHGhubm7BY+wzZIIYFxf3hQPAwzMs5LKOjo4+TL4IwGPWG/JTm4SEhDMuAA/HsNmCPwHy3RWeg86UlZU9DQ8P30Nj1bNPkP7gTUBOIjc3N4/WHIskn8yYPYHO5zxAr50aGRF/CWbMmOFGlkmdAOk7bGxsrHETFeS2Jb/seAzIV+dZWVm3MgFcPWW4iV4YRM9Plm7NgAkg39rUAxidJNAJK3CTPsTh/A9NpJ7A4Bqz/AAAAABJRU5ErkJggg==", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=D%3A%5CPROJECT%5C2024%5Cofem_car%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: favicon_next_metadata_namespaceObject,
    pathname: "/favicon.ico",
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!D:\\PROJECT\\2024\\ofem_car\\app\\favicon.ico?__next_metadata",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [405,572], () => (__webpack_exec__(4432)));
module.exports = __webpack_exports__;

})();