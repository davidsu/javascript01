var MOD = MOD || {};
MOD.initTableRows = function(selectionChanged, startIndex, endIndex) {
    var fragment = document.createDocumentFragment();
    var tbody = document.querySelector('tbody');


    for (var index = startIndex; index < endIndex; index++) {
        var item = MOD.items[index];

        var tr = createRowFromObject(item, index-startIndex);
        fragment.appendChild(tr);
    }

    var dummy = document.createElement('div');
    fragment.appendChild(dummy);
    tbody.appendChild(fragment);

    //MOD.items.forEach(function (item, index, array) {
    //    var tr = createRowFromObject(item, index);
    //    fragment.appendChild(tr);
    //
    //    if (index === array.length - 1) {
    //        var dummy = document.createElement('div');
    //        fragment.appendChild(dummy);
    //        tbody.appendChild(fragment);
    //    }
    //});

    function createRowFromObject(obj, index) {
        var tr = document.createElement('tr');
        tr.appendChild(createSelect(index));
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                tr.appendChild(createTd(obj[key]));
        }
        return tr;
    }

    function createTd(innerHtml) {
        var tr = document.createElement('td');
        tr.innerHTML = innerHtml;
        return tr;
    }


    function createSelect(index) {
        var td = document.createElement('td');
        var select = document.createElement('select');
        td.appendChild(select);
        var option;
        for (var i = 0; i < endIndex-startIndex; i++) {
            option = document.createElement('option');
            option.innerHTML = i.toString();
            option.value = i;
            select.appendChild(option);
        }
        select.value = index;
        select.onchange = selectionChanged;
        return select;
    }
};