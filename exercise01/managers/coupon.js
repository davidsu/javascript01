doresh('./managers/coupon.js',
    [
        './items/itemsRepo.js',
        'errors.js',
        './managers/paging.js',
        './dom/coupon.js'
    ],
    function (itemsRepo, errors, pagingManager, domCouponHelper) {

        var couponId = 0;
        var existingCoupons = {};
        function createCoupon(discount, itemsId){
            if(discount>1 || discount<0){
                throw new RangeError('Discount = ' + discount + '. Must be between 0 and 1');
            }
            couponId++;
            existingCoupons[couponId] = {discount: discount, active: false, itemsId: itemsId};

            for(var i = 0; i<itemsId.length; i++){
                var item = itemsRepo.getItemById(itemsId[i]);
                if(item) {
                    item.coupons[couponId] = {discount: discount, active: false};
                }
            }

            return couponId;
        }

        function activateCoupon(id){
            if(!existingCoupons[id]){
                throw new errors.CouponIdError(id + " isn't a valid coupon id");
            }
            var iterator = itemsRepo.getIterator();
            while(iterator.hasNext()){
                iterator.next().activateCoupon(id);
            }
            existingCoupons[id].active = true;
            pagingManager.repaint();
            return id;

        }

        function createAndActivateCoupon(discount, itemsId){
            return activateCoupon(createCoupon(discount, itemsId));
        }
        function createSampleCoupons(){
            createAndActivateCoupon(0.2, [0, 3, 6]);
            createAndActivateCoupon(0.1, [10, 30, 60]);
            createAndActivateCoupon(0.9, [15, 25, 27, 65, 69, 102]);

        }
        function init(){
            domCouponHelper.setBtnCouponActivatorListener(activateCoupon);
        }

        createSampleCoupons();
        init();

        return{
            createCoupon: createCoupon,
            activateCoupon: activateCoupon,
            coupons: existingCoupons,
            createAndActivateCoupon: createAndActivateCoupon
        }



    }
);