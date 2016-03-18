angular.module('app')
  .controller('AboutUsEditController', ['AboutUs', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (AboutUs, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
      AboutUs.getOne({action: $stateParams.id}, function(data) {
        $scope.OboutUs = data;
      });
      $scope.updateAboutUs = function(file) {
        $scope.load = "loading";
        console.log($scope.OboutUs);
          $http.post("https://api.parse.com/1/files/"+ file.name, file, {
             withCredentials: false,
             headers: {
                 'Content-Type': 'image/jpeg'
             },
             transformRequest: angular.identity
          }).then(function(data) {
              $scope.load = '';
              file.result = data.data;
              $scope.OboutUs.foto = file.result;
              $scope.OboutUs.foto.__type = "File";
              console.log($scope.OboutUs.foto);
              AboutUs.update({action: $stateParams.id}, $scope.OboutUs, function(data) {
                if (data) {
                  console.log("success");
                }
              });
          });
      }
  }]);
