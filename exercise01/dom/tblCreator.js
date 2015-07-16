define(
    [
        './utils.js'
    ],
    function (domUtils) {

        function createElement(strtype, strClass) {
            var result = document.createElement(strtype);
            result.setAttribute('class', strClass);
            return result;
        }

        function appendChildrenToElement(parent, children) {
            children.forEach(function (child) {
                parent.appendChild(child);
            });
            return parent;

        }

        function createDivRow(children, strClass) {
            if (!strClass) {
                strClass = '';
            }
            var result = createElement('div', 'row ' + strClass);
            return appendChildrenToElement(result, children);

        }

        function createCell(strContent, strClass) {
            if (!strClass) {
                strClass = '';
            }
            var result = createElement('div', 'cell ' + strClass);
            result.innerHTML = strContent;
            return result;
        }

        function createHeadersRow(children) {
            var result = createElement('div', 'heading');
            return appendChildrenToElement(result, children);
        }

        function createHeaderCell(strContent) {
            return createCell(strContent, strContent);

        }

        return {
            createRow: createDivRow,
            createCell: createCell,
            createHeaderCell: createHeaderCell,
            createHeadersRow: createHeadersRow,
            getDetachedPlaceholder: domUtils.createEmptyFragment

        }
    }
);