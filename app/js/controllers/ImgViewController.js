angular.module('app')
  .controller('ImgViewController', ['$scope','$stateParams', 'Img', 'Year', '$http',
    function($scope, $stateParams, Img, Year, $http) {
      // function YearReturn(objectId) {
      //   return {
      //       method: 'GET',
      //       url: 'https://api.parse.com/1/classes/year',
      //       params: {
      //           where: {Year:{__type:"Pointer",className:"year",objectId:objectId}},
      //       }
      //   }
      // }
       var items1 = $scope.items1 = [];
        $http.get('https://api.parse.com/1/classes/Portholio/'+$stateParams.id).then(function(result) {
               $scope.year = result.data;

              //  angular.forEach(result, function(item, index){
              //       items1[index] = item;

                    console.log('it', $scope.year);
                    console.log('year', $scope.year.year.objectId);
                // $http(YearReturn($scope.year.year.objectId)).success(function(resp) {

            $http.get('https://api.parse.com/1/classes/year'+'iyVSnOoROX').then(function(resp) {



                //   angular.forEach(resp.results, function(item, index2){
                //  items2[index2] = item;
                //  $scope.items2 = items2[index2];

            //      console.log("it2", $scope.items2);
            //    }
            //  });

                  $scope.result = resp;
                  console.log('result', $scope.result);

                   //console.log('yeS', $scope.year);

             });
           });

    console.log($stateParams.id);
    Img.get({action:$stateParams.id},function(data){
      $scope.imgView = data;
        console.log('iV', $scope.imgView);
      });
  }]);
