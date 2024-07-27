import styled from "styled-components";

function RoleDice({ currentDice, roleDice }) {
    return (
        <DiceWrap>
            <div>
                <div onClick={roleDice}>
                    <img src={`/images/dice_${currentDice}.png`} alt="dice" />
                </div>
                <p className="dice__desc">Click on Dice to roll</p>
            </div>
        </DiceWrap>
    );
}

const DiceWrap = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 36px;

    p {
        margin-top: 15px;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.6rem;
    }
`;
export default RoleDice;
