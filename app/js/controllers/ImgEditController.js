angular.module('app')
  .controller('ImgEditController', ['Img', 'Year', 'Category', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (Img, Year, Category, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
    Img.getOne({action: $stateParams.id}, function(data) {
      $scope.Portholio = data;
      });
      Category.get(function(data){
        $scope.imgCategoryView = data.results;
      });
      Year.get(function(data){
        $scope.imgYearView = data.results;
      });
      $scope.updateImg = function(file) {
        $scope.load = "loading";
          $http.post("https://api.parse.com/1/files/"+ file.name, file, {
             withCredentials: false,
             headers: {
                 'Content-Type': 'image/jpeg'
             },
             transformRequest: angular.identity
          }).then(function(data) {
              $scope.load = '';
              file.result = data.data;
              $scope.Portholio.img = file.result;
              $scope.Portholio.img.__type = "File";
              $scope.Portholio.category.className = "category";
              $scope.Portholio.category.__type = "Pointer";
              $scope.Portholio.year.className = "year";
              $scope.Portholio.year.__type = "Pointer";
              Img.update({action: $stateParams.id}, $scope.Portholio, function(data) {
                if (data) {
                }
              });
          });
      }
  }]);
