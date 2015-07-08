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

        BaseItem.prototype.getPrice = function(){
          return parseInt(this.price.substring(1));
        };


        function OnSaleItem(item) {
            if (!(this instanceof OnSaleItem)) {
                return new OnSaleItem(item);
            }
            BaseItem.apply(this, arguments);
            this.discount = Math.random();
        }

        OnSaleItem.prototype.getFullPrice = function(){
            return BaseItem.getPrice.apply(this);
        };

        OnSaleItem.prototype.getPrice = function(){
            var fullPrice = this.getFullPrice();
            return fullPrice - fullPrice*this.discount;
        };


        function OutOfStockItem(item) {
            if (!(this instanceof OutOfStockItem)) {
                return new OutOfStockItem(item);
            }
            BaseItem.apply(this, arguments);
            this.limit = 0;
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