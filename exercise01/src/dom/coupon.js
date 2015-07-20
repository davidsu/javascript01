define(
    function () {
        'use strict';
        function setBtnCouponActivatorListener(activateCoupon) {
            var btn = document.querySelector('#btn-activate-coupon');
            btn.onclick = function () {
                var couponIdElement = document.querySelector('#coupon-id');
                var couponId = couponIdElement.value;
                activateCoupon(couponId);

            };
        }

        return {
            setBtnCouponActivatorListener: setBtnCouponActivatorListener
        };
    }
);