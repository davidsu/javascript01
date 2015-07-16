define(
    [
        './dom/tblCreator.js',
        'functionalElements.js'
    ],
    function(tblCreator, functional){
        function createHeaderCells(headers) {
            var headerCells = [];
            headers.forEach(function (column) {
                headerCells.push(tblCreator.createHeaderCell(column));
            });
            return headerCells;
        }

        function createHeadersRow(headers) {
            var rowAfterChildren = functional.fcompose(
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