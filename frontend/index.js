import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'css/example';

const myApp = angular.module('myApp', [uiRouter]);

myApp.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('todos', {
            url: '/',
            template: require('todos/todos.html')
        })
        .state('about', {
            url: '/about',
            template: require('about/about.html')
        });

    //$locationProvider.html5Mode(true);
});
