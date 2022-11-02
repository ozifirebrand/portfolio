import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <a href={"#home"} className={"footer__logo"}>Ozi</a>
            <ul className={"permalinks"}>
                <li><a href={"#home"}>Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experience"}>Skills</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#testimonials"}>Testimonials</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>
            <div className={"footer__socials"}>
                <a href={""} target={"_blank"} rel={"noreferrer"} ><BsLinkedin /></a>
                <a href={""} rel={"noreferrer"} ><FaGithub /></a>
                <a href={""} target={"_blank"} rel={"noreferrer"} ><FaAngellist /></a>
            </div>
            <div className={"footer__copyright"}>
                <small>Built by zipDemon </small>
                <small>&copy; 2022. All rights reserved.</small>
            </div>
        </footer>
    )
}
export default Footer