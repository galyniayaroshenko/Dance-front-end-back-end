angular.module('app')
.controller('VideoListController', ['$scope', '$state', '$window', 'Video', '$sce',
  function($scope, $state, $window, Video, $sce) {
    Video.get(function(data){
      $scope.videoList = data.results;
      for (var i = 0; i < $scope.videoList.length; i++) {
        $scope.videoList[i].video = $sce.trustAsHtml($scope.videoList[i].video);
      }
    });
    $scope.deleteVideo = function (arg) {
      $scope.arg = arg;
      if(confirm("Видалити?")){
        Video.delete({ action: $scope.arg.id }, function () {
          Video.get(function(data){
            $scope.videoList = data.results;
            for (var i = 0; i < $scope.videoList.length; i++) {
              $scope.videoList[i].video = $sce.trustAsHtml($scope.videoList[i].video);
            }
          });
        });
      }
    };
}]);
