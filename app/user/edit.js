/* global angular */
(function () {
    'use strict';

    var appUser = angular.module('appUser');
    var controllerId = 'appUserEdit';
    appUser.controller(controllerId, ['$rootScope', '$routeParams', '$scope', '$q', 'appData', '$state', '$stateParams',
        function appUserEdit($rootScope, $routeParams, $scope, $q, appData, $state, $stateParams) {

            var vm = this;
            vm.reset = function () {
                vm.form.password = '123';
                $rootScope.logSuccess('password set to 123');
            };
            vm.save = function () {
                vm.form.name = vm.form.firstname + ' ' + vm.form.lastname;
                $scope.lookup.roles.forEach(function (r) {
                    if (r.id == vm.form.role2) {
                        vm.form.role = parseInt(r.value);
                    }
                })
                var req = { collection: 'UserProfile' };
                appData.putnode(req, vm.form)
                    .then(function (data) {
                        $rootScope.logSuccess('saved');
                        vm.form = data;
                    });
            };

            $scope.admingroupaddLine = function stepaddLine() {
                if (!vm.form.admingroups) {
                    vm.form.admingroups = [];
                }
                vm.form.admingroups.push({});
            };

            $scope.admingroupremoveLine = function stepremoveLine(pos) {
                vm.form.admingroups.splice(pos, 1);
            };

            activate();

            function activate() {
                $rootScope.activateController([getData()], controllerId)
                    .then(function () {
                    });
            }

            function getData() {
                var defered = $q.defer();

                vm.id = parseInt($stateParams.id);
                document.title = 'PRD User: uid ' + vm.id;

                if (!vm.id) {
                    $rootScope.logError('No id given');
                    return;
                }
                var query = { id: vm.id };

                var req = { collection: 'UserProfile', query: query };
                appData.getnode(req)
                  .then(function (data) {
                      vm.form = data[0];
                      if (!vm.form) {
                          vm.form = {
                              id: 0,
                              code: "",
                              firstname: "",
                              lastname: "",
                              dept: "",
                              deptno: 0,
                              job: '',
                              jobno: 0,
                              role: 0,
                              roleno: 0,
                              phone: "",
                              mobile: "",
                              email: "",
                              add: 0,
                              exp: 0,
                              pet: 0,
                              rtp: 0,
                              stn: 0,
                              password: "123"
                          }

                      }
                      return defered.resolve(data);
                  });

                // set lookups
                $scope.lookup = {};
                $scope.lookup.depts = appData.getLookups(992);
                $scope.lookup.jobs = appData.getLookups(957);
                $scope.lookup.roles = appData.getLookups(1145);
                $scope.lookup.groups = appData.getLookups(1858);
                return defered.promise;
            }

        }]);
})();
