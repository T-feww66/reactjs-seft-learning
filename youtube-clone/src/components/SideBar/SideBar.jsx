import "./SideBar.scss";

import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";

// top Sidebar
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";

import avatar1 from "../../assets/thumbnail1.png";
import avatar2 from "../../assets/thumbnail2.png";
import avatar3 from "../../assets/thumbnail3.png";
import { Link } from "react-router-dom";

function SideBar({ isOpen, handleClickMenu }) {
    return (
        <div className={`sidebar ${isOpen ? "" : "hide"}`}>
            <div className="sidebar__inner">
                <div className="logo flex sidebar__top">
                    <img
                        src={menu}
                        alt=""
                        className="logo__menu"
                        onClick={handleClickMenu}
                    />
                    <img src={logo} alt="" className="logo__icon" />
                </div>

                <div className="sidebar__feature sidebar__list">
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="sidebar__link"
                                onClick={handleClickMenu}
                            >
                                <img src={home} alt="" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/feed/20"
                                className="sidebar__link"
                                onClick={handleClickMenu}
                            >
                                <img src={game_icon} alt="" />
                                <span>Gaming</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/feed/2"
                                className="sidebar__link"
                                onClick={handleClickMenu}
                            >
                                <img src={automobiles} alt="" />
                                <span>Automobiles</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/feed/17"
                                className="sidebar__link"
                                onClick={handleClickMenu}
                            >
                                <img src={sports} alt="" />
                                <span>Sports</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/feed/24"
                                className="sidebar__link"
                                onClick={handleClickMenu}
                            >
                                <img src={entertainment} alt="" />
                                <span>Entertainment</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/feed/28"
                                className="sidebar__link"
                                onClick={handleClickMenu}
                            >
                                <img src={tech} alt="" />
                                <span>Technology</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/feed/22"
                                className="sidebar__link"
                                onClick={handleClickMenu}
                            >
                                <img src={blogs} alt="" />
                                <span>Blogs</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/feed/10"
                                className="sidebar__link"
                                onClick={handleClickMenu}
                            >
                                <img src={music} alt="" />
                                <span>Music</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/feed/25"
                                className="sidebar__link"
                                onClick={handleClickMenu}
                            >
                                <img src={news} alt="" />
                                <span>News</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebar__sub">
                    <h3 className="sidebar__sub-title">SUBSCRIBED</h3>

                    <div className="sidebar__list">
                        <ul>
                            <li>
                                <a
                                    to="/feed/20"
                                    className="sidebar__link"
                                    onClick={handleClickMenu}
                                >
                                    <img
                                        src={avatar1}
                                        alt=""
                                        className="sidebar__avatar"
                                    />
                                    <span>PewDiePie</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    to="/feed/20"
                                    className="sidebar__link"
                                    onClick={handleClickMenu}
                                >
                                    <img
                                        src={avatar2}
                                        alt=""
                                        className="sidebar__avatar"
                                    />
                                    <span>Mr.Beast</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    to="/feed/20"
                                    className="sidebar__link"
                                    onClick={handleClickMenu}
                                >
                                    <img
                                        src={avatar3}
                                        alt=""
                                        className="sidebar__avatar"
                                    />
                                    <span>Justin Bieber</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
