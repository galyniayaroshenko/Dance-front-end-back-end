angular.module('app')
  .controller('PeopleEffortEditController', ['PeopleEffort', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http', function (PeopleEffort, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
console.log($stateParams.id);
PeopleEffort.getOne({ action: $stateParams.id }, function (data) {
  $scope.peopleEffort = data;
  console.log($scope.peopleEffort);
});
      $scope.updatePeopleEffort = function(file) {
        $scope.load = "loading";
        console.log($scope.peopleEffort);
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
              console.log('foto', $scope.peopleEffort.foto);
              PeopleEffort.update({action: $stateParams.id}, $scope.peopleEffort, function(data) {
                if (data) {
                  console.log("success");
                }
              });
          });
      }
  }]);
