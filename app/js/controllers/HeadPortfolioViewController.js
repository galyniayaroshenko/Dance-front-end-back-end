angular.module('app')
  .controller('HeadPortfolioViewController', ['$scope','$stateParams', 'HeadPortfolio', 'Year', 'Category', '$http',
    function($scope, $stateParams, HeadPortfolio, Year, Category, $http) {


    console.log($stateParams.id);
    HeadPortfolio.get({action:$stateParams.id},function(data){
      $scope.headPortfolioView = data;
      Year.getOne({action:$scope.headPortfolioView.year.objectId},function(data){
        $scope.headPortfolioYearView = data;
        console.log('i', $scope.headPortfolioYearView);
      });
      Category.getOne({action:$scope.headPortfolioView.category.objectId},function(data){
        $scope.headPortfolioCategoryView = data;
        console.log('c', $scope.headPortfolioCategoryView);
      });
        console.log('iV', $scope.headPortfolioView);
      });

  }]);
