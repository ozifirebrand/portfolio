import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/ozioma1.jpg';
import './intro.css';

const Intro = () => {
    return (
        <section id={"about"}>
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={ ME } alt={"me"} />
                    </div>
                </div>
                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={"about__card"}>
                            <FaAward className={"about__icon"} />
                            <h5>Experience</h5>
                            <small>2 year</small>
                        </article>
                        <article className={"about__card"}>
                            <VscFolderLibrary className={"about__icon"} />
                            <h5>Projects</h5>
                            <small>5+ Completed Projects</small>
                        </article>
                    </div>
                    <p>
                        Focused and quick-learning Software Engineer with 2 years of experience
                        in computer science, programming, and micro-services for various projects and
                        clients.
                    </p>
                    <a href={"#contact"} className={"btn btn-primary"}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default Intro