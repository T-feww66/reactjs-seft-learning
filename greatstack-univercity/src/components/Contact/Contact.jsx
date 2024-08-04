import "./Contact.scss";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import mail from "../../assets/mail-icon.png";
import message_icon from "../../assets/msg-icon.png";

import Title from "../Title/Title";
import Button from "../Button/Button";

function Contact() {
    return (
        <div className="contact p-4" id="contact">
            <div className="contact__wrap">
                <Title sub_title="Contact Us" title="Get in Touch" />
                <div className="contact__inner">
                    <div className="contact__info">
                        <h3 className="contact__title">
                            Send us a message <img src={message_icon} alt="" />
                        </h3>
                        <p className="contact__desc">
                            Feel free to reach out through contact form or find
                            our contact information below. Your feedback,
                            questions, and suggestions are important to us as we
                            strive to provide exceptional service to our
                            university community.
                        </p>
                        <ul className="contact__list">
                            <li>
                                <img src={mail} alt="" />
                                Contact@GreatStack.dev
                            </li>
                            <li>
                                <img src={phone} alt="" />
                                +1 123-456-7890
                            </li>
                            <li>
                                <img src={location} alt="" />
                                77 Massachusetts Ave, Cambridge MA 02139, United
                                States
                            </li>
                        </ul>
                    </div>

                    <div className="contact__send">
                        <form action="" className="contact__form">
                            <div className="contact__group">
                                <label htmlFor="name">Your name</label>
                                <input
                                    className="contact__input"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="contact__group">
                                <label htmlFor="phone">Phone number</label>
                                <input
                                    className="contact__input"
                                    id="phone"
                                    type="text"
                                    placeholder="Enter your number phone"
                                />
                            </div>
                            <div className="contact__group">
                                <label htmlFor="email">Your email</label>
                                <input
                                    className="contact__input"
                                    id="email"
                                    type="text"
                                    placeholder="Enter your email"
                                />
                            </div>{" "}
                            <div className="contact__group">
                                <label htmlFor="message">
                                    Write your messages here
                                </label>
                                <input
                                    className="contact__input"
                                    id="message"
                                    type="text"
                                    placeholder="Enter your message"
                                />
                            </div>
                            <Button className="mt-5" primary>
                                Submit Now
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
