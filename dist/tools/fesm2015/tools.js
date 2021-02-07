import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';

class HelloService {
    constructor() { }
    sayHello() {
        console.log('siemanko');
    }
}
HelloService.ɵfac = function HelloService_Factory(t) { return new (t || HelloService)(); };
HelloService.ɵprov = ɵɵdefineInjectable({ token: HelloService, factory: HelloService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HelloService, [{
        type: Injectable
    }], function () { return []; }, null); })();

/*
 * Public API Surface of tools
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HelloService };
//# sourceMappingURL=tools.js.map
