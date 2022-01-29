import Link from "next/link";
import { BsCartFill } from 'react-icons/bs';
import { NavBar } from "../styles/menunavbar";

const MenuNavBar = () => {
    return (
        <NavBar>
            <Link href="/"><a>Home</a></Link>
            <Link href="/cart"><a><BsCartFill /></a></Link>
        </NavBar>
    )
};

export default MenuNavBar;