import styled from "styled-components";
import bear1 from "../assets/bear1.png";

const TopSection = () => {
  return (
    <Wrapper>
      <div className="info">
        {/* <img src={ddoski} alt="alt" /> */}
        <div className="text-div">
          <h1>
            "Sip your way through a world of flavors with our expertly crafted
            drinks, perfect for any mood or occasion!"
          </h1>
        </div>
      </div>
      <div className="image-div">
        <img src={bear1} alr={`${bear1}`} />
      </div>
    </Wrapper>
  );
};

export default TopSection;

const Wrapper = styled.section`
  font-family: "Lexend Mega", sans-serif;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: rgb(23, 0, 36);

  background: linear-gradient(
    109deg,
    rgba(23, 0, 36, 1) 4%,
    rgba(235, 198, 125, 1) 58%
  );
  margin: 0;
  padding: 0;
  justify-content: space-around;

  .image-div img {
    width: 50vw;
    height: 100%;
  }

  .info {
    margin: 20px;
    flex: 4 1 400px;
  }

  .info img {
    width: 250px;
    border-radius: 100%;
  }

  .text-div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h1 {
    color: white;
    font-size: 4vw;
    font-family: "Lexend", sans-serif;
    font-weight: 100;
    letter-spacing: 2px;

    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
  }
`;
