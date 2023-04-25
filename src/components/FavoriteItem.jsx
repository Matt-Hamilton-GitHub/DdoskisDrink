import styled from "styled-components";

function FavoriteItem(item) {
  const { strDrink, strDrinkThumb, idDrink } = item.pros;
  // console.table(item.pros);

  const fetchPage = () => {};
  return (
    <Wrapper>
      <div className="drink-img" onClick={fetchPage}>
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <h5>{strDrink}</h5>
    </Wrapper>
  );
}

export default FavoriteItem;

const Wrapper = styled.div`
  margin: 10px;
  max-width: 200px;
  max-height: 350px;

  img {
    width: 20px;
    border-radius: 100%;
    cursor: pointer;
    border: solid 3px green;
    transition: transform 0.6s;
    box-shadow: 5px 6px 5px #ccc;
  }

  .drink-img {
  }

  img:hover {
    transform: scale(1.2);
  }
`;
