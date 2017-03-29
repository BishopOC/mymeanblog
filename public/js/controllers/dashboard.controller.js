(function() {
  angular.module('mymeanblog')
         .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [
      {
        _id: 'r12r3123r132r',
        title: 'title',
        body: 'oqiw23r23r23renfoqiwnefoiqwnefoiqnwefoiqwnef',
        created: new Date(),
        updated: new Date()
      },
      {
        _id: '123412341234',
        title: 'title23r',
        body: 'oqiwenfoq3r23riwnefoiqwnefoiqnwefoiqwnef',
        created: new Date(),
        updated: new Date()
      },
      {
        _id: 'r12124t2354y23rgwer',
        title: 'titleewfqwefqwef',
        body: 'qwefqwefqwefqwefe12r3123r123r2nfoqiwnefoiqwnefoiqnwefoiqwnef',
        created: new Date(),
        updated: new Date()
      },
    ];

    function edit(post){
      console.log('moving to edit page');
    }
    function deletePost(post){
      console.log('deleting post with id of', post._id);
    }
  }
}());
