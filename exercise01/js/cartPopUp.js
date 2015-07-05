doresh('./js/cartPopUp',
    ['./js/cart'],
    function(cart){
        var showCartButton = document.querySelector('#show-cart-button');
        var popUp = document.querySelector('.popup-cart');
        var closePopUpButton = document.querySelector('#close-popup-cart');

        showCartButton.addEventListener('click', function(){
            if(resetCartTable()) {
                popUp.style.visibility = 'visible';
            }
        });

        closePopUpButton.addEventListener('click', function(){
            popUp.style.visibility = 'hidden';
        });

        function resetCartTable(){
            var fragment = document.createDocumentFragment();
            var tbody = document.querySelector('#cart-popup-tbody');
            tbody.innerHTML = "";
            var tblColumnOrder = getTableColumnOrder();
            var _cart = cart.cart;


            for(var key in _cart){
                var tr = createRowFromObject(_cart[key]);
                fragment.appendChild(tr);
            }

            if(!fragment.children.length){
                alert('cart is empty');
            }else {
                tbody.appendChild(fragment);
                return true;
            }

            function getTableColumnOrder() {
                var trHeader = document.querySelector('#cart-table-headers');
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
                    tr.appendChild(createTd(obj, key));
                });
                tr.setAttribute('data-id', obj.id);
                return tr;
            }

            function createTd(obj, key) {
                var innerHtml;
                if(key === 'total'){
                    innerHtml = obj.qty*obj.price;
                }else{
                    innerHtml = obj[key] ? obj[key] : obj.itemSrc[key];
                }
                var td = document.createElement('td');
                td.innerHTML = innerHtml;
                return td;
            }
        }
    }
);