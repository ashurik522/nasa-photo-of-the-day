import React from "react";
import styled from "styled-components";

const StyledInfo = styled.div`
    color: lightseagreen;
    font-family: 'Montserrat', sans-serif;

    h2{
        font-size: 1.5rem;
        padding: 1%;
        font-weight: bold;

    }
    .img-info{
        box-shadow: 0px 0px 5px 5px white;
        margin: 0px 20% 0px 20%;
    }

    p{
        font-size: 1.2rem;
        line-height: 1.3;
        margin: 2% 10% 0% 10%
        
        
    }
`

export default function(props){
console.log(props)

    return (
        <StyledInfo>
        <div className="bottom-container">
            <div className="img-info">
                <h2 className="title"> {props.data.title} </h2>
                <h2 className="copyright"> {props.data.copyright} </h2>
            </div>
            <p className="explanation"> {props.data.explanation} </p>
        </div>
        </StyledInfo>
    )
}