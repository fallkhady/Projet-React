import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { AiFillDashboard, AiFillProfile, AiOutlineStock } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { BsPersonFill, BsPersonLinesFill } from "react-icons/bs";
import { MdEventAvailable, MdMarkEmailUnread, MdShoppingBasket } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { SiSupabase } from "react-icons/si";
import Logo from '../Images/logo.png';
import '../style.css';

const Navbar = () => {

    const [click, setClicked] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const handleClick = () => {
        setClicked(!click);
    }
    const handleCloseMobileMenu = () => {
        setShowNav(false);
    };

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowNav(true);
            } else {
                setShowNav(false);

            }

        });
        console.log(showNav, 'showNav?');

    }, []);

    return (
        <div>
            <div className="nav-link">

                <div className="menu-icon" onClick={handleClick}>
                    {click ?
                        <GrClose /> : <FiMenu />
                    }
                </div>
                <ul className="nav-container">
                    <li>
                        <Link to="/" className="link1"><BsPersonLinesFill /> </Link>


                    </li>
                    <li>
                        <Link to="/" className="link1"><MdMarkEmailUnread /> </Link>

                    </li>
                    <li>
                        <Link to="/" className="link1"><IoNotifications /> </Link>

                    </li>

                </ul>
            </div>
            <nav className={showNav ? "nav-menu" : "nav-menu active"}>

                <Link to="/" ><img src={Logo} alt="" /></Link>



                <ul className={click ? "navbar-menu active" : "navbar-menu"}>

                    <li onClick={handleCloseMobileMenu}>
                        <Link to="/" className="link"><AiFillDashboard /> Tableau de Bord</Link>
                    </li>
                    <li>
                        <Link to="/clients" className="link"><BsPersonFill /> Clients</Link>
                    </li><li>
                        <Link to="/produit" className="link"><AiFillProfile /> Produits</Link>
                    </li><li>
                        <Link to="/" className="link"><MdEventAvailable />  Vente</Link>
                    </li><li>
                        <Link to="/" className="link"> <MdShoppingBasket /> Achat</Link>
                    </li><li>
                        <Link to="/" className="link"><SiSupabase /> Fournisseurs</Link>
                    </li><li>
                        <Link to="/" className="link"><AiOutlineStock />  Stock</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;