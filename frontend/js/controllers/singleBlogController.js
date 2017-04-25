(function() {
    'use strict';

    angular
        .module('scottBlog')
        .controller('singleBlogController', function(data) {
            const vm = this;
            
            let id = localStorage.getItem('id') ;
            let blog = data.getBlog(id);
            blog.then(response=>{
                let aBlog = response.data;
                vm.blog = [aBlog];
                console.log(vm.blog);
            })

            vm.warn = function(id){
                let blogId = id;
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function () {
                    vm.deleteBlog(blogId);
                        swal(
                            'Deleted!',
                            'Your blog has been deleted.',
                            'success'
                        )
                    }, function (dismiss) {
                    if (dismiss === 'cancel') {
                        swal(
                            'Cancelled',
                            'Your blog is safe :)',
                            'error'
                        )
                    }
                    })
            }
            vm.deleteBlog = function(id){
                let removeBlog = data.deleteBlog(id);
                removeBlog.then(response=>{
                    console.log(response);
                })
            }
        });
        
})();