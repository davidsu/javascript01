var MOD = {
    setups: {}
};


(function(){

    function insertScript(path){
        var script = document.createElement('script');
        script.src = path;
        document.body.appendChild(script);
    }

    insertScript('items.js');
    insertScript('itemsRepo.js');
    insertScript('paging.js');
    //insertScript('resetPagingButtons.js');
    insertScript('mainTblManager.js');
    insertScript('utils.js');
    insertScript('app.js');
})();
