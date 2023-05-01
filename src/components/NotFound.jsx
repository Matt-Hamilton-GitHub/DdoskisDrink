import styled from "styled-components";
import dd from '../assets/dd_searching.png'

const NotFound = () => {
  return <Wrapper>
          <img src={dd} alt="searching bear"/>
          <h1>404</h1>
        </Wrapper>
  
};

export default NotFound;


const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

font-family: "Lexend", sans-serif;
`
