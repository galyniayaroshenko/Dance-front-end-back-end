angular.module('app')
  .controller('MusicViewController', ['$scope','$stateParams', 'MMusic', function($scope, $stateParams, MMusic) {
    console.log($stateParams.id);
    $scope.viewMusic = MMusic.get({ action: $stateParams.id });
    console.log($scope.viewMusic);
    console.log('smile');

  }]);
