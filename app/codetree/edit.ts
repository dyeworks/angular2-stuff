import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {DataService} from '../common/data'

@Component({
  selector: 'codetreeedit'
})
@View({
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: './app/codetree/edit.html',
  styleUrls: []
})
export class CodeTreeEdit {
  columnDefs: any;
  rowData: any;
  data: any;
  id: number;
  constructor(public router: Router, private dataservice: DataService) {

  function save() {
      console.log('saving...');
      var req = { collection: 'CodeTree' };
      dataservice.put(req, this.data)
        //  .then(function (data) {
        //      $rootScope.logDebug('ok', data);
        //      vm.form = data;
        //      $scope.aform.$setPristine();
        //      $scope.saved = true;
        //  });
  };

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
  }

    var close = function () {
      //if ($scope.saved) {
      //    $scope.modalInstance.close(vm.form);
      //}
      //else
      //    $scope.modalInstance.dismiss();
    }

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
      this.data.codeval.push({code:'', name:''});
    };

    function coderemove(pos) {
      this.form.codeval.splice(pos, 1);
    };

  }
}
