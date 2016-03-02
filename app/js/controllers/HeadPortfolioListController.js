angular.module('app')
.controller('HeadPortfolioListController', ['$scope', '$state', '$window', 'HeadPortfolio',
  function($scope, $state, $window, HeadPortfolio) {
    HeadPortfolio.get(function(data){
      $scope.headPortfolioList = data.results
      console.log($scope.headPortfolioList);
    });

  $scope.deleteHeadPortfolio = function (arg) {
    $scope.arg = arg;
    if(confirm("Видалити?")){
    HeadPortfolio.delete({ action: $scope.arg.id }, function () {
      HeadPortfolio.get(function(data){
        $scope.headPortfolioList = data.results;
      });
    });
  };
  };

}]);
