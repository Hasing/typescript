enum Member {
    Normal = 0,
    VIP = 1
}

interface ICalculator {
    Calculate(price: number, qty: number): number;
}

class VIPCalculator implements ICalculator {
    Calculate(price: number, qty: number) {
        return price * qty * 0.8;
    }
}

class NormalCalculator implements ICalculator {
    Calculate(price: number, qty: number) {
        return price * qty;
    }
}

class DiscountFactory {
    GetDiscount(rank: Member) {
        switch (rank) {
            case Member.Normal:
                return new NormalCalculator();
            case Member.VIP:
                return new VIPCalculator();
        }
    }
}