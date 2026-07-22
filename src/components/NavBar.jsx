//icon
import { CiMenuBurger } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { MdLiveTv } from "react-icons/md";

//Hooks e components
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

//img
import logo from "../assets/Logo.png";

//CSS
import "./NavBar.css";

function NavBar() {

    const showMenu = () => {
        let menu = document.querySelector(".navbar_menu");
        let menuBurguer = document.querySelector(".showMenu");
        if (menu) {
            menu.classList.toggle("navbar_menu");
            menu.classList.toggle("showMenu");
        } else {
            menuBurguer.classList.toggle("navbar_menu");
            menuBurguer.classList.toggle("showMenu");
        }
    }

    const resizeWindow = () => {
        let menuBurguer = document.querySelector(".showMenu");
        menuBurguer.classList.toggle("navbar_menu");
        menuBurguer.classList.toggle("showMenu");
    }

    window.addEventListener("resize", () => {
        let menuBurguer = document.querySelector(".showMenu");
        window.innerWidth > 720 && menuBurguer !== null ? resizeWindow() : null;
    });
    
    return (
        <header>
            <nav className="navbar">
                <div>
                    <NavLink className="box_logo" to={"/"}>
                        <img className="logo" src={logo} alt="WebCanais" />
                        <h2 className="logo_title">Web<span>Canais</span></h2>
                    </NavLink>
                </div>
                <ul className="navbar_menu">
                    <li>
                        <NavLink className="menu_item" to={"/"} onClick={() => showMenu()}><GoHome/> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="menu_item" to={"/channels"} onClick={() => showMenu()}><MdLiveTv/> Canais</NavLink>
                    </li>
                </ul>
                <button className="button_menu" onClick={() => showMenu()}><CiMenuBurger className="menu"/></button>
            </nav>
        </header>
    )
}

export default NavBar;