/* global angular */
import {Component} from 'angular2/core';
import {DataService}   from '../common/data';
//var gridOptions;
//var heroService;
//import * as core from 'angular2/core';
//declare var ag: any;
//ag.grid.initialiseAgGridWithAngular2({ core: core });
@Component({
    selector: 'gridapp',
    template: `<ag-grid-ng2 #gapp class="ag-fresh" style="height: 300px; width:850px" [gridOptions]="gridOptions" [columnDefs]="columnDefs" [rowData]="rowData" enableSorting="true" enableColResize="true" enableFilter="true"></ag-grid-ng2>`,
    directives: [(<any>window).ag.grid.AgGridNg2],
    providers: [DataService]
})
export class GridViewComponent {

    private columnDefs: Object[];
    private rowData: Object[];
    private totalItems: Number;
    private gridOptions: Object;

    constructor(private _dataService: DataService) {

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

        this._dataService.getData().then(heroes => this.rowData = heroes);
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
//                  var url = $state.href('user/edit', { id: param.data.id });
//                  window.open(url, '_blank');
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

}
