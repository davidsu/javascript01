var MOD = MOD || {};

MOD.events = MOD.setUpEvents();

MOD.goToPage = function (pageNum){
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = "";
    var pageInitIndex = pageNum * 20;
    MOD.initTableRows(MOD.events.selectionChanged, pageInitIndex, pageInitIndex + 20)
};

MOD.initTableRows(MOD.events.selectionChanged, 0, 20);
MOD.initPagingButtons();