define(
    [
        '../cart.js',
        '../dom/cartPopUp.js',
        '../dom/tblCreator.js',
        '../tblUtils.js',
        '../lib/lodash.js'
    ],
    function(cart, domCartPopUp, tblCreator, tblUtils, _){

        var HEADERS = ['id', 'name', 'price', 'qty', 'total'];
        var headersRow = tblUtils.createHeadersRow(HEADERS);

        var composed = {
            createRow: _.compose(
                tblCreator.createRow,
                createCells
            ),
            prepareTblWithHeaders: _.compose(
                appendHeader,
                tblCreator.getDetachedPlaceholder
            )
        };

        function appendHeader(placeholder) {
            return domCartPopUp.insertChildToParent(placeholder, headersRow);
        }

        function createCells(obj){
            var result = [];
            for(var i = 0; i<HEADERS.length; i++){
                var key = HEADERS[i];
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
            _.compose(
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