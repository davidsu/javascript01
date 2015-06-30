
MOD.paging = {
    DEFAUL_PAGE_SIZE: 20,
    goToPage: function (pageNum) {
        var tbody = document.querySelector('tbody');
        tbody.innerHTML = "";
        var pageSize = MOD.paging.getUserDefinedPageSize();
        var pageInitIndex = pageNum * MOD.paging.getUserDefinedPageSize();
        MOD.resetTableRows(pageInitIndex, pageInitIndex + pageSize);
    },
    resetPagingButtons: function () {

        function createFragment() {

            var numOfPages = parseInt(MOD.itemsRepo.getItemsCount() / MOD.paging.getUserDefinedPageSize());
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < numOfPages; i++) {
                var button = document.createElement('button');
                button.innerHTML = i.toString();
                fragment.appendChild(button);
                (function (pgIndex) {
                    button.onclick = function () {
                        MOD.paging.goToPage(parseInt(pgIndex));
                    }
                })(i);
            }
            return fragment;
        }

        function resetPagingNavigation(fragment) {
            var pagingNavigationPlaceholder = document.querySelector('#paging-navigation-placeholder');
            pagingNavigationPlaceholder.innerHTML = "";
            pagingNavigationPlaceholder.appendChild(fragment);
        }

        resetPagingNavigation(createFragment());
    },
    getUserDefinedPageSize:function(){
        var pageSizeElement =document.querySelector('#page-size');
        var pageSize = pageSizeElement.value;
        if(!MOD.utils.isNumeric(pageSize)){
            pageSize = 20;
            document.querySelector('#page-size').value = pageSize.toString();
        }
        return parseInt(pageSize,10);
    },
    init: function(){
        var buttonSetPageSize = document.querySelector('#set-page-size');
        buttonSetPageSize.onclick = function(){
            MOD.paging.resetPagingButtons();
            MOD.paging.goToPage(0);
        };
    }
};