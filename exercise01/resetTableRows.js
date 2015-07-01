doresh('resetTableRows.js',
    [],
    function() {
        return function (iterator) {
            var fragment = document.createDocumentFragment();
            var tbody = document.querySelector('tbody');
            var tblColumnOrder = getTableColumnOrder();


            while (iterator.hasNext()) {
                var tr = createRowFromObject(iterator.next());
                fragment.appendChild(tr);
            }

            tbody.appendChild(fragment);

            function getTableColumnOrder() {
                var trHeader = document.querySelector('#table-headers');
                var keys = [];
                var child = trHeader.firstElementChild;
                while (child) {
                    if (child.getAttribute && child.getAttribute('data-field')) {
                        keys.push(child.getAttribute('data-field'));
                    }
                    child = child.nextSibling;
                }
                return keys;
            }

            function createRowFromObject(obj) {
                var tr = document.createElement('tr');
                tblColumnOrder.forEach(function (key) {
                    tr.appendChild(createTd(obj[key]));
                });
                return tr;
            }

            function createTd(innerHtml) {
                var tr = document.createElement('td');
                tr.innerHTML = innerHtml;
                return tr;
            }
        }
    }
);