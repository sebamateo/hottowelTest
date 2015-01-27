(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('messageService', messageService);

    messageService.$inject = ['$rootScope'];

    /* @ngInject */
    function messageService($rootScope) {
        var service = {
            setMessages: setMessages,
            hasMessages: hasMessages,
            clearMessages: clearMessages
        };

        return service;

        ////////////////

        function setMessages(messages) {
            console.log(messages);
            $rootScope.messages = messages;
        }

        function hasMessages() {
            return $rootScope.messages && $rootScope.messages.length > 0;
        }

        function clearMessages() {
            $rootScope.messages = [];
        }
    }
})();