doresh('app.js',
    [
        'pagingManager.js',
        'itemsRepo.js',
        'items.js',
        'mainTblManager.js',
        'cartPopUpManager.js',
        'couponManager.js',
        'cmdLine.js'
    ],
    function (paging, itemsRepo, items, mainTblManager) {
        paging.init();
        mainTblManager.init(itemsRepo.getIterator(0, paging.DEFAULT_PAGE_SIZE));
        paging.resetPagingButtons();
    }
);



