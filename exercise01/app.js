window.onload = function() {
    this.paging = this.setups.paging(this.itemsRepo, this.resetTableRows);
    this.paging.init();
    this.resetTableRows(this.itemsRepo.getIterator(0, this.paging.DEFAULT_PAGE_SIZE));
    this.paging.resetPagingButtons();
}.bind(MOD);


