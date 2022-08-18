import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledSearch = styled.div`
  .search-container {
    display: flex;
    justify-content: space-around;
    margin-left: 40%;
    margin-right: 40%;
    color: white;
    margin-bottom: 5%;
  }
`;

export default function Search(props) {
  const dateInput = document.getElementById("date");

  const onChange = () => {
    props.setDate(`&=${dateInput.value}`);
  };

  return (
    <StyledSearch>
      <div className="search-container">
        <label for="date">Chose date:</label>
        <input type="date" name="date" id="date" onChange={onChange} />
        <button type="submit">Submit</button>
      </div>
    </StyledSearch>
  );
}
