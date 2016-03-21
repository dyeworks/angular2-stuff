System.register(['angular2/core', 'angular2/router', 'angular2/common', '../common/data'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, data_1;
    var CodeTreeEdit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            CodeTreeEdit = (function () {
                function CodeTreeEdit(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                    function save() {
                        console.log('saving...');
                        var req = { collection: 'CodeTree' };
                        dataservice.put(req, this.data);
                        //  .then(function (data) {
                        //      $rootScope.logDebug('ok', data);
                        //      vm.form = data;
                        //      $scope.aform.$setPristine();
                        //      $scope.saved = true;
                        //  });
                    }
                    ;
                    var list = [
                        { code: 1, name: 'Form' },
                        { code: 2, name: 'Letter' },
                        { code: 3, name: 'Notice' },
                        { code: 4, name: 'OldLetter' },
                        { code: 8, name: 'PDF' },
                        { code: 9, name: 'Data' }
                    ];
                    var type = function (val, choice) {
                        val.typecode = choice.code;
                        val.typename = choice.name;
                    };
                    var close = function () {
                        //if ($scope.saved) {
                        //    $scope.modalInstance.close(vm.form);
                        //}
                        //else
                        //    $scope.modalInstance.dismiss();
                    };
                    function getData() {
                        //this.id = parseInt($scope.id); // $scope passed in
                        document.title = 'PRD CodeTree: cid ' + this.id;
                        var query = { id: this.id };
                        var req = { collection: 'CodeTree', query: query };
                        dataservice.get(req);
                        //.then(function (data) {
                        //  vm.form = data[0];
                        //  if ($scope.id == 0) {
                        //      vm.form = {};
                        //      vm.form.id = 0;
                        //      vm.form.rid = $scope.rid;
                        //  }
                        //  if (!vm.form.codeval) {
                        //      vm.form.codeval = [];
                        //  }
                        //  if (!vm.form.days) {
                        //      vm.form.days = 0;
                        //  }
                        //});
                    }
                    function codeadd() {
                        if (!this.data.codeval) {
                            this.data.codeval = [];
                        }
                        this.data.codeval.push({ code: '', name: '' });
                    }
                    ;
                    function coderemove(pos) {
                        this.form.codeval.splice(pos, 1);
                    }
                    ;
                }
                CodeTreeEdit = __decorate([
                    core_1.Component({
                        selector: 'codetree/edit'
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        templateUrl: './app/codetree/edit.html',
                        styleUrls: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, data_1.DataService])
                ], CodeTreeEdit);
                return CodeTreeEdit;
            }());
            exports_1("CodeTreeEdit", CodeTreeEdit);
        }
    }
});
//# sourceMappingURL=edit.js.map