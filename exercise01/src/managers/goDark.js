define(
    function () {
        var DARK_PATH = './css/themes/theme-dark/main.css';
        var BRIGHT_PATH = './css/themes/theme-bright/main.css';
        var darkCheckBox = document.querySelector('#btn-go-dark');
        var styleElement = document.querySelector('#main-css-file');
        darkCheckBox.onclick = function(){
            var currentStyle = styleElement.getAttribute('href');
            if(currentStyle === BRIGHT_PATH){
                styleElement.setAttribute('href', DARK_PATH);
                darkCheckBox.firstChild.data = 'Go Bright';
            }else{

                styleElement.setAttribute('href', BRIGHT_PATH);
                darkCheckBox.firstChild.data = 'Go Dark';
            }

        }
    });