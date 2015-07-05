doresh('./js/dom_manipulation/main_table_helper.js',
    [
        './js/element_creation.js',
        './js/dom_manipulation.js',
    ],
    function (elCreator, manipulator) {

        var fragment, tbody, tblColumnOrder;

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

        function prepareReset() {
            fragment = document.createDocumentFragment();
            tbody = document.querySelector('#tbody');
            tblColumnOrder = getTableColumnOrder();
            tbody.innerHTML = "";
        }

        function createRowFromObject(obj) {
            var row = elCreator.createNewDivRow();
            tblColumnOrder.forEach(function (key) {
                var childElement = elCreator.createNewDivCell(createTd(obj[key]));
                manipulator.appendElementChild(childElement, row);
            });

            return row;
        }

        function createPlusMinusCell(obj){
            var cell = elCreator.createNewDivCell('');

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

        function appendElementChild(child){
            fragment.appendChild(child);

        }

        function finalizeReset(){
            tbody.appendChild(fragment);
        }

        return {
            prepareReset: prepareReset,
            createRowFromObject: createRowFromObject,
            appendToTBody: appendElementChild,
            finalizeReset: finalizeReset
        }
    }
);