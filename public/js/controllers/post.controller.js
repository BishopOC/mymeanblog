(function(){
  angular.module('mymeanblog')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope',
                            'PostService',
                            '$routeParams',
                            'UserService',
                            '$location'];

  function PostController($scope, PostService, $routeParams, UserService, $location){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: 'e2309rj23r23r',
      title: 'owqeifnoiqwnefoinqwef',
      body:'oinweofinqowienfoiqnwefoinqwoeifnoiwnqoifno',
      created: new Date(),
      updated: new Date()
    };
    if($location.path().startsWith('/edit/')){
      editInit();
    }

    function editInit(){
      var id = $routeParams.postId;
      PostService.getOne(id)
                 .then(function(){
                   console.log('success');
                 })
                 .catch(function(){
                   console.log('err');
                 });
    }
    function edit(post){
      console.log('editing the post');
    }

    function create(post){
      var userId = UserService.currentUser()._id;
      console.log(userId);
      post.author = userId;
      PostService.create(post)
                 .then(function(){
                   $location.path('/dashboard');
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());
