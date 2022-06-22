import * as React from "react";
import "./style.css";
// import { Title } from "./style";



export const Wave = () => {
  return (
    <div>
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
    <use xlinkHref="#gentle-wave" x="48" y="0" fill="RGB(211, 211, 211)"/>
    <use xlinkHref="#gentle-wave" x="48" y="3" fill="RGB(158, 158, 158)" />
    <use xlinkHref="#gentle-wave" x="48" y="5" fill="RGB(189, 189, 189)" />
    <use xlinkHref="#gentle-wave" x="48" y="7" fill="RGB(125, 125, 125)" />
    <use xlinkHref="#gentle-wave" x="48" y="9" fill="RGB(105, 105, 105)" />
    <use xlinkHref="#gentle-wave" x="56" y="11" fill="RGB(0, 0, 0, 200)"/>
    </g>
    </svg>

    </div>
  );
};