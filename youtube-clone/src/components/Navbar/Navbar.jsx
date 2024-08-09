import "./Navbar.scss";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import jack from "../../assets/jack.png";
import { Link } from "react-router-dom";

function Navbar({ handleClickMenu }) {
    return (
        <nav className="nav">
            <div className="nav__inner flex">
                <div className="logo flex">
                    <img
                        src={menu}
                        alt=""
                        className="logo__menu"
                        onClick={handleClickMenu}
                    />
                    <Link to="/feed/0">
                        <img src={logo} alt="" className="logo__icon" />
                    </Link>
                </div>
                <div className="nav-search flex">
                    <input
                        type="text"
                        className="nav-search__input"
                        placeholder="Search"
                    />
                    <img src={search} alt="" />
                </div>

                <div className="nav-right flex">
                    <div className="nav-action flex">
                        <img src={upload} alt="" />
                        <img src={more} alt="" />
                        <img src={notification} alt="" />
                    </div>
                    <img src={jack} className="nav__avatar" alt="" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
