(function(){
  angular.module('mymeanblog')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    $scope.post = [];

    getPosts();

    function getPosts(){
      PostService.getAll();
    }
  }


})()
