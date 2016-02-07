angular.module('app')
  .controller('ImgEditController', ['Img', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http', function (Img, $stateParams, $scope, $state, Upload, $timeout, host, $http) {

    Img.getOne({action: $stateParams.id}, function(data) {
      $scope.Portholio = data;
      console.log($scope.Portholio.title);
      console.log($scope.Portholio);
    });


      $scope.updateImg = function(file) {
        $scope.load = "loading";
        console.log($scope.Portholio);
          $http.post("https://api.parse.com/1/files/"+ file.name, file, {
             withCredentials: false,
             headers: {
                 'Content-Type': 'image/jpeg'
             },
             transformRequest: angular.identity
          }).then(function(data) {
              $scope.load = '';
              file.result = data.data;
              $scope.Portholio.img = file.result;
              $scope.Portholio.img.__type = "File";
              console.log($scope.Portholio.img);
              Img.update({action: $stateParams.id}, $scope.Portholio, function(data) {
                if (data) {
                  console.log("success");
                }
              });
          });
      }
  }]);
