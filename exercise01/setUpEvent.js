var MOD = MOD || {};

MOD.setUpEvents = function() {
    function selectionChanged(event) {
        var tbody = document.querySelector('tbody');
        var target = event.target;
        var newIndex = parseInt(target.value);
        var trSource = target.parentNode;
        tbody.removeChild(trSource);
        var child = tbody.querySelector('tr:nth-child(' + (newIndex + 1) + ')');
        tbody.insertBefore(trSource, child);
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

    return {selectionChanged:selectionChanged};
};