﻿/// <reference path="../jquery-2.0.3.min.js" />
/// <reference path="../underscore-min.js" />

function BookLibCtrl_Demo4($scope) {
    $scope.bookList = [
{ 'name': 'Beginning Android 4 Application Development', 'auther': 'Wei-Meng Lee', 'price': 479 },
{ 'name': 'Beginning iOS 5: Application Development', 'auther': 'Wei-Meng Lee', 'price': 418 },
{ 'name': 'Beginning Android Tablet Application Development', 'auther': 'Wei-Meng Lee', 'price': 276 },
{ 'name': 'The Algorithm Design Manual', 'auther': 'Steven S. Skiena', 'price': 671 },
{ 'name': 'Programming Challenges: The Programming Contest Training Manual', 'auther': 'Steven S. Skiena', 'price': 3789 },
{ 'name': 'ASP.NET 4 Unleashed', 'auther': 'Stephen Walther', 'price': 680 },
{ 'name': 'ASP.NET MVC Framework Unleashed', 'auther': 'Stephen Walther', 'price': 1050 },
{ 'name': 'Windows 8 Apps with HTML5 and JavaScript Unleashed', 'auther': 'Stephen Walther', 'price': 2519 }];

    $scope.orderProp = '';    
    $scope.reverse = true;
    $scope.updateOrderBy = function (orderby) {
        $scope.orderProp = orderby;
        $scope.reverse = !$scope.reverse;
    }

};

function BookLibCtrl_Demo5($scope, $http) {
    $scope.bookList = new Array();

    $scope.orderProp = '';
    $scope.loadBooks = function () {
        $http.get("Scripts/jumpstart/bookList.json").success(
            function (data) {
                $scope.bookList = data;
            }
            );
    }
    $scope.reverse = true;
    $scope.updateOrderBy = function (orderby) {
        $scope.orderProp = orderby;
        $scope.reverse = !$scope.reverse;
    }

};

function Book() {
    var self = this;
    self.auther;
    self.name;
    self.price = 0;
}

function BookLibCtrl_Demo6($scope, $http) {
    $scope.bookList = new Array();
    $scope.book = new Book();
    $scope.orderProp = '';
    $scope.loadBooks = function () {
        $http.get("Scripts/jumpstart/bookList.json").success(
            function (data) {
                $scope.bookList =_.union($scope.bookList, data);
            }
            );
    }
    $scope.reverse = true;
    $scope.updateOrderBy = function (orderby) {
        $scope.orderProp = orderby;
        $scope.reverse = !$scope.reverse;
    }
    $scope.addBooks = function () {
        var nb2 = _.clone($scope.book);
        $scope.bookList.push(nb2);
        $scope.book = new Book();//Reset
        $('#hiddenBookAdd').modal('hide');
    }
};
function BookDetail($scope, $http,$routeParams) {
    $scope.book = new Book();
    var name = $routeParams.name;
    $http.get("Scripts/jumpstart/bookList.json").success(
            function (data) {
                var bookList = data;
                $scope.book = _.find(data, function (bk) {
                    return bk.name === name;
                });
            }
            );
    
};