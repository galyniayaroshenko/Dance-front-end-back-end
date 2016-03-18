angular.module('app')
.controller('LanguageEditController', ['Language', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
  function (Language, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
    Language.getOne({action: $stateParams.id}, function(data) {
      $scope.language = data;
    });
    $scope.updateLanguage = function() {
      $scope.load = "loading";
      Language.update({action: $stateParams.id}, $scope.language, function(data) {
        if (data) {
          $scope.load = '';
        }
      });
    }
}]);
