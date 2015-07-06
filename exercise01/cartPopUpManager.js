doresh('cartPopUpManager.js',
    [
        'cart',
        './dom/cartPopUp.js',
        './dom/tblCreator.js',
        'tblUtils.js'
    ],
    function(cart, domCartPopUp, tblCreator, tblUtils){

        var headers = ['id', 'name', 'qty', 'price', 'total'];
        var headersRow = tblUtils.createHeadersRow(headers);








        var popUp = document.querySelector('.popup-cart');
        var showCartButton = document.querySelector('#show-cart-button');
        showCartButton.addEventListener('click', function(){
            if(resetCartTable()) {
                popUp.style.visibility = 'visible';
            }
        });



        function resetCartTable(){
            var fragment = document.createDocumentFragment();
            var tbody = document.querySelector('#cart-popup-tbody');
            tbody.innerHTML = "";
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

            function createRowFromObject(obj) {
                var tr = document.createElement('tr');
                headers.forEach(function (key) {
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