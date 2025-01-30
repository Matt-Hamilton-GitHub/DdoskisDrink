import styled from "styled-components";

export default function Star() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  margin: 5px;
  background-color: orange;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  width: 25px;
  height: 25px;
  border: 3px solid black;
`;
