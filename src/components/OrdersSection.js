import { useContext } from "react";
import { Context } from "../Context";
import { SectionOrders } from "../styles/orderssection";
import Link from "next/link";
import Image from "next/image";

const OrdersSection = () => {
    const { orders } = useContext(Context);

    return (
        <SectionOrders>
            <h1>Meus pedidos:</h1>
            <table>
                <tbody>
                    {
                        orders[0] ? (
                            orders.map(item => {
                                const { cartItems, totalOrderPrice } = item;
                                let renderedItem = [];

                                return (
                                    <tr>
                                        <td>
                                            <ul>
                                                {
                                                    cartItems.map(item => {
                                                        const { id, title, thumbnail } = item;
                                                        const amonutOfSameItem = cartItems.filter((comic) => (comic === item)).length;

                                                        if (!renderedItem.includes(item)) {
                                                            renderedItem = [...renderedItem, item];
                                                            return (
                                                                <li>
                                                                    <Link href={`/comic/${id}`}>
                                                                        <>
                                                                            <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} height={100} width={66.66}/>
                                                                            <span><small>({amonutOfSameItem}) {title}</small></span>
                                                                        </>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        }
                                                    })
                                                }
                                            </ul>
                                        </td>
                                        <td>
                                            <span><small>Pre??o total: <strong>${totalOrderPrice.toFixed(2)}</strong></small></span>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td>
                                    <span>Nenhum pedido foi feito ainda.</span>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </SectionOrders>
    )
};

export default OrdersSection;