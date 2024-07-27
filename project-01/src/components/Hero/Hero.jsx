import Button from "../Button/Button";
import style from "./Hero.module.css";
function Hero() {
    return (
        <div className={`${style.hero}`}>
            <div className={`${style.hero__inner}`}>
                <div className={`${style.hero__info}`}>
                    <h1 className={`${style.hero__title}`}>
                        YOUR FEET DESERVE THE BEST
                    </h1>
                    <p className={`${style.hero__desc}`}>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU
                        WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE
                        TO HELP YOU WITH OUR SHOES.
                    </p>

                    <div className={`${style.hero__action}`}>
                        <Button value="Shop Now" medium />
                        <Button value="Category" medium outline />
                    </div>
                    <span className={`${style.hero__store}`}>
                        Also Available On
                    </span>
                    <div className={`${style.hero__icons}`}>
                        <img src="/public/images/flipkart.png" alt="Flipkart" />
                        <img src="/public/images/amazon.png" alt="Amazon" />
                    </div>
                </div>
                <div className={`${style.hero__thumb}`}>
                    <img
                        src="/public/images/shoe_image.png"
                        alt="Shoes product"
                        className={`${style.hero__img}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
