// src/components/Hero.jsx
import React from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";

const HeroSection = styled.section`
  display:grid;
  grid-template-columns: 1fr 360px;
  gap:28px;
  align-items:stretch;
  margin-bottom:28px;
  @media(max-width:720px){ grid-template-columns: 1fr; gap:16px; }
`;

const Intro = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.95));
  border-radius: var(--radius);
  padding:28px;
  box-shadow: var(--glass-shadow);
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:14px;
  min-height:200px;
`;

const CTA = styled.div`
  display:flex;
  gap:10px;
  flex-wrap:wrap;
`;

const Button = styled.a`
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 14px;
  border-radius:10px;
  font-weight:600;
  cursor:pointer;
  border:0;
  ${({ primary }) => primary
    ? `background: linear-gradient(90deg, #ffcf66, var(--accent)); box-shadow: 0 6px 20px rgba(246,200,76,0.18); color:#221f1f;`
    : `background:transparent; border:1px solid rgba(34,32,37,0.06); color: var(--text);`}
`;

const Hero = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  };

  return (
    <HeroSection>
      <Intro>
        <h2>I craft clean, useful digital experiences — with a Moroccan touch.</h2>
        <p>Design-forward, pragmatic portfolio that puts projects first. I like clear interfaces, subtle details, and yellow that feels warm, not loud.</p>
        <CTA>
          <Button primary href="#projects" onClick={(e)=>scrollTo(e,"#projects")}>See projects</Button>
          <Button href="#contact" onClick={(e)=>scrollTo(e,"#contact")}>Contact me</Button>
          <Button href="#">Download resume</Button>
        </CTA>
        <p style={{color:'var(--subtle)', fontSize:'13px'}}>Available for freelance remote work • Based in Morocco</p>
      </Intro>
      <ProfileCard />
    </HeroSection>
  )
}

export default Hero;
