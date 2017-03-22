(function(){
  angular.module('mymeanblog')
         .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var baseURL = '/posts';
    var post = [];

    function fetch(){
      return post;
    }

    function getAll(){
      return $http.get(baseURL)
                  .then(function(response){
                    post = response.data.post;
                    console.log(post);
                  });
    }

    function getOne(post){
      return $http.get(`${baseURL}/${post._id}`, post)
                  .then(getAll);
    }

    function create(post){
      return $http.post(baseURL, post)
                  .then(getAll);
    }

    function update(post){
      return $http.put(`${baseURL}/${post._id}`, post)
                  .then(getAll);
    }

    function deletePost(post){
      return $http.delete(`${baseURL}/${post._id}`)
                  .then(getAll);
    }


    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      delete: deletePost,
      update: update,
      fetch: fetch
    };
  }
})()
