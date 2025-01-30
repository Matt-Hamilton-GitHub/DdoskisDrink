import React from 'react'
import favorites from "../assets/DdFavorite";
import ddimg from "../assets/ddoski4.webp";
import styled from "styled-components";
import { FiveStars } from './FiveStars';
import { Link } from "react-router-dom";
import Item from "./Item";


export const DDFavorite = ({props}) => {
  return (
    <Wrapper>
         <div className="ddoskis-favorite-section">
            <div className="favorite-section-top">
              <img src={ddimg} alt="ddoski laying on the beach" />
              <h3>Ddoski's Favorites:</h3>
            </div>
            <div className="favorite-drinks">
              {props?.map((item, idx) => (
                <div className="favorite-drink">
                  <Link to={`drink/${item.idDrink}`}>
                    <Item key={idx} pros={item} />
                  </Link>
                  <h4>{favorites[idx].comment}</h4>
                  <FiveStars />
                </div>
              ))}
            </div>
          </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  align-content: center;
  width: 100vw;

  .search-div .submit {
    margin: 20px;
    padding: 10px;
    background-color: green;
  }

  .search-div {
    margin: 20px;
  }

  input {
    padding: 5px;
    width: 320px;
    height: 40px;
    text-align: center;
    border-radius: 20px;
    border: solid 3px #dda330;
    color: #617191;
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    box-sizing: border-box;
    background-color: #f5d28d;
  }

  input:focus {
    outline: none;
  }

  .drinks-div {
    display: flex;
    justify-content: space-evenly;
    padding: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #e3dfd5;
  }

  .filters-div {
    margin: 0 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    font-family: "Lexend", sans-serif;
    font-weight: 300;
  }

  .filter-btn {
    margin: 10px;
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    border: 1px black solid;
    font-weight: bold;
    height: 30px;

    font-family: "Lexend", sans-serif;
    font-weight: 300;
  }

  .filters-section {
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .filters-section span {
    font-weight: bold;
    text-align: center;

    font-family: "Lexend", sans-serif;
    font-weight: 300;
  }

  .ddoski-favorite {
    cursor: pointer;
    background-color: black;
    border-radius: 5px;
    color: white;
    border: grey solid 1px;
    height: 30px;

    font-family: "Lexend", sans-serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  .active {
    background-color: orange;
  }

  .ddoskis-favorite-section {
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
    flex-wrap: wrap;
    border: 2px dashed grey;
    font-weight: 900;
    align-items: center;
    text-align: center;

    background-image: url("https://www.transparenttextures.com/patterns/green-gobbler.png");
  }

  .active-favorite {
    color: black;
    background-color: white;
    font-weight: bold;
  }

  .favorite-drinks {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }

  .favorite-drink {
    display: flex;
    margin: 10px 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 400px;
  }

  .favorite-drink h4 {
    font-family: "Lexend", sans-serif;
    font-weight: 300;
  }

  .stars-div {
    display: flex;
    flex-direction: row;
  }
  .favorite-section-top {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  }

  .favorite-section-top img {
    width: 200px;
    border-radius: 90px;
  }
`;
