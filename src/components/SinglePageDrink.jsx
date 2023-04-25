import styled from "styled-components";

import { useParams } from "react-router-dom";

const SinglePageDrink = () => {
  const { id } = useParams();
  return <Wrapper>{id}</Wrapper>;
};

export default SinglePageDrink;

const Wrapper = styled.div`
  background-color: yellow;
`;
