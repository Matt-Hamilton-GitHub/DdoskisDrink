import React from 'react'
import Star from "./Star";
import styled from "styled-components";

export const FiveStars = () => {
  return (
    <Wrapper>
    <div className="stars-div">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .stars-div {
    display: flex;
    flex-direction: row;
  }

`