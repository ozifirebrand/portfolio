import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { useForm } from '@formspree/react';
import './contact.css';

const Contact = () => {
    const [state, handleSubmit] = useForm("meqdvvnz");
    if (state.succeeded) {
        return <p className={"success-message"}>
            I have received your message, thank you!
        </p>;
    }
    return (
        <section id={"contact"}>
            <h5>Get In Touch</h5>
            <h5>
                I do receive your messages and will respond asap if the valid email is
                provided :)
            </h5>
            <h2>Contact Me</h2>
            <div className={"container contact__container"}>
                <div className={"contact__options"}>
                    <article className={"contact__option"}>
                        <MdOutlineEmail className={"contact__option-icon"}/>
                        <h4>Email</h4>
                        <h6>oziomaokoroafor@gmail.com</h6>
                        <a href={"mailto:oziomaokoroafor@gmail.com"}>Send a message</a>
                    </article>
                </div>
                <form onSubmit={ handleSubmit }>
                    <input type={"text"} placeholder={"Your Full Name"} name={"user_name"}
                           required/>
                    <input type={"text"} placeholder={"Your Email"} name={"user_email"}
                           required/>
                    <textarea placeholder={"Your message"} rows={"7"} name={"message"}
                              required/>
                    <button type={"submit"} disabled={state.submitting}
                            className={"btn btn-primary"}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
export default Contact;