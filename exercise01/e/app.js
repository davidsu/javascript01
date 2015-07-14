doresh('./e/app.js',
    [
        './managers/paging.js',
        './items/itemsRepo.js',
        './items/items.js',
        './managers/mainTbl.js',
        './managers/cartPopUp.js',
        './managers/coupon.js',
        'cmdLine.js',
        './managers/goDark.js'
    ],
    function (paging, itemsRepo, items, mainTblManager) {
        paging.init();
        mainTblManager.init(itemsRepo.getIterator(0, paging.DEFAULT_PAGE_SIZE));
        paging.resetPagingButtons();
    }
);



