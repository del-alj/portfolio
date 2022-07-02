import styled from "styled-components";

export const DivGrid = styled.div`
  @media (max-width: 470px) {
    > div {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const DivItem = styled.div`
  @media (max-width: 470px) {
    > div {
      /* width: 30em; */
      font-size: 20px;
    }
  }
`;
