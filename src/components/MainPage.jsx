import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Item from "./Item";
import favorites from "../assets/DdFavorite";
import Star from "./Star";

import "../styles.css";
import styled from "styled-components";
import TopSection from "./TopSection";

import ddimg from "../assets/ddoski4.webp";
import Loading from "./Loading";

export default function MainPage() {
  //url for the api to fetch the cocktails
  var URL = "https://thecocktaildb.com/api/json/v1/1/";

  //stores all the data received from the api, it is an array
  const [drinks, setDrinks] = new useState([]);

  //holds the name of the particular cocktail that user inputs
  const [url, setUrl] = new useState(URL);
  const [keySearch, setKeySearch] = new useState("smoothie");
  const [searchParam, setSearchParam] = new useState(["name", "filter.php?a="]);

  //activate filters
  const [nameActive, setNameActive] = useState(true);
  const [ingActive, setIngActive] = useState(false);
  const [glassActive, setGlassActive] = useState(false);
  const [catActive, setCatActive] = useState(false);

  //show Ddoski's section
  const [showFavorite, setShowFavorite] = useState(false);

  const fetchData = async () => {
    console.log(url);
    setUrl(`${URL}${searchParam[1]}${keySearch}`);
    console.table(drinks);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDrinks(data.drinks);
    } catch (error) {
      if (
        error instanceof SyntaxError &&
        error.message === "Unexpected end of JSON input"
      ) {
        setDrinks([]);
      }
    }
  };

  const handleChange = (e) => {
    setKeySearch(e.target.value);
  };

  //react hook that specifies when we re-render the web page.

  useEffect(() => {
    fetchData();
  }, [url, keySearch, searchParam]);

  return (
    <Wrapper>
      <div className="App">
        <TopSection />
        <div className="search-div">
          <form>
            <input
              type="text"
              placeholder="Type In Here"
              onChange={handleChange}
              value={keySearch}
              name="keySearch"
            />
          </form>

          <div className="filters-section">
            <span>Search by</span>
            <div className="filters-div">
              <button
                className={nameActive ? "filter-btn active" : "filter-btn"}
                onClick={() => {
                  setSearchParam(["name", "search.php?s="]);
                  setNameActive(true);
                  setCatActive(false);
                  setIngActive(false);
                  setGlassActive(false);
                }}
              >
                name
              </button>
              <button
                className={ingActive ? "filter-btn active" : "filter-btn"}
                onClick={() => {
                  setSearchParam(["ingredient", "filter.php?i="]);
                  setNameActive(false);
                  setCatActive(false);
                  setIngActive(true);
                  setGlassActive(false);
                }}
              >
                ingredient
              </button>
              <button
                className={catActive ? "filter-btn active" : "filter-btn"}
                onClick={() => {
                  setSearchParam(["category", "filter.php?c="]);
                  setNameActive(false);
                  setCatActive(true);
                  setIngActive(false);
                  setGlassActive(false);
                }}
              >
                category
              </button>
              {/* <Select options={catOptions} /> */}

              <button
                className={glassActive ? "filter-btn active" : "filter-btn"}
                onClick={() => {
                  setSearchParam(["glass", "filter.php?g="]);
                  setNameActive(false);
                  setCatActive(false);
                  setIngActive(false);
                  setGlassActive(true);
                }}
              >
                glass{" "}
              </button>
            </div>
            <button
              className={
                showFavorite
                  ? "ddoski-favorite active-favorite"
                  : "ddoski-favorite"
              }
              onClick={() => {
                setShowFavorite(!showFavorite);
              }}
            >
              Ddoski's Favorite
            </button>
          </div>
        </div>

        {/* Ddoski's favorite drinks section */}

        {showFavorite ? (
          <div className="ddoskis-favorite-section">
            <div className="favorite-section-top">
              <img src={ddimg} alt="ddoski laying on the beach" />
              <h3>Ddoski's Favorites:</h3>
            </div>
            <div className="favorite-drinks">
              {favorites?.map((item, idx) => (
                <div className="favorite-drink">
                  <Link to={`drink/${item.idDrink}`}>
                    <Item key={idx} pros={item} />
                  </Link>
                  <h4>{favorites[idx].comment}</h4>
                  <div className="stars-div">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="drinks-div">
          {drinks?.map((item, idx) => (
            <Link to={`drink/${item.idDrink}`}>
              <Item key={idx} pros={item} />
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
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
