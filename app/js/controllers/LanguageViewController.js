angular.module('app')
  .controller('LanguageViewController', ['$scope','$stateParams', 'Language',
    function($scope, $stateParams, Language) {
      Language.getOne({action:$stateParams.id},function(data){
        $scope.languageView = data;
        });
  }]);
