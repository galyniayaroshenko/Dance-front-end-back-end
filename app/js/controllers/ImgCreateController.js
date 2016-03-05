angular.module('app')
  .controller('ImgCreateController', ['Img', 'Category', 'Year', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (Img, Category, Year, $stateParams, $scope, $state, Upload, $timeout, host, $http) {


Category.get(function(data) {
  $scope.category = data.results;
  console.log('cat', $scope.category);
});

Year.get(function(data) {
  $scope.year = data.results;
  console.log('year', $scope.year);
});


$scope.Portholio = {};


// $scope.Portholio.category = {};
      $scope.createImg = function(file) {
        console.log($scope.Portholio);
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
              $scope.Portholio.img = file.result;
              $scope.Portholio.img.__type = "File";
              console.log('port', $scope.Portholio);
              $scope.Portholio.category.className = "category";
              $scope.Portholio.category.__type = "Pointer";
              $scope.Portholio.year.className = "year";
              $scope.Portholio.year.__type = "Pointer";
              // $scope.Portholio.category.objectId = $scope.Portholio.category;

              Img.create($scope.Portholio, function(data) {
                if (data) {
                  console.log("success");
                  console.log('data', data.objectId);
                  $state.go('base.editImg', {id:data.objectId});
                }
              });
          });
      }
  }]);
