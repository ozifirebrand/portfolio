import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
    return (
        <section id={"experience"}>
            <h5>The Skills I Have</h5>
            <h2>Skills</h2>
            <div className={"container experience__container"}>
                <div className={"experience__frontend"}>
                    <h3>Front-end Development</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>HTML</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>CSS</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>JavaScript</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Thymeleaf</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__backend"}>
                    <h3>Back-end Development</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Java</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Spring-boot</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Django</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__cloud_computing"}>
                    <h3>Cloud Computing</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>AWS</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            {/*google cloud platform*/}
                            <h4> Google CP</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Jenkins</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Terraform</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Docker</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Netlify</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Heroku</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__dsa"}>
                    {/*Data structure and algorithm*/}
                    <h3>DSA</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Graphs</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Trees</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Maps</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Lists</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Stacks</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Queues</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Sets</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__db"}>
                    {/*Database and SQL*/}
                    <h3>DB and SQL</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>MySQL</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>PostgresSQL</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>MongoDB</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Redis</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__git_version_control"}>
                    <h3>Git Version control</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>GitHub</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>GitLab</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Bit bucket</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__oop"}>
                    {/*Object Oriented Programming*/}
                    <h3>OOP</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Polymorphism</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Inheritance </h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Abstraction </h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Encapsulation</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__systems_designs"}>
                    <h3>Systems Design</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>UML</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Databases</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>ERD </h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>API testing</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>documentation with Postman</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__microservices"}>
                    <h3>Microservices</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>MVC</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>MVVT</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>RabbitMQ</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Discovery client configuration</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__ttd"}>
                    <h3>Test Driven Development</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Mockito</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>JUnit 5</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>AssertJ for Java</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>pytest</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>unittest for Python</h4>
                        </article>
                    </div>
                </div>

                <div className={"experience__containerisation"}>
                    <h3>Containerisation</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4>Docker</h4>
                        </article>
                        <article className={"experience__details"}>
                            <BsFillPatchCheckFill className={"experience__details-icon"} />
                            <h4> Docker Compose</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience