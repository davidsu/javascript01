doresh('app.js',
    [
    'paging.js',
    'itemsRepo.js',
    'items.js',
    'resetTableRows.js'
    ],
    function(paging, itemsRepo, items, resetTableRows) {
        paging.init();
        resetTableRows(itemsRepo.getIterator(0, paging.DEFAULT_PAGE_SIZE));
        paging.resetPagingButtons();
    }
);



