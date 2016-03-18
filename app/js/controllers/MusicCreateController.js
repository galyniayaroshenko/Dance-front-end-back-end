angular.module('app')
  .controller('MusicCreateController', ['MMusic', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (MMusic, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
      $scope.music = {};
          $scope.createMusic = function(file, fileImg) {
            $scope.load = "loading";
              $http.post("https://api.parse.com/1/files/"+ file.name, file, {
                 withCredentials: false,
                 headers: {
                     'Content-Type': 'image/jpeg'
                 },
                 transformRequest: angular.identity
              }).then(function(data) {
                  file.result = data.data;
                  $scope.music.songs = file.result;
                  $scope.music.songs.__type = "File";
                $http.post("https://api.parse.com/1/files/"+ fileImg.name, fileImg, {
                   withCredentials: false,
                   headers: {
                       'Content-Type': 'image/jpeg'
                   },
                   transformRequest: angular.identity
                }).then(function(result) {
                   $scope.load = '';
                   fileImg.result = result.data;
                   $scope.music.img = fileImg.result;
                   $scope.music.img.__type = "File";
                   MMusic.create($scope.music, function(data) {
                     if (data) {
                       $state.go('base.editMusic', {id:data.objectId});
                     }
                   });
                });
              });
          }
  }]);
