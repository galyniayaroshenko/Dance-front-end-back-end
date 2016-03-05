angular.module('app')
  .controller('HeadPortfolioCreateController', ['HeadPortfolio', 'Category', 'Year', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (HeadPortfolio, Category, Year, $stateParams, $scope, $state, Upload, $timeout, host, $http) {


Category.get(function(data) {
  $scope.imgCategoryView = data.results;
  console.log('sss', $scope.imgCategoryView);
  $scope.category = [];
  for (var i = $scope.imgCategoryView.length -1; i > $scope.imgCategoryView.length - 4; i--) {
    $scope.category.push($scope.imgCategoryView[i]);
  }
  console.log('sc', $scope.category);
});

Year.get(function(data) {
  $scope.category = data.results;
  $scope.year = [];
  for (var i = 0; i < ($scope.category.length - ( $scope.category.length - 3)); i++) {
    $scope.year.push($scope.category[i]);
  }
});


$scope.headPortfolio = {};


// $scope.Portholio.category = {};
      $scope.createHeadPortfolio = function(file) {
        console.log($scope.headPortfolio);
        $scope.load = "loading";
        // console.log($scope.Portholio);
          $http.post("https://api.parse.com/1/files/"+ file.name, file, {
             withCredentials: false,
             headers: {
                 'Content-Type': 'image/jpeg'
             },
             transformRequest: angular.identity
          }).then(function(data) {
              $scope.load = '';
              file.result = data.data;
              $scope.headPortfolio.img = file.result;
              $scope.headPortfolio.img.__type = "File";
              console.log('port', $scope.Portholio);
              $scope.headPortfolio.category.className = "category";
              $scope.headPortfolio.category.__type = "Pointer";
              $scope.headPortfolio.year.className = "year";
              $scope.headPortfolio.year.__type = "Pointer";
              //$scope.headPortfolio.category.objectId = $scope.Portholio.category;

              HeadPortfolio.create($scope.headPortfolio, function(data) {
                if (data) {
                  console.log("success");
                  console.log('data', data);
                  $state.go('base.editHeadPortfolio', {id:data.objectId});
                }
              });
          });
      }
  }]);
