angular.module('app')
  .controller('VideoCreateController',
    ['Video', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
      function (Video, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
        $scope.video = {};
        $scope.createVideo = function() {
          $scope.load = "loading";
                Video.create($scope.video, function(data) {
                  if (data) {
                    $scope.load = '';
                    $state.go('base.editVideo', {id:data.objectId});
                  }
                });
        }
  }]);
