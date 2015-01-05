'use strict';

app.controller('UserCatalogController', ['$scope', '$rootScope', 'userCatalog',
    function ($scope, $rootScope, userCatalog) {
        $rootScope.pageTitle = 'My Ads';

        userCatalog.getCatalog().then(function () {
            console.log('Get');
        })

    }
]);