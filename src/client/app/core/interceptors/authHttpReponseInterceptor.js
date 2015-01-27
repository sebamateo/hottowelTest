(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('authHttpReponseInterceptor', authHttpReponseInterceptor);

    authHttpReponseInterceptor.$inject = ['$q', '$state', 'SecurityService', 'messageService'];

    /* @ngInject */
    function authHttpReponseInterceptor($q, $state, SecurityService, messageService) {
        var service = {
            'request' : request,
            'response' : response,
            'responseError' : responseError
        };

        return service;

        ////////////////

        function request(config) {
            SecurityService.secureRequest(config);
            return config || $q.when(config);
        }

        function response(response) {
            return response || $q.when(response);
        }

        function responseError(rejection) {
            console.log("Server Response Status: " + rejection.status);
            console.log(rejection);

            if (rejection.data && rejection.data.message) {
                messageService.setMessages(rejection.data.message);
            } else {
                messageService.setMessages(["Unexpected error from server."]);
            }

            if (rejection.status === 401) {
                console.log("[INFO] Unauthorized response.");
                SecurityService.endSession();
                $state.go('dashboard');
                messageService.setMessages(["Please, provide your credentials."]);
            } else if (rejection.status == 400) {
                console.log("[ERROR] Bad request response from the server.");
            } else if (rejection.status == 500) {
                console.log("[ERROR] Internal server error.");
            } else {
                console.log("[ERROR] Unexpected error from server.");
            }

            return $q.reject(rejection);
        }
    }
})();