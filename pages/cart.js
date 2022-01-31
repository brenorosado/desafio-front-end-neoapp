import { Context } from "../src/Context";
import { useContext, useState } from "react";
import { CartMain, CartSection, PaymentSection } from "../src/styles/cart";
import CartItem from "../src/components/CartItem";

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const { cartItems } = useContext(Context);

    return (
        <CartMain>
            <CartSection>
                <table>
                    <tbody>
                        {
                            cartItems.map(item => <CartItem comic={item} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />)
                        }
                    </tbody>
                </table>
            </CartSection>
            <PaymentSection>
                    <p><strong>Total price:</strong> ${totalPrice.toFixed(2)}</p>
            </PaymentSection>
        </CartMain>
    );
};

export default Cart;