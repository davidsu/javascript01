doresh('pagingManager.js',
    [
        'itemsRepo.js',
        'mainTblManager.js',
        'utils.js',
        'pubsub.js',
        './managers/total.js'
    ], function (itemsRepo, mainTblManager, utils, pubsub, totalManager) {

        var DEFAULT_PAGE_SIZE = 20;
        var currentPage = null;


        document.addEventListener('goToPage', function(e){
            goToPage(e.detail.pageNum);
        });
        function goToPage(pageNum) {

            var tbody = document.querySelector('.table.pop-up-cart-table');
            tbody.innerHTML = "";
            currentPage = pageNum || 0;
            var pageSize = getUserDefinedPageSize();
            mainTblManager.reset(itemsRepo.getIterator(pageNum * pageSize, pageSize));
        }

        function createButtonsNavigationFragment() {

            var numOfPages = getNumOfPages();
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < numOfPages; i++) {
                var button = document.createElement('button');
                button.innerHTML = i.toString();
                fragment.appendChild(button);
                (function (pgIndex) {
                    var event = new CustomEvent('goToPage', {detail:{pageNum: pgIndex}});
                    button.onclick = function () {
                        document.dispatchEvent(event);
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

        function resetPagingButtons() {
            resetPagingNavigation(createButtonsNavigationFragment());
        }

        function getUserDefinedPageSize() {
            var pageSizeElement = document.querySelector('#page-size');
            var pageSize = pageSizeElement.value;
            if (!utils.isNumeric(pageSize)) {
                pageSize = DEFAULT_PAGE_SIZE;
                document.querySelector('#page-size').value = pageSize.toString();
            }
            return parseInt(pageSize, 10);
        }


        function init() {
            pubsub.subscribe('pageSizeReset', function(){
                resetPagingButtons();
                goToPage(0);
            });
            var buttonSetPageSize = document.querySelector('#set-page-size');
            buttonSetPageSize.onclick = function () {
                pubsub.publish('pageSizeReset');
            };
        }

        function getNumOfPages() {
            var numOfPagesFloat = itemsRepo.getItemsCount() / getUserDefinedPageSize();
            var numOfPagesInt = parseInt(numOfPagesFloat, 10);
            return numOfPagesFloat == numOfPagesInt ? numOfPagesInt : numOfPagesInt + 1;
        }

        function repaint(){
            goToPage(currentPage);
            totalManager.resetTotal();
        }
        return {
            DEFAULT_PAGE_SIZE: DEFAULT_PAGE_SIZE,
            goToPage: goToPage,
            resetPagingButtons: resetPagingButtons,
            getUserDefinedPageSize: getUserDefinedPageSize,
            getNumOfPages: getNumOfPages,
            repaint: repaint,
            init: init
        };
    }
);
