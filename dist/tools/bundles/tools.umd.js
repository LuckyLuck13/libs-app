(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tools', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tools = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var HelloService = /** @class */ (function () {
        function HelloService() {
        }
        HelloService.prototype.sayHello = function () {
            console.log('siemanko');
        };
        return HelloService;
    }());
    HelloService.ɵfac = function HelloService_Factory(t) { return new (t || HelloService)(); };
    HelloService.ɵprov = i0.ɵɵdefineInjectable({ token: HelloService, factory: HelloService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HelloService, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    /*
     * Public API Surface of tools
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HelloService = HelloService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tools.umd.js.map
