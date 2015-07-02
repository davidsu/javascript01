doresh('cart',
    [],
    function(){
        var cart = {};
        var CartObj = function(obj){
            this.qty = 1;
            this.price = parseInt(obj.price.substr(1), 10);
            this.id = obj.id;
        };

        function addToCart(item){
            var success = true;
            if(!cart[item.id]){
                cart[item.id] = new CartObj(item);
            }else if(cart[item.id].qty==item.limit){
                success =  false;
            }else{
                cart[item.id].qty++;
            }
            return{
                success: success,
                qty:cart[item.id].qty
            };
        }

        function removeFromCart(item){
            var success = true;
            if(!cart[item.id]){
                success = false
            }else if(cart[item.id].qty == 0){
                delete cart[item.id];
            }else{
                cart[item.id].qty--;
            }
            return{
                success: success,
                qty: cart[item.id] ? cart[item.id].qty : 0
            }
        }

        function getTotal(){
            var total = 0;
            for(var key in cart){
                total += cart[key].qty*cart[key].price;
            }
            return total;
        }

        function getItemInChart(id){
            var chartObj;
            for(var key in cart){
                if(cart[key].id==id){
                    return cart[key];

                }
            }

        }

        return {
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            getTotal: getTotal,
            getItemInChart: getItemInChart

        };
    }
);