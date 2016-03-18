 angular.module('app')
  .controller('MusicEditController', ['MMusic', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (MMusic, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
      MMusic.getOne({action: $stateParams.id}, function(data) {
        $scope.Music = data;
      });
      $scope.Music = {};
      $scope.updateMusic = function(file, fileImg) {
        $scope.load = "loading";
          $http.post("https://api.parse.com/1/files/"+ file.name, file, {
             withCredentials: false,
             headers: {
                 'Content-Type': 'image/jpeg'
             },
             transformRequest: angular.identity
          }).then(function(data) {
              file.result = data.data;
              $scope.Music.songs = file.result;
              $scope.Music.songs.__type = "File";
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
      }
  }]);
