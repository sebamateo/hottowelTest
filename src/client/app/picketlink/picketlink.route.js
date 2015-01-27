/**
 * Created by sebastian on 27/01/15.
 */
(function() {
    'use strict';

    angular
        .module('app.picketlink')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'picketlink',
                config: {
                    url: '/picketlink',
                    templateUrl: 'app/picketlink/login.html',
                    controller: 'PicketLinkController',
                    controllerAs: 'vm',
                    title: 'PicketLink Login',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> PicketLink'
                    }
                }
            }
        ];
    }
})();
