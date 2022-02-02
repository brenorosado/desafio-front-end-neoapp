import { Context } from "../../src/Context";
import { useContext, useEffect, useState } from "react";
import { CartMain, CartSection, PaymentSection, CouponSection, InputField, InputButton, EmptyCartElement, PurchaseMadeContainer } from "../../src/styles/cart";
import CartItem from "../../src/components/CartItem";
import { BsCheckCircleFill } from 'react-icons/bs';
import { GiSpiderMask } from 'react-icons/gi';
import Link from "next/link";
import { validateCoupon } from "../../src/helpers/coupons";

const Cart = () => {
    const { cartItems, setCartItems, usedCoupons, setUsedCoupons, couponInformation, setCouponInformation } = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartUpdated, setCartUpdated] = useState(false);
    const [purchaseMade, setPurchaseMade] = useState(false);
    const [coupon, setCoupon] = useState('');
    let renderedItems = [];

    useEffect(() => {
        setCartUpdated(false);
        setTotalPrice(cartItems.reduce((soma, item) => soma + item.prices[0].price, 0));
        setCouponInformation(validateCoupon(cartItems, usedCoupons));
    }, [cartItems, cartUpdated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsedCoupons(prevUsedCoupons => [...prevUsedCoupons, coupon]);
        setCoupon('');
        setCartUpdated(true);
    };

    return (
        <CartMain>
            {
                purchaseMade ? (
                    <PurchaseMadeContainer>
                        <h2><strong><BsCheckCircleFill/></strong> Your purchase has been made.</h2>
                        <h2>Thanks for shopping with us <span><GiSpiderMask/></span></h2>
                        <Link href="/">
                            <button>Back to shopping</button>
                        </Link>
                    </PurchaseMadeContainer>
                ) : (
                    <>
                        <CartSection>
                            <table>
                                <tbody>
                                    {
                                        Boolean(cartItems[0]) ? (
                                            cartItems.map(item => {
                                                if (!renderedItems.includes(item)) {
                                                    renderedItems = [...renderedItems, item];
                                                    return <CartItem key={item.id} comic={item} setCartUpdated={setCartUpdated} />;
                                                };
                                            })) : (
                                            <tr>
                                                <EmptyCartElement>
                                                    <h3>Empty cart.</h3>
                                                    <Link href="/"><button>Go shopping</button></Link></EmptyCartElement>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </CartSection>
                        <PaymentSection>
                            <p><strong>Total price:</strong> ${totalPrice ? totalPrice.toFixed(2) : '0.00'}</p>
                            <p><strong>Discount:</strong> ${couponInformation ? couponInformation.discount.toFixed(2) : '0.00'}</p>
                            <hr />
                            <p><strong>Final Price: </strong> ${couponInformation ? (totalPrice - couponInformation.discount).toFixed(2) : totalPrice.toFixed(2)}</p>
                            <button onClick={() => {
                                if(cartItems[0]) {
                                    setCartItems([]);
                                    setUsedCoupons([]);
                                    setPurchaseMade(true);
                                }
                            }}>Buy now</button>
                        </PaymentSection>
                        <CouponSection>
                            <form onSubmit={handleSubmit}>
                                <InputField type="text" placeholder="DISCOUNT COUPON" value={coupon} onChange={e => setCoupon(e.target.value)} />
                                <InputButton type="submit" value="Apply" />
                            </form>
                            <br/>
                            <span>Available cupons used: {couponInformation ? couponInformation.availableCouponsUsed.map(item => <strong>| {item} |</strong>) : (<strong>'none'</strong>)}.</span>
                        </CouponSection>
                    </>
                )
            }
        </CartMain>
    );
};

export default Cart;

