(function(){
  angular.module('mymeanblog')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: 'e2309rj23r23r',
      title: 'owqeifnoiqwnefoinqwef',
      body:'oinweofinqowienfoiqnwefoinqwoeifnoiwnqoifno',
      created: new Date(),
      updated: new Date()
    };

    function edit(post){
      console.log('editing the post');
    }

    function create(post){
      PostService.create(post);
    }
  }
}());
