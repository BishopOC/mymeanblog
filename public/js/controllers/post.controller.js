(function() {
  angular.module('mymeanblog')
         .controller('PostController', PostController);
  PostController.$inject = ['$scope', 'PostService', '$routeParams'];

  function PostController($scope, PostService, $routeParams){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: '1234567890',
      title: 'poqwepqowerpqowejr',
      body: 'qwoiefnoqwiefnoqwienfqowienfqoiwenf',
      create: new Date(),
      updated: new Date()
    };
    var id = $routeParams.postId;
    PostService.getOne(id)
               .then(function(){
                 console.log('success');
               })
               .catch(function(){
                 console.log('err');
               });
    function edit(post){
      console.log('editing the post');
    }

    function create(post){
      PostService.create(post);
    }
  }
}());
