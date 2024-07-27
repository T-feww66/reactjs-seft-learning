import styled from "styled-components";

const Container = styled.div`
    max-width: 1140px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .dices__title {
        white-space: nowrap;
        font-size: 9.6rem;
        font-weight: 700;
        line-height: 14.4rem;
    }

    .dices__start {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }
`;

const Button = styled.button`
    width: 220px;
    height: 44px;
    padding: 10px 18px;
    border-radius: 5px 0px 5px 0px;
    background-color: #000;
    color: #fff;

    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.4rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        border-color: #000;
        background-color: #fff;
        color: #000;
    }
`;

function StartGame({toggle}) {
    return (
        <Container>
            <img src="/images/dices 1.png" alt="dices" />
            <div className="dices__start">
                <h1 className="dices__title">DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
}

export default StartGame;
