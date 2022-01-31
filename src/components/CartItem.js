import { useContext, useEffect, useState } from "react";
import { ItemLine, QuantityElement, PriceElement, RemoveButton } from "../styles/cartitem";
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { Context } from "../Context";

const CartItem = ({ comic, totalPrice, setTotalPrice }) => {
    const [quantity, setQuantity] = useState(1);
    const { cartItems, setCartItems } = useContext(Context);

    const { thumbnail, title, prices } = comic;
    const totalItemPrice = prices[0].price ? (prices[0].price * quantity) : 0;

    console.log('totalPrice', totalPrice);
    
    useEffect(() => {
        setTotalPrice(totalPrice + totalItemPrice);
    }, [totalItemPrice]);

    return (
        <ItemLine>
            <td><img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} /></td>
            <td><h4>{title}</h4></td>
            <td>
                <QuantityElement>
                    Quant:
                    <div>
                        <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : 1}><BsCaretLeftFill /></button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}><BsCaretRightFill /></button>
                    </div>
                    <RemoveButton onClick={() => setCartItems(cartItems.filter(item => item !== comic))}>Remove</RemoveButton>
                </QuantityElement>
            </td>
            <td>
                <PriceElement>
                    Price:
                    <span>{totalItemPrice ? `$${totalItemPrice.toFixed(2)}` : 'Free'}</span>
                </PriceElement>
            </td>
        </ItemLine>
    );
};

export default CartItem;