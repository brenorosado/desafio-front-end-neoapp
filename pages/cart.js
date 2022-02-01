import { Context } from "../src/Context";
import { useContext, useEffect, useState } from "react";
import { CartMain, CartSection, PaymentSection, CouponSection, InputField, InputButton } from "../src/styles/cart";
import CartItem from "../src/components/CartItem";
import { COUPONS } from "../src/helpers/cupons";

const Cart = () => {
    const { cartItems } = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartUpdated, setCartUpdated] = useState(false);
    const [coupon, setCoupon] = useState('');
    let renderedItems = [];

    useEffect(() => {
        setCartUpdated(false);
        setTotalPrice(cartItems.reduce((soma, item) => soma + item.prices[0].price, 0));
    }, [cartItems, cartUpdated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        COUPONS.map(item => {
            // if(item.coupon === e.target.value)
        });
    };

    return (
        <CartMain>
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
                                        <td><h3>Empty cart.</h3></td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </CartSection>
            <PaymentSection>
                <p><strong>Total price:</strong> ${totalPrice ? totalPrice.toFixed(2) : 0}</p>
                <p><strong>Discount: </strong></p>
                <hr/>
                <p><strong>Final Price: </strong></p>
            </PaymentSection>
            <CouponSection>
                <form onSubmit={handleSubmit}>
                    <InputField type="text" placeholder="DISCOUNT COUPON" value={coupon} onChange={e => setCoupon(e.target.value)}/>
                    <InputButton type="button" value="Apply"/>
                </form>
                <span></span>
            </CouponSection>
        </CartMain>
    );
};

export default Cart;