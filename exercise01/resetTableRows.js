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
            var createRow = functional.fcompose(
                  tblCreator.createRow,
                  createCells
            );

            var prepareTblWithHeaders = functional.fcompose(
                  appendHeader,
                  tblCreator.getDetachedPlaceholder
            );


            function appendHeader(placeholder){
                  return domMainTblHelper.insertChildToParent(placeholder, headersRow);
            }

            function createHeaderCells(){
                  var headerCells = [];
                  headers.forEach(function(column){
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
                  headers.forEach(function(key){
                        if(key==='cart'){

                        }else {
                              result.push(tblCreator.createCell(obj[key], key));
                        }
                  });
                  return result;
            }

            function appendTblBody(placeholder, iterator){
                  while(iterator.hasNext()){
                        domMainTblHelper.insertChildToParent(placeholder, createRow(iterator.next()));
                  }
                  return placeholder;
            }

            function reset(iterator) {
                  functional.fcompose(
                        domMainTblHelper.reset,
                        appendTblBody
                  )(prepareTblWithHeaders(), iterator);
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