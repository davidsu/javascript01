define(
    [],
    function () {
        'use strict';
        var typeOf = function (type) {

            return function (x) {
                if (typeof x !== type) {
                    throw new TypeError('Error: ' + type + ' expected, ' + typeof x + ' given.');
                }
                return x;
            };
        };

        var str = typeOf('string'),
            num = typeOf('number'),
            func = typeOf('function'),
            bool = typeOf('boolean');

        return {
            isString: str,
            isNum: num,
            isFunc: func,
            isBool: bool,
            isNumeric: function (n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            },
            inherit: function (C, P) {
                var F = function () {
                };
                F.prototype = P.prototype;
                C.prototype = new F();
                C.uber = P.prototype;
                C.prototype.constructor = C;
            },
            getCtorName: function (obj) {
                var ctorStr = func(Object.getPrototypeOf(obj).constructor).toString();
                var startIdx = 'function '.length;
                var endIdx = ctorStr.indexOf('(');
                return ctorStr.substring(startIdx, endIdx);
            }

        };
    }
);

