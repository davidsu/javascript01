doresh('mainTblManager.js',
    [
        'cart',
        'functionalElements',
        './dom/tblCreator',
        './dom/mainTbl'
    ],
    function (cart, functional, tblCreator, domMainTblHelper) {
        var headers = ['id', 'name', 'desc', 'price', 'cart'];
        var headersRow = createHeadersRow();

        var composed = {
            createRow: functional.fcompose(
                tblCreator.createRow,
                createCells
            ),
            prepareTblWithHeaders: functional.fcompose(
                appendHeader,
                tblCreator.getDetachedPlaceholder
            ),
            resetTotal: functional.fcompose(
                domMainTblHelper.resetTotal,
                cart.getTotal
            )
        };

        var cartEvent = {
            minus: function (obj){
                return function(){
                    var returnval = cart.removeFromCart(obj).qty.toString();
                    composed.resetTotal();
                    return returnval;
                }
            },
            plus: function (obj){
                return function(){
                    var cartInfo = cart.addToCart(obj);
                    if (!cartInfo.success) {
                        alert("can't sell you more or you'll get addicted!");
                        return;
                    }
                    composed.resetTotal();
                    return cartInfo.qty.toString();
                }
            }
        };

        function appendHeader(placeholder) {
            return domMainTblHelper.insertChildToParent(placeholder, headersRow);
        }

        function createHeaderCells() {
            var headerCells = [];
            headers.forEach(function (column) {
                headerCells.push(tblCreator.createHeaderCell(column));
            });
            return headerCells;
        }

        function createHeadersRow() {
            var rowAfterChildren = functional.fcompose(
                tblCreator.createHeadersRow,
                createHeaderCells
            );
            return rowAfterChildren();
        }

        function createCells(obj) {
            var result = [];
            for(var i = 0; i<headers.length; i++){
                var key = headers[i];
                if (key === 'cart') {
                    result.push(createCartPlusMinusCell(obj));

                } else {
                    result.push(tblCreator.createCell(obj[key], key));
                }
            }
            return result;
        }

        function createCartPlusMinusCell(obj){
            var cartItem = cart.getItemInChart(obj.id);

            var labelQty = domMainTblHelper.createCartLabel(cartItem ? cartItem.qty : 0);
            var plusButton = domMainTblHelper.createCartAddRemoveButton(cartEvent.plus(obj), labelQty, '+');
            var minusButton = domMainTblHelper.createCartAddRemoveButton(cartEvent.minus(obj), labelQty, '-');
            return domMainTblHelper.createCartCell(plusButton, minusButton, labelQty);
        }

        function appendTblBody(placeholder, iterator) {
            while (iterator.hasNext()) {
                domMainTblHelper.insertChildToParent(
                    placeholder,
                    composed.createRow(iterator.next())
                );
            }
            return placeholder;
        }

        function reset(iterator) {
            functional.fcompose(
                domMainTblHelper.reset,
                appendTblBody
            )(composed.prepareTblWithHeaders(), iterator);
        }

        function init(iterator){
            reset(iterator);
        }

        return {
            reset: reset,
            init: init
        }
    }
);