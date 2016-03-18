angular.module('app')
  .controller('MusicViewController', ['$scope','$stateParams', 'MMusic',
    function($scope, $stateParams, MMusic) {
      $scope.viewMusic = MMusic.get({ action: $stateParams.id });
  }]);
