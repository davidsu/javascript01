require(
    [
        './managers/paging.js',
        './items/itemsRepo.js',
        './managers/mainTbl.js',
        './managers/cartPopUp.js',
        './managers/coupon.js',
        'cmdLine.js',
        './managers/goDark.js'
    ],
    function (paging, itemsRepo, mainTblManager) {
        paging.init();
        mainTblManager.init(itemsRepo.getIterator(0, paging.DEFAULT_PAGE_SIZE));
        paging.resetPagingButtons();
    }
);



