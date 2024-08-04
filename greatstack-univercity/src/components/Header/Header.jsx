import "./Header.scss";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

function Header() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    });
    return (
        <div className={`header fixed ${sticky ? "dark-header" : ""}`}>
            <div className="header__inner">
                <div className="header-logo">
                    <img src={logo} alt="Estusity" />
                </div>

                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <a className="nav__link" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav__link" href="#program">
                                Program
                            </a>
                        </li>
                        <li>
                            <a className="nav__link" href="#about">
                                About us
                            </a>
                        </li>
                        <li>
                            <a className="nav__link" href="#campus">
                                Campus
                            </a>
                        </li>
                        <li>
                            <a className="nav__link" href="#testimonials">
                                Testimonials
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header__action">
                    <Button href="#contact">Contact us</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
