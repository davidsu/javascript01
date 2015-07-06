doresh('app.js',
    [
    'paging.js',
    'itemsRepo.js',
    'items.js',
    'mainTblManager.js',
    'cartPopUp.js'
    ],
    function(paging, itemsRepo, items, mainTblManager) {
        paging.init();
        mainTblManager.init(itemsRepo.getIterator(0, paging.DEFAULT_PAGE_SIZE));
        paging.resetPagingButtons();
    }
);



