import { useContext } from "react";
import { Context } from "../../src/Context";
import { ItemAddedMain, ItemContainer, ButtonsContainer } from "../../src/styles/itemadded";
import { BsCheckCircleFill } from 'react-icons/bs';
import Link from "next/link";

const ItemAdded = ({ id }) => {
    const { cartItems } = useContext(Context);

    let comicAdded = null;

    if (cartItems[0]) {
        cartItems.map(item => {
            if (item.id === Number(id)) comicAdded = item;
        });
    }

    return (
        <ItemAddedMain>
            <section>
                {
                    (comicAdded) ? (
                        <>
                            <h1><strong><BsCheckCircleFill /></strong> Item added to cart.</h1>
                            <ItemContainer>
                                <img src={`${comicAdded.thumbnail.path}.${comicAdded.thumbnail.extension}`} />
                                <span>{comicAdded.title}</span>
                            </ItemContainer>
                            <ButtonsContainer>
                                <Link href="/">
                                    <button>Continue shoping</button>
                                </Link>
                                <Link href="/cart">
                                    <button>Go to cart</button>
                                </Link>
                            </ButtonsContainer>
                        </>
                    ) : (
                        <>
                            <h1>No item added to cart.</h1>
                            <ButtonsContainer>
                                <Link href="/">
                                    <button>Go shoping</button>
                                </Link>
                                <Link href="/cart">
                                    <button>Go to cart</button>
                                </Link>
                            </ButtonsContainer>
                        </>
                    )
                }
            </section>
        </ItemAddedMain>
    );
};

export function getServerSideProps(context) {
    return {
        props: {
            id: context.query.id,
        }
    }
};

export default ItemAdded;