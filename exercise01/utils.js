doresh('utils.js',
    [],
    function() {
        return {
            isNumeric: function (n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            },
            inherit: function(C, P) {
                var F = function () {};
                F.prototype = P.prototype;
                C.prototype = new F();
                C.uber = P.prototype;
                C.prototype.constructor = C;
            }

        }
    }
);

