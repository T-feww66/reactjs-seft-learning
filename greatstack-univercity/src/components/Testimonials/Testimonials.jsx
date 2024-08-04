import "./Testimonials.scss";
import arrow_right from "../../assets/next-icon.png";

import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

import Title from "../Title/Title";
import { useRef } from "react";

const users = [
    {
        id: 1,
        name: "Emily Jackson",
        address: "Edusity, USA",
        avatar: user_1,
        desc: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
        id: 2,
        name: "Edogawa Conaa",
        address: "Japan",
        avatar: user_2,
        desc: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
        id: 3,
        name: "Hamful Rest",
        address: "London, USA",
        avatar: user_3,
        desc: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
        id: 4,
        name: "Monkey D. Luffy",
        address: "One Piece",
        avatar: user_4,
        desc: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
];

function Testimonials() {
    const listUser = useRef();
    let translate = 0;
    let percentMax = users.length * -50 + 100;

    console.log(percentMax);
    const prevSlide = () => {
        if (translate < 0) {
            translate += 50;
        }
        listUser.current.style.transform = `translateX(${translate}%)`;
    };

    const nextSlide = () => {
        if (translate > percentMax) {
            translate -= 50;
            console.log(percentMax, translate);
        }
        listUser.current.style.transform = `translateX(${translate}%)`;
    };

    return (
        <div className="test p-4" id="testimonials">
            <div className="test__inner">
                <Title
                    sub_title="TESTIMONIALS"
                    title="What Student Says
"
                />
                <div className="slider">
                    <button onClick={prevSlide} className="arrow arrow-left">
                        <img src={arrow_right} alt="" />
                    </button>
                    <button onClick={nextSlide} className="arrow arrow-right">
                        <img src={arrow_right} alt="" />
                    </button>

                    <div className="slider__cards">
                        <div ref={listUser} className="slider__list">
                            {users.map((user) => {
                                return (
                                    <section
                                        key={user.id}
                                        className="slider__card"
                                    >
                                        <div className="slider__info">
                                            <img src={user.avatar} alt="" />
                                            <div>
                                                <h3 className="slider__name">
                                                    {user.name}
                                                </h3>
                                                <p className="slider__add">
                                                    {user.address}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="slider__desc">
                                            {user.desc}
                                        </p>
                                    </section>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
