System.register(['angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var contentHeaders;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            exports_1("contentHeaders", contentHeaders = new http_1.Headers());
            contentHeaders.append('Accept', 'application/json, text/plain');
            contentHeaders.append('Content-Type', 'application/json');
            contentHeaders.append('Accept-Encoding', 'gzip, deflate, sdch');
            contentHeaders.append('Accept-Language', 'en-US,en;q=0.8');
            contentHeaders.append('Connection', 'keep-alive');
            contentHeaders.append('Host', 'pump.cloudapp.net:81');
            contentHeaders.append('Origin', 'http://pump.cloudapp.net');
        }
    }
});
//# sourceMappingURL=headers.js.map