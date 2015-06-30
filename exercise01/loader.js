var MOD = {};

MOD.insertScript = function(path){
    var script = document.createElement('script');
    script.src = path;
    document.body.appendChild(script);
};

(function(){

    MOD.insertScript('items.js');
    MOD.insertScript('itemsRepo.js');
    MOD.insertScript('paging.js');
    MOD.insertScript('resetPagingButtons.js');
    MOD.insertScript('resetTableRows.js');
    MOD.insertScript('utils.js');
    MOD.insertScript('app.js');
})();
