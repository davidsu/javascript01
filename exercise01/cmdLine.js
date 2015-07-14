doresh('cmdLine.js',
    [
        './items/itemsRepo.js',
        './managers/paging.js',
        './managers/coupon.js'
    ],
    function (itemsRepo, pagingManager, coupon) {
        window.cmd = {
            itemsRepo: itemsRepo,
            pagingManager: pagingManager,
            couponManager: coupon
        }

    }
);