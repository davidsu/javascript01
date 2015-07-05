doresh('./js/app',
    [
    './js/paging',
    './js/itemsRepo',
    './js/items',
    './js/resetTableRows',
    './js/cartPopUp'
    ],
    function(paging, itemsRepo, items, resetTableRows) {
        paging.init();
        resetTableRows(itemsRepo.getIterator(0, paging.DEFAULT_PAGE_SIZE));
        paging.resetPagingButtons();
    }
);



