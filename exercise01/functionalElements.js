/**
 * Created by davidsusskind on 7/6/15.
 */
doresh('functionalElements',
      [],
      function () {
            return{
                  fcompose: function(){
                        var funcs = Array.prototype.slice.call(arguments);
                        //var funcs = arrayOf(func)(argsOfCompose);

                        // return a function that applies all the functions
                        return function() {
                              var argsOfFuncs = arguments;
                              for (var i = funcs.length; i > 0; i -= 1) {
                                    argsOfFuncs = [funcs[i-1].apply(this, argsOfFuncs)];
                              }
                              return argsOfFuncs[0];
                        };
                  }
            }

      }
);