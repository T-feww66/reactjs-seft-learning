import Button from "../Button/Button";
import Navigaition from "../Navigaition/Navigaition";
import style from "./Header.module.css";

function Header() {
    return (
        <header className={`${style.header}`}>
            <nav className={`${style.navbar}`}>
                <img
                    src="/images/brand_logo.png"
                    alt="Nike"
                    className={`${style.header__logo}`}
                />
                <Navigaition />
                <Button value="Login" small />
            </nav>
        </header>
    );
}

export default Header;
