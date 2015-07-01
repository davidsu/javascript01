doresh('app',
    [
    'paging',
    'itemsRepo',
    'items',
    'resetTableRows'
    ],
    function(paging, itemsRepo, items, resetTableRows) {
        paging.init();
        resetTableRows(itemsRepo.getIterator(0, paging.DEFAULT_PAGE_SIZE));
        paging.resetPagingButtons();
    }
);



