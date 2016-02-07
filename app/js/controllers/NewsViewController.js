angular.module('app')
  .controller('NewsViewController', ['$scope','$stateParams', 'News', function($scope, $stateParams, News) {
    console.log($stateParams.id);
    News.getOne({action:$stateParams.id},function(data){
      $scope.newsView = data;
        console.log($scope.newsView);
      });
  }]);
