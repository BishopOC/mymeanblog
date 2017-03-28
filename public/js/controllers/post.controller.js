(function(){
  angular.module('mymeanblog')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService', '$routeParams'];

  function PostController($scope, PostService, $routeParams){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: 'e2309rj23r23r',
      title: 'owqeifnoiqwnefoinqwef',
      body:'oinweofinqowienfoiqnwefoinqwoeifnoiwnqoifno',
      created: new Date(),
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
