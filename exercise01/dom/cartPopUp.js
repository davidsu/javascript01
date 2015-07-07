doresh(
    './dom/cartPopUp.js',
    [
        './dom/utils'
    ],
    function(domUtils){
        var popUp = document.querySelector('.popup-cart');
        function init(){
            var closePopUpButton = document.querySelector('#close-popup-cart');
            closePopUpButton.addEventListener('click', function(){
                popUp.style.visibility = 'hidden';
            });
        }

        function reset(newlyBuiltTable){
            var tblPlaceHolder = document.querySelector('.table.pop-up-cart-table');
            tblPlaceHolder.innerHTML = '';
            tblPlaceHolder.appendChild(newlyBuiltTable);
        }





        init();
        return {
            reset: reset,
            insertChildToParent: domUtils.insertChildToParent
        };
    }
);