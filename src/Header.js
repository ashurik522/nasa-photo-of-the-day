import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    header {
      color: lightseagreen;
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 5%;
      margin-top: 2%;
    }

    h1{
      font-size: 2rem;
      padding: 1%;
      font-weight: bolder;
    }
    h3{
      padding: 1%;
      font-size: 1.2rem;
    }
    a{
      padding: 2%;
    }
    a:visited{
      color: lightseagreen;
    }

`

export default function(props) {
  
 

    return(
      <StyledHeader>
        <header className="header">
        <h1>Astronomy Picture of the Day</h1>
        <div className = "top-container">
          <h3 className="date"> {props.data.date} </h3>
          <a href="https://apod.nasa.gov/apod/archivepix.html" target= "_blank">Previous APOD's</a>
        </div>
      </header>
      </StyledHeader>
    )
}

