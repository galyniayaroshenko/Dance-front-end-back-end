angular.module('app')
  .controller('ImgCreateController', ['Img', 'Category', 'Year', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (Img, Category, Year, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
    Category.get(function(data) {
      $scope.category = data.results;
    });
    Year.get(function(data) {
      $scope.year = data.results;
    });
    $scope.Portholio = {};
          $scope.createImg = function(file) {
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
                  Img.create($scope.Portholio, function(data) {
                    if (data) {
                      $state.go('base.editImg', {id:data.objectId});
                    }
                  });
              });
          }
  }]);
