doresh('./js/dom_manipulation/dom_manipulation.js',
    [],
    function () {

        function appendElementChild(child, parent){
            parent.appendChild(child);
        }

        return{
            appendElementChild: appendElementChild
        }
    }
);