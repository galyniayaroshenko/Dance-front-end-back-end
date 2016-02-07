angular.module('app')
  .controller('AboutUsViewController', ['$scope','$stateParams', 'AboutUs', function($scope, $stateParams, AboutUs) {
    console.log($stateParams.id);
    AboutUs.getOne({action:$stateParams.id},function(data){
      $scope.aboutUsView = data;
        console.log($scope.aboutUsView);
      });
  }]);
