doresh('mainTblManager.js',
    [
        'cart.js',
        'functionalElements.js',
        './dom/mainTbl.js',
        'tblUtils.js',
        'itemTypes.js',
        'utils.js',
        './managers/total.js'
    ],
    function (cart, functional, domMainTblHelper, tblUtils, itemTypes, utils, totalManager) {
        var headers = ['id', 'name', 'desc', 'price', 'cart'];
        var headersRow = tblUtils.createHeadersRow(headers);

        var cartEvent = {
            minus: function (obj){
                return function(){
                    var returnval = cart.removeFromCart(obj).qty.toString();
                    totalManager.resetTotal();
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
                    totalManager.resetTotal();
                    return cartInfo.qty.toString();
                }
            }
        };

        function createRow(obj){
            var cells = createItemsRowCells(obj);
            var classes = utils.getCtorName(obj) +
                (obj.hasActiveCoupon()?" coupon":'');
            return domMainTblHelper.createRow(cells, classes);
        }

        function appendHeader(placeholder) {
            return domMainTblHelper.insertChildToParent(placeholder, headersRow);
        }

        function createItemsRowCells(obj) {
            var result = [];
            for(var i = 0; i<headers.length; i++){
                var key = headers[i];
                var cell = null;
                switch(key){
                    case 'cart':
                        cell = createCartPlusMinusCell(obj);
                        break;
                    case 'price':
                        var hasToolTip = obj.hasActiveCoupon() || obj instanceof itemTypes.OnSaleItem;
                        if(hasToolTip) {
                            cell = domMainTblHelper.createToolTippedCell('$' + (obj.getPrice().toFixed(2)), 'full price: ' + obj.getFullPrice(), key);
                        }else{
                            cell = domMainTblHelper.createCell('$'+(obj.getPrice().toFixed(2)), key);
                        }
                        break;
                    default:
                        cell = domMainTblHelper.createCell(obj[key], key);
                }
                result.push(cell);

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
                    createRow(iterator.next())
                );
            }
            return placeholder;
        }

        function reset(iterator) {
            var placeholder = domMainTblHelper.getDetachedPlaceholder();
            appendHeader(placeholder);
            appendTblBody(placeholder, iterator);
            domMainTblHelper.reset(placeholder);
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