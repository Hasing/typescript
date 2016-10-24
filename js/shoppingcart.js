var Member;
(function (Member) {
    Member[Member["Normal"] = 0] = "Normal";
    Member[Member["VIP"] = 1] = "VIP";
})(Member || (Member = {}));
var VIPCalculator = (function () {
    function VIPCalculator() {
    }
    VIPCalculator.prototype.Calculate = function (price, qty) {
        return price * qty * 0.8;
    };
    return VIPCalculator;
}());
var NormalCalculator = (function () {
    function NormalCalculator() {
    }
    NormalCalculator.prototype.Calculate = function (price, qty) {
        return price * qty;
    };
    return NormalCalculator;
}());
var DiscountFactory = (function () {
    function DiscountFactory() {
    }
    DiscountFactory.prototype.GetDiscount = function (rank) {
        switch (rank) {
            case Member.Normal:
                return new NormalCalculator();
            case Member.VIP:
                return new VIPCalculator();
        }
    };
    return DiscountFactory;
}());
