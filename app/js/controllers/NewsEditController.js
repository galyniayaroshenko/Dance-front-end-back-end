angular.module('app')
  .controller('NewsEditController', ['News', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
    function (News, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
      News.getOne({action: $stateParams.id}, function(data) {
        $scope.news = data;
      });
      $scope.updateNews = function(file) {
        $scope.load = "loading";
          $http.post("https://api.parse.com/1/files/"+ file.name, file, {
             withCredentials: false,
             headers: {
                 'Content-Type': 'image/jpeg'
             },
             transformRequest: angular.identity
          }).then(function(data) {
              $scope.load = '';
              file.result = data.data;
              $scope.news.img = file.result;
              $scope.news.img.__type = "File";
              News.update({action: $stateParams.id}, $scope.news, function(data) {
                if (data) {
                  console.log("success");
                }
              });
          });
      }
  }]);
