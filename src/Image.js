import './Image.css'
import styled from 'styled-components';

const StyledImage = styled.div`
    margin-bottom: 5%;
     img{
       box-shadow: 0px 0px 40px 20px white;
     }

`


export default function Image(props) {
    
    return (
        <StyledImage>
        <div className='image-container'>
            <img src={props.data.hdurl} />
        </div>
        </StyledImage>
    )
        

    
}