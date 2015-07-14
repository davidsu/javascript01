doresh('./items/itemTypes.js',
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
            this.coupons = {};
        }

        BaseItem.prototype.getFullPrice = function () {
            return parseFloat(this.price.substring(1));
        };

        BaseItem.prototype.getPrice = function () {
            var price = this.getFullPrice();
            for (var key in this.coupons) {
                if (this.coupons[key].active) {
                    price *= (1 - this.coupons[key].discount);
                }
            }
            return price;
        };

        BaseItem.prototype.hasDiscount = function(){
            for (var key in this.coupons) {
                if (this.coupons[key].active) {
                    return true;
                }
            }
            return false;
        };

        BaseItem.prototype.activateCoupon = function (id) {
            if (this.coupons[id]) {
                this.coupons[id].active = true;
            }
        };

        BaseItem.prototype.getCtorName = function(){
          return utils.getCtorName(this);
        };


        function OnSaleItem(item) {
            if (!(this instanceof OnSaleItem)) {
                return new OnSaleItem(item);
            }
            BaseItem.apply(this, arguments);
            this.discount = Math.random();
        }


        utils.inherit(OnSaleItem, BaseItem);
        OnSaleItem.prototype.getPrice = function () {
            var price = OnSaleItem.uber.getPrice.call(this);
            return price * (1 - this.discount);

        };

        OnSaleItem.prototype.hasDiscount = function(){return true;};


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




        utils.inherit(OutOfStockItem, BaseItem);
        utils.inherit(NewItem, BaseItem);

        return {
            BaseItem: BaseItem,
            OutOfStockItem: OutOfStockItem,
            NewItem: NewItem,
            OnSaleItem: OnSaleItem
        }
    });