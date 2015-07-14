doresh('./managers/goDark.js',
    [],
    function () {
        var darkCheckBox = document.querySelector('#btn-go-dark');
        var styleElement = document.querySelector('#main-css-file');
        darkCheckBox.onclick = function(){
            var currentStyle = styleElement.getAttribute('href');
            if(currentStyle === 'css/main_bright.css'){
                styleElement.setAttribute('href', 'css/main_dark.css');
                darkCheckBox.firstChild.data = 'Go Bright';
            }else{

                styleElement.setAttribute('href', 'css/main_bright.css');
                darkCheckBox.firstChild.data = 'Go Dark';
            }
            //document.body.className = bodyClass;

        }
    });