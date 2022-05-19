
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components";


const StyledFooter = styled.div`
    font-size: 2rem;
    color: white;
    margin-bottom: 2%;
    
   

    footer{
        display: flex;
        justify-content: center;
    }

    .icon{
        padding: 10px;
    }

    .icon: hover {
        box-shadow: 0px 0px 5px 5px white;
    }

`


export default function Footer(){

    const sendUser1 = () =>{
        window.location.replace("https://www.linkedin.com/in/andrew-shurik/")
    }

    const sendUser2 = () =>{
        window.location.replace("https://github.com/ashurik522")
    }

    return (
        <StyledFooter>
        <footer>
            <div className="icon linkedIn" onClick={sendUser1}>
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="icon gitHub" onClick={sendUser2}>
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </footer>
        </StyledFooter>
    )
}

// "fa-brands fa-linkedin"