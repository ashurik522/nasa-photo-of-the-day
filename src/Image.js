//import "./Image.css";
import styled from "styled-components";

const StyledImage = styled.div`
  margin-bottom: 5%;
  width: 100%;
  img:hover {
    box-shadow: 0px 0px 40px 10px white;
  }
  img {
    height: 80vh;
    max-width: 100vw;
  }
  iframe {
    height: 70vh;
    max-width: 100vw;
  }
`;

export default function Image(props) {
  let type = props.data.media_type;
  return (
    <StyledImage>
      <div className="image-container">
        {type === "video" ? (
          <iframe
            src={props.data.url}
            title="NASA VOD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            sandbox="allow-popups allow-scripts allow-popups-to-escape-sandbox allow-same-origin allow-presentation"
          />
        ) : (
          <img src={props.data.hdurl} alt="NASA POD" />
        )}
      </div>
    </StyledImage>
  );
}
