var CouponDisCounter = (function () {
    function CouponDisCounter() {
    }
    CouponDisCounter.prototype.Calculate = function (price, coupon) {
        if (coupon) {
            console.log(coupon);
        }
        else {
            console.log(price);
        }
    };
    CouponDisCounter.type = 123;
    return CouponDisCounter;
}());
