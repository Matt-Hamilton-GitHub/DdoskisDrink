import styled from "styled-components";

function Item(item) {
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

export default Item;

const Wrapper = styled.div`
  margin: 10px;
  max-width: 300px;
  max-height: 400px;

  img {
    width: 100px;
    border-radius: 100%;
    cursor: pointer;
    border: solid 3px #497174;
    transition: transform 0.6s;
    box-shadow: 5px 6px 5px #393e46;
  }

  .drink-img {
  }

  img:hover {
    transform: scale(1.2);
  }
`;
