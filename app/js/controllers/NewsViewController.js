angular.module('app')
  .controller('NewsViewController', ['$scope','$stateParams', 'News', function($scope, $stateParams, News) {
    News.getOne({action:$stateParams.id},function(data){
      $scope.newsView = data;
      });
  }]);
