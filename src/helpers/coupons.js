let COUPONS = [
    {
        coupon: 'HQRARA',
        applyOn: 'raro',
        discount: 10,
    },
    {
        coupon: 'HQCOMUM',
        applyOn: 'comum',
        discount: 20,
    }
];

export const validateCoupon = (items, usedCoupons) => {
    const availableCupons = COUPONS.map(item => item.coupon);
    let availableCouponsUsed = usedCoupons.filter(item => availableCupons.includes(item));
    let availableCouponsUsedToShow = availableCouponsUsed.filter((item, pos) => availableCouponsUsed.indexOf(item) == pos);
    
    if (items.length <= 0) return { discount: 0, availableCouponsUsed: availableCouponsUsedToShow, };

    if((usedCoupons.length > 0) && (!availableCupons.some(element => (usedCoupons.indexOf(element) >= 0))) ) {
        return { discount: 0, availableCouponsUsed: availableCouponsUsedToShow, }
    };
    
    const raresHQs = items.filter(item => item.comicType === COUPONS[0].applyOn);
    const commonsHQs = items.filter(item => item.comicType === COUPONS[1].applyOn);

    let raresHQsDiscount = 0;
    let commonsHQsDiscount = 0;
    let amountRaresHQsPrice = 0;
    let amountCommonsHQsPrice = 0;

    if (usedCoupons.includes(COUPONS[0].coupon)) {
        if(raresHQs.length > 0) {
            amountRaresHQsPrice = raresHQs.reduce((soma, item) => soma + item.prices[0].price, 0);
            raresHQsDiscount = amountRaresHQsPrice * COUPONS[0].discount / 100;
        };
    };

    if (usedCoupons.includes(COUPONS[1].coupon)) {
        if(commonsHQs.length > 0) {
            amountCommonsHQsPrice = commonsHQs.reduce((soma, item) => soma + item.prices[0].price, 0);
            commonsHQsDiscount = amountCommonsHQsPrice * COUPONS[1].discount / 100;
        };
    };

    return {
        discount: (raresHQsDiscount + commonsHQsDiscount),
        availableCouponsUsed: availableCouponsUsedToShow,
    };
};

