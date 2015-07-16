define(
    [],
    function () {
        function CouponIdError(message){
            if (!(this instanceof Error)) {
                return new CouponIdError(message);
            }
            this.name = "CouponIdError";
            this.message = (message || "");
        }
        CouponIdError.prototype = Error.prototype;



        return{
            CouponIdError: CouponIdError
        }

    }
);