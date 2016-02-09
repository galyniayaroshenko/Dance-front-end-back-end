angular.module('app')
  .controller('ImgViewController', ['$scope','$stateParams', 'Img', function($scope, $stateParams, Img) {
    console.log($stateParams.id);
    Img.get({action:$stateParams.id},function(data){
      $scope.imgView = data;
        console.log('iV', $scope.imgView);
      });
  }]);
