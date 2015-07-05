doresh('./js/resetTableRows.js',
    [
        './js/cart.js',
        './js/dom_manipulation/main_table_helper.js',
        './js/dom_manipulation/element_manipulation.js'
    ],
    function(cart, tblCreator, elManipulator) {
        return function (iterator) {

            while (iterator.hasNext()) {
                var currObj = iterator.next();
                var row = tblCreator.createRowFromObject(currObj);
                elManipulator.setAttribute(row, 'data-id', currObj.id);
                tblCreator.appendChild(createPlusMinusCell(obj));
                tblCreator.appendElementChild(row);
            }

            tblCreator.finalizeReset();

            function createPlusMinusCell(obj){

            }

            function resetTotal(){
                var totalPlaceHolder = document.querySelector('#total-placeholder');
                totalPlaceHolder.innerHTML = cart.getTotal();
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