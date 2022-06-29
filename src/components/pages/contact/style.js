import styled from "styled-components";
export const Title = styled.h1`
  font-size: ${(props) => (props.size ? props.size : "12px")};
`;

export const Card = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: "1px solid red";
  > div {
    border: "1px solid black";
    height: auto;
    justify-content: center;
    align-items: center;
  }
  > div > img {
    :hover {
      border: 1px solid black;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
    width: 90%;
    height: auto;
  }
`;
