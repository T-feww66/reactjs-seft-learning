import style from "./Navigaition.module.css"
function Navigaition() {
    return (
        <ul className={`${style.nav__list}`}>
            <li className={`${style.nav__item}`}>
                <a href="#!">MENU</a>
            </li>
            <li className={`${style.nav__item}`}>
                <a href="#!">LOCATION</a>
            </li>
            <li className={`${style.nav__item}`}>
                <a href="#!">ABOUT</a>
            </li>
            <li className={`${style.nav__item}`}>
                <a href="#!">CONTACT</a>
            </li>
        </ul>
    );
}

export default Navigaition;
