import styled from "styled-components";
// style
const ScoreNumber = styled.div`
    width: 135px;
    text-align: center;
    h1 {
        font-size: 10rem;
        font-weight: 500;
        line-height: 10.5rem;
    }

    p {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.6rem;
    }
`;

function TotalScore({ score }) {
    return (
        <ScoreNumber>
            <h1>{score}</h1>
            <p>Total score</p>
        </ScoreNumber>
    );
}

export default TotalScore;
