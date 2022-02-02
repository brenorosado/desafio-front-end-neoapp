let COUPONS = [
    {
        coupon: 'rareHQ',
        applyOn: 'rare',
        discount: 10,
    },
    {
        coupon: 'commonHQ',
        applyOn: 'common',
        discount: 20,
    }
];

export const validateCoupon = (items, usedCoupons) => {
    const availableCupons = COUPONS.map(item => item.coupon);
    let availableCouponsUsed = usedCoupons.filter(item => availableCupons.includes(item));
    let availableCouponsUsedToShow = availableCouponsUsed.filter((item, pos) => availableCouponsUsed.indexOf(item) == pos);
    
    if (items.length <= 0) return { discount: 0, message: '', availableCouponsUsed: availableCouponsUsedToShow, };

    let message = '';

    if((usedCoupons.length > 0) && (!availableCupons.some(element => (usedCoupons.indexOf(element) >= 0))) ) {
        return { discount: 0, message: 'Invalid coupon.', availableCouponsUsed: availableCouponsUsedToShow, }
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
            message = 'Coupon successfully applied';
            if((usedCoupons[usedCoupons.length - 1] !== COUPONS[0].coupon) && (usedCoupons[usedCoupons.length - 1] !== COUPONS[1].coupon)) message = 'Invalid coupon.';
        } else {
            message = 'This coupon only applies to rare comics';
        };
    };

    if (usedCoupons.includes(COUPONS[1].coupon)) {
        if(commonsHQs.length > 0) {
            amountCommonsHQsPrice = commonsHQs.reduce((soma, item) => soma + item.prices[0].price, 0);
            commonsHQsDiscount = amountCommonsHQsPrice * COUPONS[1].discount / 100;
            message = 'Coupon successfully applied';
            if((usedCoupons[usedCoupons.length - 1] !== COUPONS[0].coupon) && (usedCoupons[usedCoupons.length - 1] !== COUPONS[1].coupon)) message = 'Invalid coupon.';
        } else {
            message = 'This coupon only applies to common comics'
        };
    };

    return {
        discount: (raresHQsDiscount + commonsHQsDiscount),
        message: message,
        availableCouponsUsed: availableCouponsUsedToShow,
    };
};

