(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('securityService', securityService);


    function securityService() {

        var userName = '', password = '';

        var service = {
            userName: userName,
            password: password,
            initSession: initSession,
            endSession:endSession,
            getToken:getToken,
            secureRequest:secureRequest
        };

        return service;

        ////////////////

        function initSession(response) {
            console.log("[INFO] Initializing user session.");
            console.log("[INFO] Token is :" + response.authctoken);
            console.log("[INFO] Token Stored in session storage.");
            // persist token, user id to the storage
            sessionStorage.setItem('token', response.authctoken);
        };

        function endSession() {
            console.log("[INFO] Ending User Session.");
            sessionStorage.removeItem('token');
            console.log("[INFO] Token removed from session storage.");
        };

        function getToken() {
            return sessionStorage.getItem('token');
        };

        function secureRequest(requestConfig) {
            var token = this.getToken();

            if(token != null && token != '' && token != 'undefined') {
                console.log("[INFO] Securing request.");
                console.log("[INFO] Setting x-session-token header: " + token);
                requestConfig.headers['Authorization'] = 'Token ' + token;
            }
        };
    }
})();