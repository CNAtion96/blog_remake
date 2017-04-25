(function() {
    'use strict';

    angular
        .module('scottBlog', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){
        
            $urlRouterProvider.otherwise('/')
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '../partials/home.html',
                    controller: 'blogController',
                    controllerAs: 'vm'    
                })
                .state('create', {
                    url: '/create',
                    templateUrl: '../partials/create.html',
                    controller: 'createBlogController',
                    controllerAs: 'vm'
                })
                .state('singleBlog', {
                    url: '/blog',
                    templateUrl: '../partials/singleblog.html',
                    controller: 'singleBlogController',
                    controllerAs: 'vm'
                })
        });
        
})();