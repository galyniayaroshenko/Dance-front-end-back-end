angular.module('app')
.controller('ContactListController', ['$scope', '$state', '$window', 'Contact', function($scope, $state, $window, Contact) {
  $scope.contactList = Contact.get(function(data){
    $scope.contactList = data.results
    });
console.log($scope.contactList);

  $scope.deleteContact = function (arg) {
    $scope.arg = arg;
    if(confirm("Видалити?")){
    Contact.delete({ action: $scope.arg.id }, function () {
      Contact.get(function(data){
        $scope.contactList = data.results;
      });
    });
  };
  };

}]);
