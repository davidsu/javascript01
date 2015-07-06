doresh(
    './dom/cartPopUp.js',
    [],
    function(){
        var popUp = document.querySelector('.popup-cart');
        function init(){
            var closePopUpButton = document.querySelector('#close-popup-cart');
            closePopUpButton.addEventListener('click', function(){
                popUp.style.visibility = 'hidden';
            });


        }





        init();
        return {};
    }
);