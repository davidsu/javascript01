doresh('./dom/utils',
      [],
      function () {
            function createEmptyFragment(){
                  return document.createDocumentFragment();
            }

            function insertChildElement(parent, child){
                  parent.appendChild(child);
                  return parent;
            }

            return {
                  createEmptyFragment: createEmptyFragment,
                  insertChildToParent: insertChildElement
            };
      }
);