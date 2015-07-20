define(
    [
        '../dom/total.js',
        '../cart.js'
    ],
    function (domTotalHelper, cart) {
        function resetTotal(){
            var total = cart.getTotal();
            domTotalHelper.resetTotal(total);
        }

        return{
            resetTotal: resetTotal
        }
    }
);