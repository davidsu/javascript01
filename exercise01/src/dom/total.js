define(
    function () {
        'use strict';
        function resetTotal(newTotal) {
            var totalPlaceHolder = document.querySelector('#total-placeholder');
            totalPlaceHolder.innerHTML = newTotal;
        }

        return {
            resetTotal: resetTotal
        };
    }
);