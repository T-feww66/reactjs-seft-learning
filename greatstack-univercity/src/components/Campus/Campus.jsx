import "./Campus.scss";
import Title from "../Title/Title";

import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import light_arrow from "../../assets/white-arrow.png";
import Button from "../Button/Button";

function Campus() {
    const galleries = [
        {
            id: 1,
            img: gallery_1,
        },
        {
            id: 2,
            img: gallery_2,
        },
        {
            id: 3,
            img: gallery_3,
        },
        {
            id: 4,
            img: gallery_4,
        },
    ];
    return (
        <div className="campus p-4" id="campus">
            <div className="campus__inner">
                <Title
                    sub_title="Gallery"
                    title="Campus Photos
"
                />
                <div className="campus__imgs">
                    {galleries.map((gallery) => {
                        return (
                            <section key={gallery.id} className="campus__item">
                                <img
                                    src={gallery.img}
                                    alt=""
                                    className="campus__item-img"
                                />
                            </section>
                        );
                    })}
                </div>

                <div className="campus__action">
                    <Button large primary>
                        See more here <img src={light_arrow} alt="" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Campus;
