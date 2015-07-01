doresh('utils.js',
    [],
    function() {
        return {
            isNumeric: function (n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }
        }
    }
);

