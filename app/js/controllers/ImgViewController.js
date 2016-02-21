angular.module('app')
  .controller('ImgViewController', ['$scope','$stateParams', 'Img', 'Year', 'Category', '$http',
    function($scope, $stateParams, Img, Year, Category, $http) {


    console.log($stateParams.id);
    Img.get({action:$stateParams.id},function(data){
      $scope.imgView = data;
      Year.getOne({action:$scope.imgView.year.objectId},function(data){
        $scope.imgYearView = data;
        console.log('i', $scope.imgYearView);
      });
      Category.getOne({action:$scope.imgView.category.objectId},function(data){
        $scope.imgCategoryView = data;
        console.log('c', $scope.imgCategoryView);
      });
        console.log('iV', $scope.imgView);
      });

  }]);
