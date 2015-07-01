doresh('resetTableRows.js',
    ['cart'],
    function(cart) {
        return function (iterator) {
            var fragment = document.createDocumentFragment();
            var tbody = document.querySelector('tbody');
            var tblColumnOrder = getTableColumnOrder();


            while (iterator.hasNext()) {
                var tr = createRowFromObject(iterator.next());
                fragment.appendChild(tr);
            }

            tbody.appendChild(fragment);

            function getTableColumnOrder() {
                var trHeader = document.querySelector('#table-headers');
                var keys = [];
                var child = trHeader.firstElementChild;
                while (child) {
                    if (child.getAttribute && child.getAttribute('data-field')) {
                        keys.push(child.getAttribute('data-field'));
                    }
                    child = child.nextSibling;
                }
                return keys;
            }

            function createRowFromObject(obj) {
                var tr = document.createElement('tr');
                tblColumnOrder.forEach(function (key) {
                    tr.appendChild(createTd(obj[key]));
                });
                tr.appendChild(createPlusMinusCell(obj));
                tr.setAttribute('data-id', obj.id);
                return tr;
            }

            function resetTotal(){
                var totalPlaceHolder = document.querySelector('#total-placeholder');
                totalPlaceHolder.innerHTML = cart.getTotal();
            }

            function createPlusMinusCell(obj){
                var td = createTd('');

                var cartItem = cart.getItemInChart(obj.id);

                var labelQty = document.createElement('span');
                labelQty.innerHTML = cartItem ? cartItem.qty: 0;
                labelQty.style.margin = 0;

                var btnPlus = createButton('+');
                var btnMinus = createButton('-');

                btnPlus.setAttribute('data-limit', obj.limit.toString());

                btnPlus.onclick = function(event){
                    var cartInfo = cart.addToCart(obj);
                    if(!cartInfo.success){
                        alert("can't sell you more or you'll get addicted!");
                        return;
                    }
                   labelQty.innerHTML = cartInfo.qty.toString();
                    resetTotal();
                };

                btnMinus.onclick = function(){
                    labelQty.innerHTML = cart.removeFromCart(obj).qty.toString();
                    resetTotal();
                };

                td.appendChild(btnMinus);
                td.appendChild(btnPlus);
                td.appendChild(labelQty);

                return td;
            }

            function createButton(innerText){
                var btn = document.createElement('button');
                btn.appendChild(document.createTextNode(innerText));
                return btn;
            }

            function createTd(innerHtml) {
                var td = document.createElement('td');
                td.innerHTML = innerHtml;
                return td;
            }
        }
    }
);