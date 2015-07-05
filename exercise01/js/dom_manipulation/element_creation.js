doresh('./js/element_creation.js',
    [],
    function () {

        function createElementWithClass(elementStr, classStr){
            var result = document.createElement(elementStr);
            result.setAttribute('class', classStr);
            return result;
        }



        function createNewDivRow(){
            return createElementWithClass('div', 'row');
        }

        function createNewDivCell(content, desiredWidth){
            var cell =  createElementWithClass('div', 'cell');
            cell.style.width = (desiredWidth || 15) + '%';
            cell.innerHTML = content;
            return cell;
        }



        return{
            createNewDivRow: createNewDivRow,
            createNewDivCell: createNewDivCell
        };
    }
);