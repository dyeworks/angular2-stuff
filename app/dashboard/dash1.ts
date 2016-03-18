import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { Router } from 'angular2/router';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main'; //

@Component({
  selector: 'home'
})
@View({
  directives: [CORE_DIRECTIVES, AgGridNg2],
  templateUrl: './app/dashboard/dash1.html',
  styleUrls: ['./app/dashboard/dash1.css']
})
export class Dash1 {
  columnDefs: any;
  rowData: any;

  constructor(public router: Router, public http: Http) {
    // put columnDefs directly onto the controller
    this.columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];
    // put data directly onto the controller
    this.rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

  }

}
