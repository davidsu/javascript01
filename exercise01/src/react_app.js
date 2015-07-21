require(
    [
        './managers/coupon.js',
        './items/items.js',
        'managers/paging.js',
        './items/itemsRepo.js',
        './reactComponents/mainTbl.js',
        './managers/cartPopUp.js',

        'cmdLine.js',
        './managers/goDark.js',
        './lib/react.js',
        './lib/JSXTransformer.js'
    ],
    function (couponManager, items, paging, itemsRepo, mainTblManager) {
        'use strict';
        var request = new XMLHttpRequest();
        request.open('GET', 'items/', true);
        request.onload = function () {

            // If everything is cool...
            if (request.status >= 200 && request.status < 400) {

                var _items = JSON.parse(request.responseText);
                itemsRepo.init(items(_items));
                console.log('items from XMLHttpRequest');

            } else {

                itemsRepo.init(items());
                console.log('items served statically');

            }

            couponManager.init();
            paging.init();
            mainTblManager.init(itemsRepo.getIterator(0, paging.DEFAULT_PAGE_SIZE));
            paging.resetPagingButtons();
        };
        //request.send();
    }
);



