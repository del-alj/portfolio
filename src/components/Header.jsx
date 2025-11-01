// src/components/Header.jsx
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  margin-bottom:28px;
  flex-wrap: wrap;
`;

const Brand = styled.a`
  display:flex;
  gap:14px;
  align-items:center;
`;

const Logo = styled.div`
  width:56px;
  height:56px;
  border-radius:12px;
  background: linear-gradient(135deg, var(--accent), #ffd57a);
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: var(--shadow);
  flex-shrink:0;
  span { font-weight:700; font-size:18px; color:#2b2b2b; letter-spacing:0.6px;}
`;

const BrandText = styled.div`
  h1 { margin:0; font-size:18px; font-weight:700; }
  p { margin:0; color: var(--subtle); font-size:13px; }
`;

const Nav = styled.nav`
  display:flex;
  gap:14px;
  align-items:center;
  @media(max-width:720px){ display:none; }
`;

const NavLink = styled.a`
  padding:8px 12px;
  border-radius:8px;
  font-weight:600;
  &:hover { background: var(--muted); }
`;

const Header = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  };

  return (
    <HeaderWrapper>
      <Brand href="#top" onClick={(e)=>scrollTo(e,"#top")}>
        <Logo><span>DE</span></Logo>
        <BrandText>
          <h1>Douae ElAlj</h1>
          <p>Concepteur SI • Full-stack projects • UI & GIS tinkerer</p>
        </BrandText>
      </Brand>

      <Nav>
        <NavLink href="#projects" onClick={(e)=>scrollTo(e,"#projects")}>Projects</NavLink>
        <NavLink href="#skills" onClick={(e)=>scrollTo(e,"#skills")}>Skills</NavLink>
        <NavLink href="#about" onClick={(e)=>scrollTo(e,"#about")}>About</NavLink>
        <NavLink href="#contact" onClick={(e)=>scrollTo(e,"#contact")}>Contact</NavLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
