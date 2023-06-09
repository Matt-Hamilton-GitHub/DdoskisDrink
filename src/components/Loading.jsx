import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <LoadingSpinner />;
};

const LoadingSpinner = styled.div`
  position: relative;
  left: 50%;
  bottom: -50%;
  border: 3px solid black; /* Light grey */
  border-top: 3px solid orange;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
