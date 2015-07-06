doresh('resetTableRows.js',
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
            )
        };

        var cartEvent = {
            minus: function (obj){
                return function(){
                    resetTotal();
                    return cart.removeFromCart(obj).qty.toString();
                }
            },
            plus: function (obj){
                return function(){
                    var cartInfo = cart.addToCart(obj);
                    if (!cartInfo.success) {
                        alert("can't sell you more or you'll get addicted!");
                        return;
                    }
                    resetTotal();
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


//**************************************************************************************************************************************
        function resetTotal() {
            var totalPlaceHolder = document.querySelector('#total-placeholder');
            totalPlaceHolder.innerHTML = cart.getTotal();
        }







        function createPlusMinusCell(obj) {
            var td = createTd('');

            var cartItem = cart.getItemInChart(obj.id);

            var labelQty = document.createElement('span');
            labelQty.innerHTML = cartItem ? cartItem.qty : 0;
            labelQty.style.margin = 0;

            var btnPlus = createButton('+');
            var btnMinus = createButton('-');

            btnPlus.setAttribute('data-limit', obj.limit.toString());

            btnPlus.onclick = function (event) {
                var cartInfo = cart.addToCart(obj);
                if (!cartInfo.success) {
                    alert("can't sell you more or you'll get addicted!");
                    return;
                }
                labelQty.innerHTML = cartInfo.qty.toString();
                resetTotal();
            };

            btnMinus.onclick = function () {
                labelQty.innerHTML = cart.removeFromCart(obj).qty.toString();
                resetTotal();
            };

            td.appendChild(btnMinus);
            td.appendChild(btnPlus);
            td.appendChild(labelQty);

            return td;
        }

        function createButton(innerText) {
            var btn = document.createElement('button');
            btn.appendChild(document.createTextNode(innerText));
            return btn;
        }

        function createTd(innerHtml) {
            var td = document.createElement('td');
            td.innerHTML = innerHtml;
            return td;
        }

//**************************************************************************************************************************************
        return {
            reset: reset
        }
    }
);