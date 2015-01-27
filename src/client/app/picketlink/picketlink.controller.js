(function () {
    'use strict';

    angular
        .module('app.picketlink')
        .controller('PicketlinkController', picketlink);

    picketlink.$inject = [''];

    /* @ngInject */
    function picketlink() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'picketlink';

        activate();

        ////////////////

        function activate() {
        }
    }
})();