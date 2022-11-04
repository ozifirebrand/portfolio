import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            link: 'https://linkedin.com/in/kelechi-okoroafor',
            name: 'Okoroafor Kelechi Divine',
            role: 'Full-Stack Web Developer. Improving open-source projects, Let time fly!',
            test: 'As a developer and a problem solver, I think Ozioma is a great collaborative partner ' +
                  'to have. I have learnt spring-boot, some basic Micro-services & vue.js projects from her' +
                  ' and since then I have drastically progressed in my understanding of the development process. ' +
                  'She always has a professional environment and has good audio and video quality which makes it ' +
                  'easier to communicate with her.',
        },
        {
            id: 2,
            link: 'https://www.linkedin.com/in/mary-jane-okoroafor-462a53178/',
            name: 'Okoroafor Chinonye',
            role: 'Go-lang Developer',
            test: "It will always be a pleasure to collaborate and learn with Ozi on different projects. " +
                "One of the things that I think is special about her is that she never settles, " +
                "even after completing the projects she finds other resources and strengthens her " +
                "knowledge. Collaborating with her is easy and comfortable, it's like working with " +
                "someone from Heaven!",
        },
    ];
    return (
        <section id="testmonials">
            <h5>Feedback from my peers</h5>
            <h2>Testimonials</h2>
            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {testimonials.map((test) => (
                    <SwiperSlide className="testimonial" key={test.id}>
                        <div className="client__avatar">
                            <a href={test.link}>
                                <BsLinkedin />
                            </a>
                        </div>
                        <h5 className='client__name'>{test.name}</h5>
                        <small className="client__review">{test.test}</small>
                    </SwiperSlide>
                ))}
            </Swiper>


        </section>
    )
}

export default Testimonials