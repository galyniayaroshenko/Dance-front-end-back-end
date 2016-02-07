angular.module('app')
  .controller('ProfileCreateController', ['$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', 'Profile', function($stateParams, $scope, $state, Upload, $timeout, host, Profile) {
console.log("wow");
    console.log($stateParams.id);


    $scope.users = {}


          $scope.createUser = function(file) {
            console.log("wow");
            console.log($scope.user);
            console.log($stateParams.id);

    console.log(file);
              var link = host + 'users/new';
              file.upload = Upload.upload({
                url: link,
                data: {file: file, _id: $stateParams.id, name: $scope.user.name, email: $scope.user.email, password:$scope.user.password},
              });
              file.upload.then(function (response) {
                $timeout(function () {
                  file.result = response.data;
                });
              }, function (response) {
                if (response.status > 0)
                  $scope.errorMsg = response.status + ': ' + response.data;
              }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
              });

          }

  }]);
