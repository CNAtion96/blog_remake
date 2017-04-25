(function() {
    'use strict';

    angular
        .module('scottBlog')
        .controller('createBlogController', function(data) {
            const vm = this;
                vm.submitBlog = function(valid){
                if(valid){
                    let blog = vm.blog;
                    let newBlog = Object.assign({}, blog);
                    console.log(newBlog);
                    let addnewBlog = data.addBlog(newBlog);
                    addnewBlog.then(response=>{
                        console.log(response);
                        vm.blogs = response.data;
                        console.log(vm.blogs);
                    })
                    document.getElementById('title').value = "";
                    document.getElementById('url').value = "";
                    document.getElementById('content').value = "";
                    vm.blog = {};
                    swal({
                        text:'Blog posted successfully!',
                        type:'success'
                    })
                }else{
                    swal({
                        text:'You forgot something!',
                        type:'error'
                    })
                }
            }
        });
        
})();