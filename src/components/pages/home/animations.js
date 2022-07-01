import styled from "styled-components";

export const Animation = styled.div`
  /* border: 1px solid red; */
  height: 380px;
  .outer {
    height: 100%;
    overflow: hidden;
  }
  .inner {
    height: 100%;
    width: 100%;
    -webkit-animation: mymove 10s linear infinite;
    /* Safari and Chrome */
    animation: mymove 10s linear infinite;
    
    background-image: ${(props) =>
    props.src ? `url(${props.src})` : "none"};

    /* animation-fill-mode: forwards; */
    background-size: 210px auto;
    background-repeat: no-repeat;
    /* background-size: 200% 100%; */
    border: "1px solid red";
  }
  @-webkit-keyframes mymove {
    100% {
      transform: translate3d(2000px, 0px, 0px);
    }
  }
  @keyframes mymove {
    100% {
      transform: translate3d(2000px, 0px, 0px);
    }
  }
`;
