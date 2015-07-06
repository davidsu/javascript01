doresh('./dom/mainTbl',
      ['./dom/utils'],
      function (domUtils) {
            function reset(newlyBuiltTable){
                  var tblPlaceHolder = document.querySelector('.table.main');
                  tblPlaceHolder.innerHTML = '';
                  tblPlaceHolder.appendChild(newlyBuiltTable);
            }



            return {

                  reset: reset,
                  insertChildToParent: domUtils.insertChildToParent
            };
      }
);