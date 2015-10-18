/// <reference path="typings/types.d.ts" />

import login from './modules/login/module';

angular.module('login', ['fds.ui', 'fds.core', login.name])

    .config(($urlRouterProvider, $configProvider, $securityProvider) => {
        var config = $configProvider.$get();

        $securityProvider.configure(config);
    });

/**
 * Bootstrap application
 */

angular.element(document).ready(() => {
    angular.bootstrap(document, ['login'], {});
});
