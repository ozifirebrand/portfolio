import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub, FaTwitter} from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className={"header__socials"}>
            <a href={""} target={"_blank"} rel={"noreferrer"} ><BsLinkedin /></a>
            <a href={""} target={"_blank"} rel={"noreferrer"} ><FaGithub /></a>
            <a href={""} target={"_blank"} rel={"noreferrer"} ><FaTwitter /></a>
        </div>
    )
}
export default HeaderSocials