(function() {
    'use strict';

    angular
        .module('scottBlog')
        .controller('blogController', function(data) {
            const vm = this;

            let blogs = data.getBlogs();
            blogs.then(response=>{
                vm.blogs = response.data;
                console.log(vm.blogs);
            })
            vm.setId = function(id){
                let blogId = localStorage.setItem('id', id);
                console.log(localStorage.getItem('id'));
            }
           
        });
        
})();