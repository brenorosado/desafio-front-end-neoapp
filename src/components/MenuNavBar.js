import Link from "next/link";
import { BsCartFill, BsPersonFill } from 'react-icons/bs';
import { NavBar } from "../styles/menunavbar";

const MenuNavBar = () => {
    return (
        <NavBar>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li>
                    <Link href="/user"><a><BsPersonFill /></a></Link>
                    <Link href="/cart"><a><BsCartFill /></a></Link>
                </li>
            </ul>
        </NavBar>
    )
};

export default MenuNavBar;