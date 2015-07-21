define(
    [
        '../cart.js',
        '../dom/mainTbl.js',
        '../tblUtils.js',
        '../managers/total.js'
    ],
    function (cart, domMainTblHelper, tblUtils, totalManager) {
        'use strict';
        var HEADERS = ['id', 'name', 'desc', 'price', 'cart'];
        var headersRow = tblUtils.createHeadersRow(HEADERS);

        var cartEvent = {
            minus: function (obj) {
                return function () {
                    var returnval = cart.removeFromCart(obj).qty.toString();
                    totalManager.resetTotal();
                    return returnval;
                };
            },
            plus: function (obj) {
                return function () {
                    var cartInfo = cart.addToCart(obj);
                    if (!cartInfo.success) {
                        alert("can't sell you more or you'll get addicted!");// eslint-disable-line no-alert
                        return null;
                    }
                    totalManager.resetTotal();
                    return cartInfo.qty.toString();
                };
            }
        };

        function createRow(obj) {
            var cells = createItemsRowCells(obj);
            var classes = obj.getCtorName() +
                (obj.hasDiscount() ? ' coupon' : '');
            return domMainTblHelper.createRow(cells, classes);
        }

        function appendHeader(placeholder) {
            return domMainTblHelper.insertChildToParent(placeholder, headersRow);
        }

        function createCell(key, obj) {
            switch (key) {
                case 'cart':
                    return createCartPlusMinusCell(obj);
                case 'price':
                    if (obj.hasDiscount()) {
                        return domMainTblHelper.createToolTippedCell('$' + (obj.getPrice().toFixed(2)), 'full price: ' + obj.getFullPrice(), key);
                    }
                    return domMainTblHelper.createCell('$' + (obj.getPrice().toFixed(2)), key);
                default:
                    return domMainTblHelper.createCell(obj[key], key);
            }
        }

        function createItemsRowCells(obj) {
            var result = [];
            for (var i = 0; i < HEADERS.length; i++) {
                result.push(createCell(HEADERS[i], obj));
            }
            return result;
        }

        function createCartPlusMinusCell(obj) {
            var cartItem = cart.getItemInChart(obj.id);

            var labelQty = domMainTblHelper.createCartLabel(cartItem ? cartItem.qty : 0);
            var plusButton = domMainTblHelper.createCartAddRemoveButton(cartEvent.plus(obj), labelQty, '+');
            var minusButton = domMainTblHelper.createCartAddRemoveButton(cartEvent.minus(obj), labelQty, '-');
            return domMainTblHelper.createCartCell(plusButton, minusButton, labelQty);
        }

        function appendTblBody(iterator, placeholder) {
            while (iterator.hasNext()) {
                domMainTblHelper.insertChildToParent(
                    placeholder,
                    createRow(iterator.next())
                );
            }
            return placeholder;
        }

        function reset(iterator) {
            _.compose(
                domMainTblHelper.reset,
                appendTblBody.bind(null, iterator),
                appendHeader,
                domMainTblHelper.getDetachedPlaceholder
            )();

            /*same as above*/
            //_(domMainTblHelper.getDetachedPlaceholder())
            //    .thru(appendHeader)
            //    .thru(appendTblBody.bind(null, iterator))
            //    .thru(domMainTblHelper.reset)
            //    .value();

            /*same as above*/
            //var placeholder = domMainTblHelper.getDetachedPlaceholder();
            //appendHeader(placeholder);
            //appendTblBody(iterator, placeholder);
            //domMainTblHelper.reset(placeholder);

            /*same as above*/
            //domMainTblHelper.reset(
            //    appendTblBody(iterator,
            //        appendHeader(
            //            domMainTblHelper.getDetachedPlaceholder()
            //        )
            //    )
            //);



        }

        function init(iterator) {
            reset(iterator);
        }

        return {
            reset: reset,
            init: init
        };
    }
);