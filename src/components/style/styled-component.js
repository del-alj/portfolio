import styled from "styled-components";

export const BoxDiv = styled.div`
  display: flex;
  align-self: center;
  width: 650px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 150px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    font-size: larger;
    width: auto;

  }
`;

export const BoxGrid = styled.div`
  display: grid;
  align-self: center;
  width: 650px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 150px;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 7em;
  grid-gap: 0.5em;
  justify-content: center;
  padding-bottom: 3em;

  @media (max-width: 700px) {
    align-items: center;
    margin-top: 50px;
    grid-gap: 1em;
    width: auto;
    grid-template-columns: repeat(3, 1fr);
  }
`;
