doresh('itemTypes.js',
    [
        'utils.js'
    ],
    function (utils) {
        function BaseItem(item) {
            if (!(this instanceof BaseItem)) {
                return new BaseItem(item);
            }
            this.id = item.id;
            this.name = item.name;
            this.image = item.image;
            this.desc = item.desc;
            this.price = item.price;
            this.limit = item.limit;
        }

        function OnSaleItem(item) {
            if (!(this instanceof OnSaleItem)) {
                return new OnSaleItem(item);
            }
            BaseItem.apply(this, arguments);
        }

        function OutOfStockItem(item) {
            if (!(this instanceof OutOfStockItem)) {
                return new OutOfStockItem(item);
            }
            BaseItem.apply(this, arguments);
        }

        function NewItem(item) {
            if (!(this instanceof NewItem)) {
                return new NewItem(item);
            }
            BaseItem.apply(this, arguments);
        }
        utils.inherit(OnSaleItem, BaseItem);
        utils.inherit(OutOfStockItem, BaseItem);
        utils.inherit(NewItem, BaseItem);

        return{
            BaseItem:BaseItem,
            OutOfStockItem: OutOfStockItem,
            NewItem: NewItem,
            OnSaleItem: OnSaleItem
        }
    });