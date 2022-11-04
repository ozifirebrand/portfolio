import React from 'react';
import IMG1 from '../../assets/print.jpg';
import IMG2 from '../../assets/igbo.jpg';
import IMG4 from '../../assets/shopping.jpg';

import './portfolio.css';

const Portfolio = () => {
    const soloProjects = [
        {
            id: 1,
            title: 'PrintApp',
            img: IMG1,
            description:
                'A print pre-order application. Upload image, get print in 3 days.',
            technologies: 'H2 database | Mockito | AssertJ | Spring-boot | Unit-testing | ' +
                'Netlify | Heroku | Figma | Vue.js',
            link: 'https://printhia-v1.herokuapp.com/',
            github: 'https://github.com/ozifirebrand/printiNkeApp',
        },
        {
            id: 2,
            title: 'ShoppingMood',
            img: IMG4,
            description:
                'A shopping application',
            technologies: 'Spring security (JWT and OAuth) | MySQL | UML | Cloudinary' +
                ' | Spring-boot test',
            link: '',
            github: 'https://github.com/ozifirebrand/spring-mood',
        },
        {
            id: 3,
            title: 'Elekere',
            img: IMG2,
            description: 'Elekere (clock in Ibo) is an application developed with spring-boot ' +
                'to display the current time and day of the week',
            technologies: 'Thymeleaf | HTML and CSS',
            link: '',
            github: 'https://github.com/ozifirebrand/elekereV1',
        },
    ];

    return (
        <section id={"portfolio"}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className={"container portfolio__container"}>
                {soloProjects.map((project) => (
                    <article className={"portfolio__item"} key={project.id}>
                        <div className={"portfolio__item-image"}>
                            <img src={project.img} alt={project.title} />
                        </div>
                        <div className={"portfolio__item-content"}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p>{project.technologies}</p>
                        </div>
                        <div className={"portfolio__item-cta"}>
                            <a
                                href={project.github}
                                target={"_blank"}
                                className={"btn"}
                                rel={"noreferrer"}>GitHub
                            </a>
                            <a
                                href={project.link}
                                target={"_blank"}
                                className={"btn btn-primary"}
                                rel={"noreferrer"}>Visit Website
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
export default Portfolio;