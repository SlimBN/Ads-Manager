'use strict';

app.controller('EditAdController', ['$scope', '$rootScope', 'userCatalog',
    function ($scope, $rootScope, userCatalog) {
        $rootScope.pageTitle = 'Edit Ad';

        $scope.editAd = function (ad) {
            console.log(ad);
        }
    }
]);