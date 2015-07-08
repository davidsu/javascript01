doresh('utils.js',
    [],
    function() {
        var typeOf = function(type) {
            return function(x) {
                if (typeof x === type) {
                    return x;
                } else {
                    throw new TypeError("Error: "+type+" expected, "+typeof x+" given.");
                }
            }
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
            inherit: function(C, P) {
                var F = function () {};
                F.prototype = P.prototype;
                C.prototype = new F();
                C.uber = P.prototype;
                C.prototype.constructor = C;
            },
            getCtorName: function(obj){
                var ctorStr = func(obj.__proto__.constructor).toString();
                var startIdx = 'function '.length;
                var endIdx = ctorStr.indexOf('(');
                return ctorStr.substring(startIdx, endIdx);
            }

        }
    }
);

