import styled from "styled-components";
import bear1 from "../assets/bear1.png";
import ddoski from "../assets/ddoski5.png";

const TopSection = () => {
  return (
    <Wrapper>
      <div className="info">
        {/* <img src={ddoski} alt="alt" /> */}
        <div className="text-div">
          <h1>
            "Sip your way through a world of flavors with our expertly crafted
            drinks, perfect for any mood or occasion!"
            <div className=""></div>
          </h1>
        </div>
      </div>
      <div className="image-div">
        <img src={bear1} alr={"bear background"} />
      </div>
    </Wrapper>
  );
};

export default TopSection;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #ebc67d;
  margin: 0;
  padding: 0;
  justify-content: space-around;

  .image-div img {
    width: 50vw;
    height: 100%;
  }

  .info {
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
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    letter-spacing: 5px;
  }
`;
