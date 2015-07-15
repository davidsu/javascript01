doresh('./dom/mainTbl.js',
    [
        './dom/utils.js',
        './dom/tblCreator.js',
    ],
    function (domUtils, tblCreator) {
        function reset(newlyBuiltTable) {
            var tblPlaceHolder = document.querySelector('.table.main');
            tblPlaceHolder.innerHTML = '';
            tblPlaceHolder.appendChild(newlyBuiltTable);
        }

        function createCartCell(btnPlus, btnMinus, lbl) {
            var cell = tblCreator.createCell('', '');
            cell.appendChild(btnMinus);
            cell.appendChild(btnPlus);
            cell.appendChild(lbl);
            return cell;
        }

        function createCartAddRemoveButton(eventCallback, lblFixText, strBtnContent) {
            var btn = domUtils.createButton(strBtnContent);
            btn.addEventListener('click', function () {
                var newLabelValue = eventCallback();
                lblFixText.innerHTML = newLabelValue.toString();
            });
            return btn;
        };

        function createCartLabel(strContent) {
            var labelQty = document.createElement('span');
            labelQty.innerHTML = strContent;
            labelQty.style.margin = 0;
            return labelQty;
        }

        function createToolTippedCell(cellContent, toolTipContent, strClass){

            var cell = tblCreator.createCell(cellContent, strClass+' tooltip-wrapper');
            var toolTip = tblCreator.createCell(toolTipContent, 'tooltip tooltip-blue tooltip-animated');
            domUtils.insertChildToParent(cell, toolTip);
            return cell;
        }


        return {
            reset: reset,
            insertChildToParent: domUtils.insertChildToParent,
            createCartLabel: createCartLabel,
            createCartAddRemoveButton: createCartAddRemoveButton,
            createCartCell: createCartCell,
            createToolTippedCell: createToolTippedCell,

            createRow: tblCreator.createRow,
            createCell: tblCreator.createCell,
            createHeaderCell: tblCreator.createHeaderCell,
            createHeadersRow: tblCreator.createHeadersRow,
            getDetachedPlaceholder: tblCreator.getDetachedPlaceholder
        };
    }
);