(function() {
  angular.module('mymeanblog')
         .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [
      {
        _id: '0912490qwer12312rwqer12j0921e83',
        title: 'some title',
        body: 'foiwenfoinweoifnoiwnefoiwneofinwoeinf owine foiwne foiwne foiwne foinw efoin weoifn woei nfoweinfowi enfowie nfoiefnowienfowienf owinf owinef owienf oin eofinweoifnwoeinf oiwen foiwne foinw eoin oienwfoinweofin woeinfowiefnowie nfoweifn',
        created: new Date(),
        updated: new Date()
      },
      {
        _id: '091235u091238501923850192385019',
        title: 'some title',
        body: 'foiwenfoinweoifnoiwnefoiwneofinwoeinf owine foiwne foiwne foiwne foinw efoin weoifn woei nfoweinfowi enfowie nfoiefnowienfowienf owinf owinef owienf oin eofinweoifnwoeinf oiwen foiwne foinw eoin oienwfoinweofin woeinfowiefnowie nfoweifn',
        created: new Date(),
        updated: new Date()
      }
    ];

    function edit(post){
      console.log('moving to the edit page');
    }
    function deletePost(post){
      console.log('deleting the post with _id of' + post._id);
    }
  }

}());
