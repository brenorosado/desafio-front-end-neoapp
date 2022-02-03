import Link from "next/link";
import { useContext } from "react";
import { BsCartFill, BsPersonFill } from 'react-icons/bs';
import { Context } from "../Context";
import { NavBar } from "../styles/menunavbar";

const MenuNavBar = () => {
    const { setOffset } = useContext(Context);

    return (
        <NavBar>
            <ul>
                <li><Link href="/"><a onClick={(e) => setOffset(0)}><img src='/spiderman.ico' /></a></Link></li>
                <li>
                    <Link href="/user"><a><BsPersonFill /></a></Link>
                    <Link href="/cart"><a><BsCartFill /></a></Link>
                </li>
            </ul>
        </NavBar>
    )
};

export default MenuNavBar;