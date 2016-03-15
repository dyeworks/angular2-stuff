System.register(['angular2/core', '../common/data'], function(exports_1, context_1) {
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
    var core_1, data_1;
    var GridViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            //var gridOptions;
            //var heroService;
            //import * as core from 'angular2/core';
            //declare var ag: any;
            //ag.grid.initialiseAgGridWithAngular2({ core: core });
            GridViewComponent = (function () {
                function GridViewComponent(_dataService) {
                    var _this = this;
                    this._dataService = _dataService;
                    console.log("in Grid constructor...");
                    this.columnDefs = [
                        { field: 'detailedit', headerName: 'Detail', width: 60, cellClass: 'glyphicon glyphicon-edit' },
                        { field: 'id', headerName: 'id', width: 40 },
                        { field: 'code', headerName: 'code', width: 80 },
                        { field: 'firstname', headerName: 'firstname', width: 100 },
                        { field: 'lastname', headerName: 'lastname', width: 120 },
                        { field: 'dept', headerName: 'dept', width: 150 },
                        //{ field: 'phone', headerName: 'phone', width: 150 },
                        { field: 'email', headerName: 'email', width: 250 },
                        { field: 'role', headerName: 'role', width: 40 },
                        { field: 'rtp', headerName: 'rtp', width: 40 },
                        { field: 'add', headerName: 'add', width: 40 },
                        { field: 'pet', headerName: 'pet', width: 40 },
                        { field: 'exp', headerName: 'exp', width: 40 },
                        { field: 'stn', headerName: 'stn', width: 40 }
                    ];
                    this._dataService.getData().then(function (heroes) { return _this.rowData = heroes; });
                    this.totalItems = 0;
                    this.gridOptions = {
                        rowData: this.rowData,
                        columnDefs: this.columnDefs,
                        enableSorting: true,
                        enableFilter: true,
                        enableColResize: true,
                        angularCompileRows: false,
                        rowSelection: 'single',
                        ready: function () {
                            this.gridOptions.api.showLoading(false);
                        },
                        onCellClicked: function (param) {
                            if (param.colDef.field == 'detailedit') {
                            }
                            if (param.colDef.field == 'detailpick') {
                                // close window and return values
                                //                  $rootScope.lookup.user = param.data;
                                //                  $rootScope.modalInstance.close();
                                return;
                            }
                        }
                    };
                }
                GridViewComponent = __decorate([
                    core_1.Component({
                        selector: 'gridapp',
                        template: "<ag-grid-ng2 #gapp class=\"ag-fresh\" style=\"height: 300px; width:850px\" [gridOptions]=\"gridOptions\" [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" enableSorting=\"true\" enableColResize=\"true\" enableFilter=\"true\"></ag-grid-ng2>",
                        directives: [window.ag.grid.AgGridNg2],
                        providers: [data_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_1.DataService])
                ], GridViewComponent);
                return GridViewComponent;
            }());
            exports_1("GridViewComponent", GridViewComponent);
        }
    }
});
//# sourceMappingURL=finder.js.map