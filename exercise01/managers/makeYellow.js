doresh('./managers/makeYellow.js',
    [],
    function () {
        var darkCheckBox = document.querySelector('#chk-make-yellow');
        darkCheckBox.onclick = function(){
            var bodyClass = "";
            if(darkCheckBox.checked){
                bodyClass = 'all-yellow';
            }
            document.body.className = bodyClass;

        }
    });