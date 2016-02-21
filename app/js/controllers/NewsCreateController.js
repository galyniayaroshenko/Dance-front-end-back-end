
  angular.module('app')
    .controller('NewsCreateController', ['News', '$scope', 'fileUpload', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http', '$sce',
      function(News, $scope, fileUpload, $stateParams, $scope, $state, Upload, $timeout, host, $http){
      $scope.news = {};

           $scope.createNews = function(file) {
             $scope.load = "loading";
             console.log($scope.news);
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
                   console.log($scope.news.img);
                   News.create($scope.news, function(data) {
                     if (data) {
                       console.log("success");
                       $state.go('base.editNews');
                     }
                   });
               });
           }
       }]);
