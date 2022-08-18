//import "./Image.css";
import styled from "styled-components";

const StyledImage = styled.div`
  margin-bottom: 5%;
  img:hover {
    box-shadow: 0px 0px 40px 10px white;
  }
  img {
    height: 80vh;
  }
`;

export default function Image(props) {
  return (
    <StyledImage>
      <div className="image-container">
        <img src={props.data.hdurl} alt="NASA POD" />
      </div>
    </StyledImage>
  );
}
