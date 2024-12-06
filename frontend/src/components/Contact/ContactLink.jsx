import React from "react";
import { Link } from 'react-router-dom';


const ContactLink = () => {
    return (
        <nav className={'footer__contact'}>
            <Link to={"/contact"}>Contact</Link>
        </nav>
    )
}

export default ContactLink