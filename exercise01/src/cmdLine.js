define(
    [
        './items/itemsRepo.js',
        './managers/paging.js',
        './managers/coupon.js'
    ],
    function (itemsRepo, pagingManager, coupon) {
        'use strict';
        window.cmd = {
            itemsRepo: itemsRepo,
            pagingManager: pagingManager,
            couponManager: coupon
        };

    }
);