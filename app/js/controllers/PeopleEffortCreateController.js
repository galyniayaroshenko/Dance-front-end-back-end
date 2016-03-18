angular.module('app')
  .controller('PeopleEffortCreateController', ['PeopleEffort', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (PeopleEffort, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
      $scope.peopleEffort = {};
      $scope.createPeopleEffort = function(file) {
        $scope.load = "loading";
          $http.post("https://api.parse.com/1/files/"+ file.name, file, {
             withCredentials: false,
             headers: {
                 'Content-Type': 'image/jpeg'
             },
             transformRequest: angular.identity
          }).then(function(data) {
            $scope.load = '';
              file.result = data.data;
              $scope.peopleEffort.foto = file.result;
              $scope.peopleEffort.foto.__type = "File";
              PeopleEffort.create($scope.peopleEffort, function(data) {
                if (data) {
                  $state.go('base.editPeopleEffort', {id:data.objectId});
                }
              });
          });
      }
  }]);
