// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --bg: #fff9e6;
    --accent: #f6c84c;
    --muted: #f1e6c8;
    --card: #ffffff;
    --text: #222025;
    --subtle: #6b6b6b;
    --glass-shadow: 0 4px 12px rgba(34,32,37,0.06);
    --shadow: 0 6px 22px rgba(34,32,37,0.08);
    --radius: 12px;
    --max-width: 1100px;
  }

  * { box-sizing: border-box; }
  html, body { margin:0; padding:0; height:100%; font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background: linear-gradient(180deg,var(--bg), #fffaf0 60%); color: var(--text); line-height:1.45;}
  a { text-decoration:none; color: var(--text); }
  button { cursor:pointer; }
`;

export default GlobalStyles;
