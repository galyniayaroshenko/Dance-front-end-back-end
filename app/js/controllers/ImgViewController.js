angular.module('app')
  .controller('ImgViewController', ['$scope','$stateParams', 'Img', 'Year', 'Category', '$http',
    function($scope, $stateParams, Img, Year, Category, $http) {
    Img.get({action:$stateParams.id},function(data){
      $scope.imgView = data;
      Year.getOne({action:$scope.imgView.year.objectId},function(data){
        $scope.imgYearView = data;
      });
      Category.getOne({action:$scope.imgView.category.objectId},function(data){
        $scope.imgCategoryView = data;
      });
    });
  }]);
