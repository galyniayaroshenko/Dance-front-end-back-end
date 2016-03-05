angular.module('app')
.controller('LanguageCreateController', ['Language', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
  function (Language, $stateParams, $scope, $state, Upload, $timeout, host, $http) {

  $scope.language = {};


  $scope.createLanguage = function() {
    console.log($scope.language);
    $scope.load = "loading";
    Language.create($scope.language, function(data) {
      if (data) {
        $scope.load = '';
        console.log("success");
        $state.go('base.editLanguage', {id:data.objectId});
      }
    });
  }
}]);
