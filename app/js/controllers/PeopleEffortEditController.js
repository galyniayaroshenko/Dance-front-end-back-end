angular.module('app')
  .controller('PeopleEffortEditController', ['PeopleEffort', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (PeopleEffort, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
      PeopleEffort.getOne({ action: $stateParams.id }, function (data) {
        $scope.peopleEffort = data;
      });
      $scope.updatePeopleEffort = function(file) {
        if (file){
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
              PeopleEffort.update({action: $stateParams.id}, $scope.peopleEffort, function(data) {
                if (data) {
                  console.log("success");
                }
              });
          });
        } else {
          PeopleEffort.update({action: $stateParams.id}, $scope.peopleEffort, function(data) {
            if (data) {
              console.log("success");
            }
          });
        }
      }
  }]);
