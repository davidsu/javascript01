
MOD.resetPagingButtons = function(){

    function createFragment() {

        var numOfPages = parseInt(MOD.itemsRepo.getItemsCount()/MOD.paging.getUserDefinedPageSize());
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < numOfPages; i++) {
            var button = document.createElement('button');
            button.innerHTML = i.toString();
            fragment.appendChild(button);
            (function (pgIndex) {
                button.onclick = function () {
                    MOD.paging.goToPage(pgIndex);
                }
                })(i);
        }
        return fragment;
    }

    function resetPagingNavigation(fragment){
        var pagingNavigationPlaceholder = document.querySelector('#paging-navigation-placeholder');
        pagingNavigationPlaceholder.innerHTML = "";
        pagingNavigationPlaceholder.appendChild(fragment);
    }

    resetPagingNavigation(createFragment());
};