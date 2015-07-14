doresh('./managers/cartPopUp.js',
    [
        'cart.js',
        './dom/cartPopUp.js',
        './dom/tblCreator.js',
        'tblUtils.js',
        'functionalElements.js'
    ],
    function(cart, domCartPopUp, tblCreator, tblUtils, functional){

        var headers = ['id', 'name', 'price', 'qty', 'total'];
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
                switch(key){
                    case 'total':
                        result.push(tblCreator.createCell(
                            (obj.qty*obj.getPrice()).toFixed(2)
                        ));
                        break;
                    case 'price':
                        result.push(tblCreator.createCell(
                            obj.getPrice().toFixed(2)
                        ));
                        break;
                    default:
                        result.push(tblCreator.createCell(obj[key]))
                }

            }
            return result;
        }

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

        function init(){
            domCartPopUp.setShowCartListener(cart.isEmpty, reset);
        }

        init();

        return{
            reset: reset
        };
    }
);