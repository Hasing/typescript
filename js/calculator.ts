class CouponDisCounter {
    static type: number = 123;
    Calculate(price: number, coupon?: string) {
        if (coupon) {
            console.log(coupon);
        }
        else {
            console.log(price);
        }
    }
}