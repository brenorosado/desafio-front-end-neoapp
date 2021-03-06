import { useContext, useState } from "react";
import { ItemLine, QuantityElement, PriceElement, RemoveButton } from "../styles/cartitem";
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { Context } from "../Context";
import { validateCoupon } from "../../src/helpers/coupons";
import Image from "next/image";

const CartItem = ({ comic, setCartUpdated }) => {
    const { cartItems, setCartItems, usedCoupons, setUsedCoupons, couponInformation, setCouponInformation } = useContext(Context);
    const [quantity, setQuantity] = useState(cartItems.filter(item => item === comic).length);
    const { thumbnail, title, prices, comicType } = comic;
    const totalItemPrice = prices[0].price ? (prices[0].price * quantity) : 0;

    const subtractUnit = () => {
        let aux = cartItems;
        if (quantity > 1) {
            cartItems.splice(cartItems.lastIndexOf(comic), 1);
            setCartItems(aux);
            setQuantity(prevQuantity => prevQuantity - 1);
            setCartUpdated(true);
            setCouponInformation(validateCoupon(cartItems, usedCoupons));
        };
    };

    return (
        <ItemLine>
            <td><Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} height={174} width={116} /></td>
            <td><h4>{title} (<small> {comicType === 'raro' ? 'raro' : 'comum'} </small>)</h4></td>
            <td>
                <QuantityElement>
                    Qtd:
                    <div>
                        <button onClick={() => subtractUnit()}>
                            <BsCaretLeftFill />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => {
                            setCartItems([...cartItems, comic]);
                            setQuantity(prevQuantity => prevQuantity + 1);
                            setCouponInformation(validateCoupon(cartItems, usedCoupons));
                        }}>
                            <BsCaretRightFill />
                        </button>
                    </div>
                    <RemoveButton onClick={() => {
                        setCartItems(cartItems.filter(item => item !== comic));
                        setCouponInformation(validateCoupon(cartItems, usedCoupons));
                    }}>Remover</RemoveButton>
                </QuantityElement>
            </td>
            <td>
                <PriceElement>
                    Pre??o:
                    <span>{totalItemPrice ? `$${totalItemPrice.toFixed(2)}` : 'Gr??tis'}</span>
                </PriceElement>
            </td>
        </ItemLine>
    );
};

export default CartItem;