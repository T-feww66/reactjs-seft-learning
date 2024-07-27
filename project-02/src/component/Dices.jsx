import styled from "styled-components";

const Box = styled.div`
    width: 72px;
    height: 72px;
    padding: 18px 0px;
    border: 1px solid #000;
    background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};
    color: ${(props) => (props.isSelected ? "#fff" : "#000")};
    cursor: pointer;
    transition: 0.3s;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.6rem;
    text-align: center;

    &:hover {
        color: #fff;
        background-color: #000;
    }
`;

const DicesItems = styled.div`
    .dices__list {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    p {
        margin-top: 30px;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.6rem;
        text-align: right;
    }
`;

function Dices({ selected, setSelected, error, setError }) {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const handleReset = (item) => {
        setSelected(item);
        setError("");
    };

    return (
        <DicesItems>
            <p>{error}</p>
            <div className="dices__list">
                {arrNumber.map((item, index) => {
                    return (
                        <Box
                            key={index}
                            isSelected={item === selected}
                            onClick={() => handleReset(item)}
                        >
                            {item}
                        </Box>
                    );
                })}
            </div>
            <p>Select Number</p>
        </DicesItems>
    );
}

export default Dices;
