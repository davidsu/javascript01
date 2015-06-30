MOD.setups.paging = function (itemsRepo, resetTableRows) {

      var DEFAULT_PAGE_SIZE = 20;
      function goToPage(pageNum) {
            var tbody = document.querySelector('tbody');
            tbody.innerHTML = "";
            var pageSize = getUserDefinedPageSize();
            resetTableRows(itemsRepo.getIterator(pageNum * pageSize, pageSize));

      }

      function createButtonsNavigationFragment() {

            var numOfPages = getNumOfPages();
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < numOfPages; i++) {
                  var button = document.createElement('button');
                  button.innerHTML = i.toString();
                  fragment.appendChild(button);
                  (function (pgIndex) {
                        button.onclick = function () {
                              goToPage(parseInt(pgIndex));
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
            if (!MOD.utils.isNumeric(pageSize)) {
                  pageSize = DEFAULT_PAGE_SIZE;
                  document.querySelector('#page-size').value = pageSize.toString();
            }
            return parseInt(pageSize, 10);
      }

      function init() {
            var buttonSetPageSize = document.querySelector('#set-page-size');
            buttonSetPageSize.onclick = function () {
                  resetPagingButtons();
                  goToPage(0);
            };
      }

      function getNumOfPages() {
            var numOfPagesFloat = itemsRepo.getItemsCount() / getUserDefinedPageSize();
            var numOfPagesInt = parseInt(numOfPagesFloat, 10);
            return numOfPagesFloat == numOfPagesInt ? numOfPagesInt : numOfPagesInt + 1;
      }

      return {
            DEFAULT_PAGE_SIZE: DEFAULT_PAGE_SIZE,
            goToPage: goToPage,
            resetPagingButtons: resetPagingButtons,
            getUserDefinedPageSize: getUserDefinedPageSize,
            getNumOfPages: getNumOfPages,
            init: init
      };
};
