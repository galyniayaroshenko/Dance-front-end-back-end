angular.module('app')
.controller('MMusicListController', ['$scope', '$state', '$window', 'MMusic', '$sce',
  function($scope, $state, $window, MMusic, $sce) {
    $scope.mmusicList = MMusic.get(function(data){
      $scope.mmusicList = data.results
      });
    $scope.deleteMMusic = function (arg) {
      $scope.arg = arg;
      if(confirm("Видалити?")){
      MMusic.delete({ action: $scope.arg.id }, function () {
        MMusic.get(function(data){
          $scope.mmusicList = data.results;
        });
      });
    };
    };
}]);
