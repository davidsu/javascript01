define(
      function () {
            function createEmptyFragment(){
                  return document.createDocumentFragment();
            }

            function insertChildElement(parent, child){
                  parent.appendChild(child);
                  return parent;
            }

            function createButton(innerText) {
                  var btn = document.createElement('button');
                  btn.appendChild(document.createTextNode(innerText));
                  return btn;
            }

            return {
                  createEmptyFragment: createEmptyFragment,
                  insertChildToParent: insertChildElement,
                  createButton: createButton
            };
      }
);