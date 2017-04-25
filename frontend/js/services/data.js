(function() {
    'use strict';

    angular
        .module('scottBlog')
        .factory('data', function($http){

            return{
                getBlogs:() => {
                    return $http ({
                        method: "GET",
                        url: `http://localhost:8080/blog`,
                    })
                },

                getBlog:(id) => {
                    return $http ({
                        method:"GET",
                        url:`http://localhost:8080/blog/${id}`
                    })
                },

                addBlog:(data)=>{
                    return $http({
                        method:"POST",
                        data:data,
                        url: `http://localhost:8080/blog`
                    })
                },

                deleteBlog:(id)=>{
                    return $http({
                        method:"DELETE",
                        url:`http://localhost:8080/blog/${id}`
                    })
                }
                
            }

         });
        
})();