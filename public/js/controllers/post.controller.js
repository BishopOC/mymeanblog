(function(){
  angular.module('mymeanblog')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService', 'UserService'];

  function PostController($scope, PostService, UserService){
    $scope.post = [];
    $scope.user = [];
    $scope.newUser = {};
    $scope.newPost = {};
    $scope.addUser = addUser;
    $scope.addPost = addPost;

    getPosts();
    getUsers();
    function getPosts(){
      PostService.getAll();
    }
    function getUsers(){
      UserService.getAll();
    }

    function addUser(newUser){
      console.log('creating user...');
      UserService.signUp(newUser)
                 .then(function(response){
                   $scope.newUser = {};
                 });
    }

    function addPost(newPost){
      console.log('creating post...');
      PostService.create(newPost)
                 .then(function(response){
                   $scope.newPost = {};
                 });
    }
  }


})();
