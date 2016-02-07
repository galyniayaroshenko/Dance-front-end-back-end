 angular.module('app')
  .controller('MusicEditController', ['MMusic', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http', function (MMusic, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
      MMusic.getOne({action: $stateParams.id}, function(data) {
        $scope.Music = data;
        console.log($scope.Music.title);
      });

    console.log($stateParams.id);

$scope.Music = {}


      $scope.updateMusic = function(file, fileImg) {
        $scope.load = "loading";
        console.log($scope.Music);
          $http.post("https://api.parse.com/1/files/"+ file.name, file, {
             withCredentials: false,
             headers: {
                 'Content-Type': 'image/jpeg'
             },
             transformRequest: angular.identity
          }).then(function(data) {
              file.result = data.data;
              $scope.Music.song = file.result;
              $scope.Music.song.__type = "File";
              console.log($scope.Music.song);
            $http.post("https://api.parse.com/1/files/"+ fileImg.name, fileImg, {
               withCredentials: false,
               headers: {
                   'Content-Type': 'image/jpeg'
               },
               transformRequest: angular.identity
            }).then(function(result) {
               $scope.load = '';
               fileImg.result = result.data;
               $scope.Music.img = fileImg.result;
               $scope.Music.img.__type = "File";
               MMusic.update({action: $stateParams.id}, $scope.Music, function(data) {
                 if (data) {
                   console.log("success");
                 }
               });
            });
          });
      console.log($scope.Music);
        console.log("wow");
      }
  }]);
