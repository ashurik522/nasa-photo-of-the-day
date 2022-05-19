import axios from "axios";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'





export default function Footer(){

    return (
        <footer>
            <div className="linkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="gitHub">
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </footer>
    )
}

// "fa-brands fa-linkedin"