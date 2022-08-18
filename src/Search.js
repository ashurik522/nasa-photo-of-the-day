import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  .search-container {
    display: flex;
    justify-content: center;
    color: white;
    margin-bottom: 5%;
    color: lightseagreen;
    font-family: "Montserrat", sans-serif;
  }
  button {
    margin-left: 1%;
  }
  label {
    margin-right: 10px;
  }
`;

export default function Search(props) {
  const dateInput = document.getElementById("date");

  const onSubmit = (e) => {
    e.preventDefault();
    props.setDate(`&date=${dateInput.value}`);
    dateInput.value = "";
  };

  const random = (e) => {
    e.preventDefault();
    const start = new Date("1995-06-16");
    const end = new Date();
    let date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
      .toISOString()
      .split("T")[0];

    props.setDate(`&date=${date}`);
  };

  return (
    <StyledSearch>
      <div className="search-container">
        <label for="date">Chose date: </label>
        <input type="date" name="date" id="date" />
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
        <button type="submit" onClick={random}>
          Random
        </button>
      </div>
    </StyledSearch>
  );
}
