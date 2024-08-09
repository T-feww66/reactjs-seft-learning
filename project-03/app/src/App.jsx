import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./component/SearchResult";

const TopSection = styled.div`
    padding: 40px 0;
    background-color: #323334;
`;
const Container = styled.div`
    width: 1170px;
    max-width: calc(100% - 48px);
    margin: 0 auto;

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__input {
            width: 285px;
            height: 40px;
            padding: 12px 15px;
            border-radius: 5px;
            border: 1px solid #fff;
            color: #fff;
            font-size: 1.8rem;
            transition: 0.3s;

            &:focus {
                border-color: #ff0909;
            }
        }
    }
`;

const FilterContainer = styled.div`
    margin-top: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
`;

export const Button = styled.button`
    padding: 6px 12px;
    height: 32px;
    border: none;
    border-radius: 5px;
    background-color: #ff4343;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        scale: 1.1;
    }
`;

export const BASE_URL = "http://localhost:9000";
function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [filterData, setFilterData] = useState(null);

    //DANH SACH DATA CHO BUA AN
    const dataEat = [
        {
            type: "all",
            name: "All",
        },
        {
            type: "breakfast",
            name: "Breakfast",
        },
        {
            type: "lunch",
            name: "Lunch",
        },
        {
            type: "dinner",
            name: "Dinner",
        },
    ];

    useEffect(() => {
        // fetch data tu backend
        const FetchDataFoods = async () => {
            setLoading(true);
            try {
                //await truoc mot promsie
                const res = await fetch(BASE_URL);

                //chuyen json ve dang du lieu
                const json = await res.json();
                setLoading(false);
                setData(json);
                setFilterData(json);
            } catch (error) {
                setError("Unable to fetch data");
            }
        };

        FetchDataFoods();
    }, []);

    const handleFilter = (e) => {
        const searchValue = e.target.value;

        if (filterData === null) {
            setFilterData(null);
        } else {
            const filter = data?.filter((food) =>
                food.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilterData(filter);
        }
    };

    const btnFilter = (type) => {
        if (type === "all") {
            setFilterData(data);
            return;
        } else {
            const filter = data?.filter((food) =>
                food.type.toLowerCase().includes(type.toLowerCase())
            );
            setFilterData(filter);
        }
    };

    if (error) return <div>{error}</div>;
    if (loading) return <div>Loading....</div>;

    return (
        <>
            <Container>
                <TopSection>
                    <nav className="navbar">
                        <img src="/Logo.svg" alt="Food Zone" />
                        <input
                            onChange={handleFilter}
                            type="text"
                            className="navbar__input"
                            placeholder="Search food"
                        />
                    </nav>
                    <FilterContainer>
                        {dataEat.map((item, index) => {
                            return (
                                <Button
                                    key={item.type}
                                    onClick={() => btnFilter(item.type)}
                                >
                                    {item.name}
                                </Button>
                            );
                        })}
                    </FilterContainer>
                </TopSection>
            </Container>
            <SearchResult data={filterData} />
        </>
    );
}

export default App;
