// src/components/Projects.jsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-bottom:28px;
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:18px;
  @media(max-width:1000px){ grid-template-columns: repeat(2, 1fr); }
  @media(max-width:720px){ grid-template-columns: 1fr; }
`;

const ProjectCard = styled.article`
  background:linear-gradient(180deg, #ffffff, #fffcf6);
  border-radius:12px;
  overflow:hidden;
  box-shadow: var(--glass-shadow);
  display:flex;
  flex-direction:column;
  transition: transform .28s ease, box-shadow .28s ease;
  min-height:180px;
  border:1px solid rgba(34,32,37,0.03);

  &:hover{
    transform: translateY(-8px);
    box-shadow: 0 18px 40px rgba(34,32,37,0.12);
  }
`;

const Thumb = styled.div`
  height:120px;
  background:linear-gradient(135deg, #fff0d9, #fff9ee);
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--subtle);
  font-weight:700;
  font-size:16px;
`;

const Body = styled.div`
  padding:12px 14px;
  flex:1;
  display:flex;
  flex-direction:column;
  gap:8px;
`;

const Title = styled.h4`
  margin:0;
  font-weight:700;
  font-size:15px;
`;

const Desc = styled.p`
  margin:0;
  color:var(--subtle);
  font-size:13px;
  flex:1;
`;

const Meta = styled.div`
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  align-items:center;
`;

const Tag = styled.span`
  background:rgba(34,32,37,0.06);
  padding:6px 8px;
  border-radius:999px;
  font-size:12px;
  font-weight:600;
`;

const NavLink = styled.a`
  margin-left:auto;
`;

const projects = [
  {
    title: "SirWay — Tram mapping (personal)",
    thumb: "SirWay — Tram mapping",
    desc: "Interactive tram mapping app built to visualize tram networks, live stops, and routing. Focus: UX, map clarity, and offline performance.",
    tags: ["React", "Leaflet", "GIS"],
    link: "/sirway"
  },
  {
    title: "Transport Planner (team)",
    thumb: "Transport Planner",
    desc: "A small collaborative web tool that simplifies route planning and shared mobility scheduling for local transit teams.",
    tags: ["C# .NET", "WPF"],
    link: "#"
  },
  {
    title: "Portfolio & UI experiments",
    thumb: "Portfolio UI",
    desc: "Design experiments and small components showing micro-interactions and responsive patterns for portfolio displays.",
    tags: ["HTML/CSS", "Accessibility"],
    link: "#"
  }
];

const Projects = () => (
  <Section id="projects" aria-labelledby="projects-heading">
    <h3 id="projects-heading">Selected projects</h3>
    <Grid role="list">
      {projects.map((p,i)=>(
        <ProjectCard key={i} role="listitem" tabIndex={0}>
          <Thumb>{p.thumb}</Thumb>
          <Body>
            <Title>{p.title}</Title>
            <Desc>{p.desc}</Desc>
            <Meta>
              {p.tags.map((t,j)=><Tag key={j}>{t}</Tag>)}
              <NavLink className="navlink" href={p.link}>View →</NavLink>
            </Meta>
          </Body>
        </ProjectCard>
      ))}
    </Grid>
  </Section>
);

export default Projects;
