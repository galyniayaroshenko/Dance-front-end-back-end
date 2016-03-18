angular.module('app')
.controller('LanguageCreateController', ['Language', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
  function (Language, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
  $scope.language = {};
  $scope.createLanguage = function() {
    $scope.load = "loading";
    Language.create($scope.language, function(data) {
      if (data) {
        $scope.load = '';
        $state.go('base.editLanguage', {id:data.objectId});
      }
    });
  }
}]);
