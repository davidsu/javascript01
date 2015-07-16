define(
    [
        './dom/tblCreator.js',
        './lib/lodash.js'
    ],
    function(tblCreator, _){
        function createHeaderCells(headers) {
            var headerCells = [];
            headers.forEach(function (column) {
                headerCells.push(tblCreator.createHeaderCell(column));
            });
            return headerCells;
        }

        function createHeadersRow(headers) {
            var rowAfterChildren = _.compose(
                tblCreator.createHeadersRow,
                createHeaderCells
            );
            return rowAfterChildren(headers);
        }



        return{
            createHeadersRow: createHeadersRow
        };
    }
);