angular.module('app')
.controller('ImgListController', ['$scope', '$state', '$window', 'Img',
  function($scope, $state, $window, Img) {
    Img.get(function(data){
      $scope.imgList = data.results;
    });
  $scope.deleteImg = function (arg) {
    $scope.arg = arg;
    if(confirm("Видалити?")){
    Img.delete({ action: $scope.arg.id }, function () {
      Img.get(function(data){
        $scope.imgList = data.results;
      });
    });
  };
  };
}]);
