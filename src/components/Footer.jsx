// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top:22px;
  padding:22px;
  border-radius:12px;
  background:linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.9));
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  box-shadow: var(--glass-shadow);
  font-size:13px;
  color: var(--subtle);
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <div>
        <strong>Douae ElAlj</strong>
        <div>Available for remote freelance work</div>
      </div>
      <div>© {year} • Crafted with a soft yellow</div>
    </FooterWrapper>
  )
}

export default Footer;
