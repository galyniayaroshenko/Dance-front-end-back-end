angular.module('app')
  .controller('VideoViewController', ['$scope','$stateParams', 'Video',
    function($scope, $stateParams, Video) {
      $scope.viewVideo = Video.get({ action: $stateParams.id });
  }]);
