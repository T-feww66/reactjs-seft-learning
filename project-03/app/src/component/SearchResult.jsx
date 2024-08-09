import styled from "styled-components";
import { BASE_URL, Button } from "../App";

const ContainerFoods = styled.div`
    background-image: url("/backgroundfood.png");
    background-size: cover;
    height: calc(100vh - 206px);
`;
const FoodCards = styled.div`
    padding-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const FoodCard = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;
    padding: 12px;
    background: radial-gradient(
        rgba(165, 239, 255, 0.2) 100%,
        rgba(110, 191, 244, 0.0447917) 77.08%,
        rgba(70, 144, 213, 0) 100%
    );
    border-radius: 20px;

    .food__image {
        width: 133px;
        height: 133px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .food__info {
        width: 168px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        flex-direction: column;
        gap: 30px;
        h3 {
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2rem;
        }

        p {
            margin-top: 6px;
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
`;

function SearchResult({ data }) {
    return (
        <ContainerFoods>
            <FoodCards>
                {data?.map((food, index) => {
                    return (
                        <FoodCard key={food.name}>
                            <div className="food__image">
                                <img
                                    src={BASE_URL + food.image}
                                    alt={food.name}
                                />
                            </div>
                            <div className="food__info">
                                <div>
                                    <h3>{food.name}</h3>
                                    <p>{food.text}</p>
                                </div>

                                <Button>${food.price.toFixed(2)}</Button>
                            </div>
                        </FoodCard>
                    );
                })}
            </FoodCards>
        </ContainerFoods>
    );
}

export default SearchResult;
