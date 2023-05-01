import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";

import dd from "../assets/dd_no_background.png"

const SinglePageDrink = () => {
  const [drinkData, setDrinkData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [drinkIngMeas, setDrinkIngMeas] = useState(null);
  const { id } = useParams();
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setDrinkData(data.drinks[0]))
      .then(() => {
        setIsLoading(false);
        setIngMeas();
        // console.log(drinkIngMeas);
      });
  }, [isLoading]);

  const setIngMeas = () => {
    let arr = Object.values(drinkData);
    let newArr = [];

    for (let x = 17; x < 32; x++) {
      if (arr[x] !== undefined && arr[x] !== null) {
        if (arr[x + 15] === null) {
          newArr.push([arr[x], "fill up"]);
        } else {
          newArr.push([arr[x], arr[x + 15]]);
        }
      }
    }
    console.table("here", newArr);
    setDrinkIngMeas(newArr);
    console.table(drinkIngMeas);
  };

  return (
    <Wrapper>
      {!isLoading ? (
        <div className="top-div">
          <Link to="/">
            <button className="back-btn">Back </button>
          </Link>
          <div className="image-div">
            <img src={drinkData.strDrinkThumb} alt="alt drink img" />
          </div>
          <div className="name">
            <h3>{drinkData.strDrink}</h3>
          </div>

          <div className="drink-instructions">
            <h4>How to make it:</h4>
            <p>{drinkData.strInstructions}</p>
          </div>
          <div className="ing-meas-section">
            {drinkIngMeas.map((item, idx) => {
              return (
                <div key={idx} className="ing-meas-div">
                  <span className="ing">{item[0]}</span>
                  <span className="meas">{item[1]}</span>
                </div>
              );
            })}
          </div>
          <div className="bottom-section">
            <img src={dd} alt="chilling bear"/>
            <p>Enjoy it!</p>
          </div>
        </div>
      ) : (
        <Wrapper>
          <Loading />
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default SinglePageDrink;

const Wrapper = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;

  font-family: "Lexend", sans-serif;

  .back-btn {
    margin: 10px;
    position: absolute;
    left: 0;
    border: solid 1px white;
    border-radius: 10px;
    width: 70px;
    height: 20px;
    background-color: orange;
    cursor: pointer;


  }

  .image-div {
  }

  img {
    width: 300px;
    border-radius: 20px;
  }

  .name {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  h3 {
    font-weight: 300;
    width: 30%;
    background-color: #408e91;
    border-radius: 10px;
  }

  .ing-meas-section {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .ing-meas-div {
    margin: 20px;
  }

  .meas {
    background-color: #7aa874;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  }

  .ing {
    background-color: #f79540;
    border-radius: 10px;
    padding: 10px;
  }



  //effects
  @keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
`;
