//jshint -W119
(function(){
  angular.module('mymeanblog')
         .factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    var baseURL = '/users';
    var signUpURL = '/signup';
    var loginURL = '/login';
    var user = [];

    function fetch(){
      return user;
    }

    function getAll(){
      return $http.get(baseURL)
                  .then(function(response){
                    user = response.data.user;
                    console.log(user);
                  });
    }

    function signUp(user){
      return $http.post(signUpURL, user)
                  .then(function(response){
                    return response;
                  });
    }

    function login(user){
      return $http.post(loginURL, user)
                  .then(getAll);
    }

    function getOne(user){
      return $http.get(`${baseURL}/${user._id}`)
                  .then(getAll);
    }

    function update(user){
      return $http.put(`${baseURL}/${user._id}`)
                  .then(getAll);
    }


    function deleteUser(user){
      return $http.delete(`${baseURL}/${user._id}`)
                  .then(getAll);
    }

    return {
      getAll: getAll,
      signUp: signUp,
      login: login,
      getOne: getOne,
      update: update,
      delete: deleteUser,
      fetch: fetch
    };
  }
})();
