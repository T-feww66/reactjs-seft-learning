import Button from "../Button/Button";
import "./Hero.scss";
import dark_arrow from "../../assets/dark-arrow.png";
function Hero() {
    return (
        <div className="hero">
            <div className="hero__text">
                <h1 className="hero__title">
                    We Ensure better education for a better world
                </h1>
                <p className="hero__desc">
                    Our cutting-edge curriculum is designed to empower students
                    with the knowledge, skills, and experiences needed to excel
                    in the dynamic field of education
                </p>

                <Button large>
                    Explore more <img src={dark_arrow} alt="" />
                </Button>
            </div>
        </div>
    );
}

export default Hero;
