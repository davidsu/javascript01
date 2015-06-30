var MOD = MOD || {};

MOD.initPagingButtons = function(pageSize){

    function normalizePageSize(){
        if(!MOD.utils.isNumeric(pageSize)){
            pageSize = 20;
            document.querySelector('#page-size').value = pageSize.toString();
        }
    }
    function createFragment() {
        var numOfPages = parseInt(MOD.items.length/pageSize);
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < numOfPages; i++) {
            var button = document.createElement('button');
            button.innerHTML = i.toString();
            fragment.appendChild(button);
            (function (i) {
                button.onclick = function (event) {
                    MOD.goToPage(parseInt(event.target.innerHTML));
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

    normalizePageSize();
    resetPagingNavigation(createFragment());
};