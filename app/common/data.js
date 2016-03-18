System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    this.serverurl = 'http://pump.cloudapp.net:81/';
                    this.wytoken = 'notloggedin';
                    this.user = {};
                    this.data = [];
                }
                DataService.prototype.login = function (username, password) {
                    var _this = this;
                    var passhash = CryptoJS.SHA1(password).toString();
                    var url = this.serverurl + 'login/' + username.toUpperCase() + '/' + passhash + '';
                    var login = this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.user = data;
                        _this.wytoken = data.token;
                        localStorage.setItem('wytoken', data.token);
                        localStorage.setItem('user', data);
                        console.log('logged in ok');
                    }, function (err) {
                        alert(err.text());
                        console.log(err.text());
                    });
                    return login;
                };
                DataService.prototype.getData = function (query) {
                    return Promise.resolve('');
                };
                // See the "Take it slow" appendix
                DataService.prototype.getDataSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                DataService.prototype.crypttest = function (event, username, password) {
                    event.preventDefault();
                    var data = [{ id: 1, foo: 'bar' }];
                    var secret = 'secret key 123';
                    // Encrypt
                    var encryptData = CryptoJS.AES.encrypt(JSON.stringify(data), secret);
                    var encryptText = encryptData.toString();
                    // Decrypt
                    var decryptBytes = CryptoJS.AES.decrypt(encryptText, secret);
                    var decryptData = JSON.parse(decryptBytes.toString(CryptoJS.enc.Utf8));
                    var zog = CryptoJS.AES.encrypt("12345", "Key").toString();
                    var zog1 = CryptoJS.AES.decrypt(zog, "Key").toString();
                    var zog2 = zog1.toString(CryptoJS.enc.Utf8);
                };
                DataService.prototype.get = function (z) {
                    var _this = this;
                    if (!z.fields) {
                        z.fields = {};
                    }
                    if (!z.order) {
                        z.order = { _id: 1 };
                    }
                    if (!z.limit) {
                        z.limit = 5000;
                    }
                    var url = this.serverurl + '/api/Find';
                    var data = { 'query': z };
                    var headers = {
                        'query': JSON.stringify(z),
                        "Content-Type": "application/json",
                        "wytoken": this.wytoken // no token, no data ☻
                    };
                    var get = this.http.put(url, '', headers).map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.data = data;
                        console.log('got data');
                    }, function (err) {
                        alert(err.text());
                        console.log(err.text());
                    });
                    return get;
                };
                DataService.prototype.put = function (query, data) {
                    var x = this.putit(query, data, '/api/save_id');
                    return x;
                };
                DataService.prototype.agg = function (query, data) {
                    var x = this.putit(query, data, '/api/agg');
                    return x;
                };
                DataService.prototype.exec = function (query, data) {
                    var x = this.putit(query, data, '/api/exec');
                    return x;
                };
                DataService.prototype.email = function (query, data) {
                    var x = this.putit(query, data, '/api/sendEmail');
                    return x;
                };
                DataService.prototype.next = function (query, data) {
                    var x = this.putit(query, data, '/api/next');
                    return x;
                };
                DataService.prototype.documentstatus = function (query, data) {
                    var x = this.putit(query, data, '/api/documentstatus');
                    return x;
                };
                DataService.prototype.mailmerge = function (query, data) {
                    var x = this.putit(query, data, '/api/mailmerge');
                    return x;
                };
                DataService.prototype.changepassword = function (query, data) {
                    var x = this.putit(query, data, '/api/changepassword');
                    return x;
                };
                DataService.prototype.putit = function (query, data, service) {
                    var _this = this;
                    var url = this.serverurl + service;
                    var headers = {
                        'query': JSON.stringify(query),
                        "Content-Type": "application/json",
                        "wytoken": this.wytoken // no token, no data ☻
                    };
                    var put = this.http.put(url, data, headers).map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.data = data;
                        console.log('put data');
                    }, function (err) {
                        alert(err.text());
                        console.log(err.text());
                    });
                    return put;
                };
                DataService.prototype.getLookups = function (id) {
                    var ret = [];
                    if (this.codetree) {
                        var reta = getCodes(id, this.codetree.children).children;
                        if (reta) {
                            reta.forEach(function (a) {
                                ret.push(a);
                            });
                        }
                    }
                    return ret;
                    // walk the tree
                    function getCodes(id, children) {
                        var ret;
                        ret = {};
                        for (var i = 0; i < children.length; i++) {
                            if (ret.id)
                                return ret;
                            if (children[i].id === id) {
                                ret = { id: children[i].id, name: children[i].name, children: children[i].children, codeval: children[i].codeval };
                                return ret;
                            }
                            ret = getCodes(id, children[i].children);
                        }
                        return ret;
                    }
                };
                DataService.prototype.isThere = function (dataName) {
                    var ret = false;
                    if (typeof (Storage) === "undefined") {
                        return ret;
                    }
                    if (localStorage[dataName] && localStorage[dataName] != "undefined") {
                        ret = true;
                    }
                    return ret;
                };
                DataService.prototype.isFresh = function (dataName, secs) {
                    var ret = false;
                    if (typeof (Storage) === "undefined") {
                        return ret;
                    }
                    if (!this.isThere(dataName))
                        return ret;
                    //var saved = localStorage[dataName];
                    var saved = JSON.parse(localStorage[dataName]).created;
                    if (saved) {
                        var now = new Date();
                        var diff = now.valueOf() - new Date(saved).valueOf();
                        if (diff < secs * 1000) {
                            ret = true;
                        }
                    }
                    return ret;
                };
                DataService.prototype.load = function (dataName) {
                    var ret;
                    ret = {};
                    if (localStorage[dataName]) {
                        var sdata = localStorage[dataName];
                        ret = JSON.parse(sdata);
                    }
                    return ret.data;
                };
                DataService.prototype.save = function (dataName, data) {
                    //data.savedd = new Date(); // mark with todays datetime
                    var d = { created: new Date(), data: data };
                    var sdata = JSON.stringify(d);
                    localStorage[dataName] = sdata;
                    //var savedd = new Date(); // mark with todays datetime
                    //localStorage[dataName + "Saved"] = savedd;
                    return;
                };
                DataService.prototype.clearOne = function (dataName) {
                    if (typeof (Storage) === "undefined") {
                        return;
                    }
                    localStorage.removeItem(dataName); // remove one
                    //localStorage.removeItem(dataName + "Saved");
                    return;
                };
                DataService.prototype.clearAll = function () {
                    if (typeof (Storage) === "undefined") {
                        return;
                    }
                    localStorage.clear(); // clear the lot
                    return;
                };
                DataService.prototype.areWeOnline = function () {
                    if (navigator.onLine) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.js.map