doresh('cmdLine.js',
    [
        'itemsRepo.js',
        'pagingManager.js',
        'couponManager.js'
    ],
    function (itemsRepo, pagingManager, coupon) {
        window.cmd = {
            itemsRepo: itemsRepo,
            pagingManager: pagingManager,
            couponManager: coupon
        }

    }
);