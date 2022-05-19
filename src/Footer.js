
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components";


const StyledFooter = styled.div`
    font-size: 2rem;
    color: white;
    
   

    footer{
        display: flex;
        justify-content: center;
    }

    .icon{
        padding: 10px;
    }

`


export default function Footer(){



    return (
        <StyledFooter>
        <footer>
            <div className="icon linkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="icon gitHub">
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </footer>
        </StyledFooter>
    )
}

// "fa-brands fa-linkedin"