import "./About.scss";
import about_img from "../../assets/about.png";
import icon_play from "../../assets/play-icon.png";
import Title from "../Title/Title";
function About({ setPlayVideo }) {
    return (
        <div className="about p-4" id="about">
            <div className="about__inner">
                <section className="about__media">
                    <img src={about_img} alt="" className="about__media-img" />
                    <img
                        src={icon_play}
                        alt=""
                        className="about__media-play"
                        onClick={() => setPlayVideo(false)}
                    />
                </section>

                <div className="about__info">
                    <div className="about__title">
                        <Title
                            title="Nurturing Tomorrow's Leaders Today"
                            sub_title="ABOUT UNIVERSITY"
                        />
                    </div>
                    <p className="about__desc">
                        Embark on a transformative educational journey with our
                        university's comprehensive education programs. Our
                        cutting-edge curriculum is designed to empower students
                        with the knowledge, skills, and experiences needed to
                        excel in the dynamic field of education.
                    </p>
                    <p className="about__desc">
                        With a focus on innovation, hands-on learning, and
                        personalized mentorship, our programs prepare aspiring
                        educators to make a meaningful impact in classrooms,
                        schools, and communities.
                    </p>
                    <p className="about__desc">
                        Whether you aspire to become a teacher, administrator,
                        counselor, or educational leader, our diverse range of
                        programs offers the perfect pathway to achieve your
                        goals and unlock your full potential in shaping the
                        future of education.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
