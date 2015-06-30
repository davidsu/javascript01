var MOD = MOD || {};

MOD.setUpEvents = function() {
    function selectionChanged(event) {
        var tbody = document.querySelector('tbody');
        var target = event.target;
        var newIndex = parseInt(target.value, 10);
        var trSource = target.parentNode;
        tbody.removeChild(trSource);
        var childToInsertBefore = tbody.querySelector('tr:nth-child(' + (newIndex + 1) + ')');
        tbody.insertBefore(trSource, childToInsertBefore);
        fixIndexes(tbody);
    }

    function fixIndexes(tbody) {
        var child = tbody.firstElementChild;
        var dummy = tbody.querySelector('div');
        var i = 0;
        do {
            var select = child.querySelector('select');
            console.log(select.value);
            select.value = i;
            child = child.nextSibling;
            i++;
        } while (child != dummy);
    }

    var buttons = document.querySelectorAll('button');
    for(var i = 0; i<buttons.length;i++) {
        buttons[i].onclick = function (event) {
            MOD.goToPage(parseInt(event.target.innerHTML));

        }
    }

    return {selectionChanged:selectionChanged};
};