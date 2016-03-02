angular.module('app')
  .controller('HeadPortfolioEditController', ['HeadPortfolio', 'Year', 'Category', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (HeadPortfolio, Year, Category, $stateParams, $scope, $state, Upload, $timeout, host, $http) {

    HeadPortfolio.getOne({action: $stateParams.id}, function(data) {
      $scope.headPortfolio = data;
      console.log($scope.headPortfolio.title);
      console.log('port', $scope.headPortfolio);
      console.log('portid', $scope.headPortfolio.year.objectId);

      });
      Category.get(function(data){
        $scope.category = data.results;
        $scope.imgCategoryView = [];
        for (var i = $scope.category.length - 1; i > ($scope.category.length - ( $scope.category.length - 11)); i--) {
          $scope.imgCategoryView.push($scope.category[i]);
        }
        console.log('sc', $scope.imgCategoryView);

      });
      Year.get(function(data){
        $scope.category = data.results;
        $scope.imgYearView = [];
        for (var i = 0; i < ($scope.category.length - ( $scope.category.length - 3)); i++) {
          $scope.imgYearView.push($scope.category[i]);
        }

      });


      $scope.updateHeadPortfolio = function(file) {
        $scope.load = "loading";
        console.log($scope.headPortfolio);
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
              console.log($scope.headPortfolio.img);
              $scope.headPortfolio.category.className = "category";
              $scope.headPortfolio.category.__type = "Pointer";
              $scope.headPortfolio.year.className = "year";
              $scope.headPortfolio.year.__type = "Pointer";
              HeadPortfolio.update({action: $stateParams.id}, $scope.headPortfolio, function(data) {
                if (data) {
                  console.log("success");
                }
              });
          });
      }
  }]);
