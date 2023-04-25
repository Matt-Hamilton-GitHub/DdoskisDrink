import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteItem from "./FavoriteItem";
import Item from "./Item";
import Select from "react-select";

import "../styles.css";
import styled from "styled-components";
import TopSection from "./TopSection";

export default function MainPage() {
  //url for the api to fetch the cocktails
  var URL = "https://thecocktaildb.com/api/json/v1/1/";

  const catOptions = [
    { value: "Ordinary Drink", label: "Ordinary Drink" },
    { value: "Cocktail", label: "Cocktail" },
    { value: "Shake", label: "Shake" },
    { value: "Other / Unknown", label: "Other / Unknown" },
    { value: "Cocoa", label: "Cocoa" },
    { value: "Shot", label: "Shot" },
    { value: "Coffee / Tea", label: "Coffee / Tea" },
    { value: "Homemade Liqueur", label: "Homemade Liqueur" },
    { value: "Punch / Party Drink", label: "Punch / Party Drink" },
    { value: "Beer", label: "Beer" },
    { value: "Soft Drink", label: "Soft Drink" }
  ];

  // Filter by ingredient
  // www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
  // www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

  // Filter by Category
  // www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
  // www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

  // Filter by Glass
  // www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
  // www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

  //stores all the data received from the api, it is an array
  const [drinks, setDrinks] = new useState([]);

  //holds the name of the particular cocktail that user inputs
  const [url, setUrl] = new useState(URL);
  const [keySearch, setKeySearch] = new useState("");
  const [searchParam, setSearchParam] = new useState([
    "",
    "filter.php?a=Non_Alcoholic"
  ]);

  const fetchData = async () => {
    if (
      (searchParam[0].length === 0 && searchParam[0] === "name") ||
      searchParam[0] === ""
    ) {
      console.log("if state. alled");
      setUrl(`${URL}filter.php?a=Non_Alcoholic`);
    } else if (keySearch !== "") {
      console.log("category state. alled");
      console.log("category state. alled");
      setUrl(`${URL}${searchParam[1]}${keySearch}`);
    }

    console.log(url);

    const response = await fetch(url);
    const data = await response.json();
    const drinks = data.drinks;
    setDrinks(drinks);
  };

  const handleChange = (e) => {
    setKeySearch(e.target.value);
    console.log(e.target.value);
    fetchData();
  };

  //react hook that specifies when we re-render the web page.
  //now it renders the page only when we start the app
  useEffect(() => {
    fetchData();
  }, [searchParam, keySearch]);

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
          {/* <button className="submit" type="submit" onClick={() => submitSearch()}>
            Find
          </button> */}
          <div className="filters-section">
            Search by
            <div className="filters-div">
              <button
                className="filter-btn"
                onClick={() => {
                  setSearchParam(["name", "search.php?s="]);
                }}
              >
                name
              </button>
              <button
                className="filter-btn"
                onClick={() => {
                  setSearchParam(["ingredient", "filter.php?i="]);
                }}
              >
                ingredient
              </button>
              <button
                className="filter-btn"
                onClick={() => {
                  setSearchParam(["category", "filter.php?c="]);
                }}
              >
                category
              </button>
              <Select options={catOptions} />

              <button
                className="filter-btn"
                onClick={() => {
                  setSearchParam(["glass", "filter.php?g="]);
                }}
              >
                glass{" "}
              </button>
            </div>
            <button
              className="ddoski-favorite"
              onClick={() => {
                console.log("clicked");
              }}
            >
              Ddoski's Favorite
            </button>
          </div>
        </div>

        {/* Ddoski's favorite drinks section */}

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
    font-weight: bold;
    box-sizing: border-box;
    background-color: #f5d28d;
  }

  input:focus {
    outline: none;
  }

  .drinks-div {
    margin: 50px;
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    /* border: dashed 2px grey; */
  }

  .filters-div {
    margin: 0 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .filter-btn {
    margin: 0 5px;
    cursor: pointer;
    background-color: #698269;
    border-radius: 10px;
  }

  .filters-section {
    margin: 30px;
    display: flex;
    justify-content: center;
  }

  .ddoski-favorite {
    cursor: pointer;
    background-color: #4e6e81;
    border-radius: 5px;
  }
`;
