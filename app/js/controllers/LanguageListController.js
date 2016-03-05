angular.module('app')
.controller('LanguageListController', ['$scope', '$state', '$window', 'Language',
  function($scope, $state, $window, Language) {
  $scope.languageList = Language.get(function(data){
    $scope.languageList = data.results
    });
console.log('ll', $scope.languageList);

  $scope.deleteLanguage = function (arg) {
    $scope.arg = arg;
    if(confirm("Видалити?")){
    Language.delete({ action: $scope.arg.id }, function () {
      Language.get(function(data){
        $scope.languageList = data.results;
      });
    });
  };
  };

}]);
