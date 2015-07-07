doresh('cartPopUpManager.js',
    [
        'cart',
        './dom/cartPopUp.js',
        './dom/tblCreator.js',
        'tblUtils.js',
        'functionalElements.js'
    ],
    function(cart, domCartPopUp, tblCreator, tblUtils, functional){

        var headers = ['id', 'name', 'qty', 'price', 'total'];
        var headersRow = tblUtils.createHeadersRow(headers);


        var composed = {
            createRow: functional.fcompose(
                tblCreator.createRow,
                createCells
            ),
            prepareTblWithHeaders: functional.fcompose(
                appendHeader,
                tblCreator.getDetachedPlaceholder
            )
        };

        function appendHeader(placeholder) {
            return domCartPopUp.insertChildToParent(placeholder, headersRow);
        }

        function createCells(obj){
            var result = [];
            for(var i = 0; i<headers.length; i++){
                var key = headers[i];
                if(key === 'total'){
                    result.push(tblCreator.createCell(obj.qty*obj.price));
                }else{
                    result.push(tblCreator.createCell(obj[key]))
                }
            }
            return result;
        }





        var popUp = document.querySelector('.popup-cart');
        var showCartButton = document.querySelector('#show-cart-button');
        showCartButton.addEventListener('click', function(){
            if(reset()) {
                popUp.style.visibility = 'visible';
            }
        });



        function appendTblBody(placeholder, iterator){
            while(iterator.hasNext()){
                domCartPopUp.insertChildToParent(
                    placeholder,
                    composed.createRow(iterator.next())
                );
            }
            return placeholder;
        }

        function reset(){

            functional.fcompose(
                domCartPopUp.reset,
                appendTblBody
            )(composed.prepareTblWithHeaders(), cart.getIterator());
            return true;
        }


        return{
            reset: reset
        };
    }
);