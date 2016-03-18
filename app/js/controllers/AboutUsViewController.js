angular.module('app')
  .controller('AboutUsViewController', ['$scope','$stateParams', 'AboutUs', function($scope, $stateParams, AboutUs) {
    AboutUs.getOne({action:$stateParams.id},function(data){
      $scope.aboutUsView = data;
      });
  }]);
