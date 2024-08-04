import "./Program.scss";
import program_01 from "../../assets/program-1.png";
import program_02 from "../../assets/program-2.png";
import program_03 from "../../assets/program-3.png";

import caption_icon1 from "../../assets/program-icon-1.png";
import caption_icon2 from "../../assets/program-icon-2.png";
import caption_icon3 from "../../assets/program-icon-3.png";
import Title from "../Title/Title";

const programs = [
    {
        id: 1,
        img: program_01,
        cation_img: caption_icon1,
        title: "Graduation Degree",
    },
    {
        id: 2,
        img: program_02,
        cation_img: caption_icon2,
        title: "Master Degree",
    },
    {
        id: 3,
        img: program_03,
        cation_img: caption_icon3,
        title: "Post Graduation",
    },
];

function Program() {
    return (
        <div className="program p-4" id="program">
            <div className="program__inner">
                <Title sub_title="Our program" title="what we offer" />
                <div className="program__list">
                    {programs.map((program, index) => {
                        return (
                            <section key={program.id} className="program__card">
                                <img
                                    src={program.img}
                                    alt="card"
                                    className="program__card-img"
                                />

                                <div className="program-caption">
                                    <img src={program.cation_img} alt="" />
                                    <p className="program-caption-title">
                                        {program.title}
                                    </p>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Program;
