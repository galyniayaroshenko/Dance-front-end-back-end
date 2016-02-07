angular.module('app')
  .controller('VideoEditController',
    ['Video', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http', '$sce',
      function (Video, $stateParams, $scope, $state, Upload, $timeout, host, $http, $sce) {

    console.log($stateParams.id);
    Video.getOne({action: $stateParams.id}, function(data) {
      $scope.video = data;
    });
    $scope.video = {}


      $scope.updateVideo = function() {
        $scope.load = "loading";
              Video.update({action: $stateParams.id}, $scope.video, function(data) {
                if (data) {
                  $scope.load = '';
                  console.log("success");
                }
              });


      }
  }]);
