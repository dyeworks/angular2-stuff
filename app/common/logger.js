System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Logger;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Logger = (function () {
                function Logger() {
                    this.logs = []; // capture logs for testing
                }
                Logger.prototype.log1 = function (message) {
                    this.logs.push(message);
                    console.log(message);
                };
                Logger.prototype.log = function (message, data, source, showToast) {
                    this.logIt(message, data, source, showToast, 'info');
                };
                Logger.prototype.logWarning = function (message, data, source, showToast) {
                    this.logIt(message, data, source, showToast, 'warning');
                };
                Logger.prototype.logSuccess = function (message, data, source, showToast) {
                    this.logIt(message, data, source, showToast, 'success');
                };
                Logger.prototype.logError = function (message, data, source, showToast) {
                    this.logIt(message, data, source, showToast, 'error');
                };
                Logger.prototype.logDebug = function (message, data, source, showToast, toastType) {
                    source = source ? '[' + source + '] ' : '';
                    console.debug(source, message, data);
                    if (toastType == 'debug') {
                    }
                };
                Logger.prototype.logIt = function (message, data, source, showToast, toastType) {
                    source = source ? '[' + source + '] ' : '';
                    if (toastType === 'error') {
                        console.error(source, message, data);
                        //toastr.error(message);
                        return;
                    }
                    if (toastType === 'warning') {
                        console.warn(source, message, data);
                    }
                    else if (toastType === 'success') {
                        console.info(source, message, data);
                    }
                    else {
                        console.debug(source, message, data);
                    }
                    //}
                };
                Logger = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Logger);
                return Logger;
            }());
            exports_1("Logger", Logger);
        }
    }
});
//# sourceMappingURL=logger.js.map