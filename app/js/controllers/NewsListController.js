angular.module('app')
.controller('NewsListController', ['$scope', '$state', '$window', 'News', '$sce',
  function($scope, $state, $window, News, $sce) {
    $scope.newsList = News.get(function(data){
      $scope.newsList = data.results
      });
  $scope.deleteNews = function (arg) {
    $scope.arg = arg;
    if(confirm("Видалити?")){
    News.delete({ action: $scope.arg.id }, function () {
      News.get(function(data){
        $scope.newsList = data.results;
      });
    });
  };
};
}]);
