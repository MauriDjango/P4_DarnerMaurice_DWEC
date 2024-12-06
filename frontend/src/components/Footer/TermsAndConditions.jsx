import {Link} from "react-router-dom";
import React from "react";


const TermsAndConditions = () => {
    return (
        <nav className={'footer__contact'}>
            <Link to={"/contact"}>Terms and Conditions</Link>
        </nav>
    )
}

export default TermsAndConditions