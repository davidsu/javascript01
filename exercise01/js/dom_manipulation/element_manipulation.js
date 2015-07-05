doresh('./js/dom_manipulation/element_manipulation.js',
    [],
    function () {

        function setAttribute(element, attName, attValue){
            element.setAttribute(attName, attValue);
        }

        return{
            setAttribute: setAttribute
        }
    }
);/**
 * Created by davidsu on 7/5/15.
 */
