import React from "react";
import styled from "styled-components";
import SirWayLogo from "../assets/logoIcon.png";
import SirWayScreenshot from "../assets/sirway-screenshotmap.png"; // 👈 add your screenshot image here


const Section = styled.section`
  margin-bottom: 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  background: linear-gradient(180deg, #ffffff, #fffcf6);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--glass-shadow);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(34, 32, 37, 0.03);
  position: relative;
  transition: transform 0.28s ease, box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(34, 32, 37, 0.12);
  }
`;

const Thumb = styled.div`
  position: relative;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  background: #fff8e1; /* soft warm background */

  .screenshot {
    position: absolute;
    inset: 0;
    width: 100%;
    // object-fit: cover;
    transform: translateX(40%);
    height: 120%; /* extend slightly so top is visible */
    object-position: top center; /* show the top part */
    opacity: 0;
    transition: all 0.8s ease;
  }

  .logo-layer {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #fff5cc, #fff0d9);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.8s ease;
    z-index: 2;
  }

  &:hover .logo-layer {
    transform: translateX(-100%);
    opacity: 0;
  }

  &:hover .screenshot {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Body = styled.div`
  padding: 12px 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h4`
  margin: 0;
  font-weight: 700;
  font-size: 15px;
`;

const Desc = styled.p`
  margin: 0;
  color: var(--subtle);
  font-size: 13px;
  flex: 1;
`;

const Meta = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`;

const Tag = styled.span`
  background: rgba(34, 32, 37, 0.06);
  padding: 6px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
`;

const NavLink = styled.a`
  margin-left: auto;
  font-weight: 600;
  text-decoration: none;
  color: var(--text);

  &:hover {
    text-decoration: underline;
  }
`;

const projects = [
  {
    title: "SirWay — Tram mapping (personal)",
    thumb: SirWayLogo,
    screenshot: SirWayScreenshot,
    desc: "Interactive tram mapping app built to visualize tram networks, live stops, and routing.",
    tags: ["React", "Leaflet", "GIS"],
    link: "/sirway"
  },
  {
    title: "Transport Planner (team)",
    logo: SirWayLogo,
    screenshot: '',
    desc: "Collaborative tool for simplified transit route planning and scheduling.",
    tags: ["C# .NET", "WPF"],
    link: "#",
  },
  {
    title: "Portfolio & UI experiments",
    logo: SirWayLogo,
    screenshot: '',
    desc: "Design experiments showcasing clean interfaces and smooth interactions.",
    tags: ["HTML/CSS", "Accessibility"],
    link: "#",
  },
];

const Projects = () => (
  <Section id="projects" aria-labelledby="projects-heading">
    <h3 id="projects-heading">Selected projects</h3>
    <Grid role="list">
      {projects.map((p, i) => (
        <ProjectCard key={i} role="listitem" tabIndex={0}>
          <Thumb>
            <img src={p.screenshot} alt="screenshot" className="screenshot" />
            <div className="logo-layer">
              <img src={p.thumb} alt={p.title} style={{ width: "90px", height: "auto" }} />
            </div>
          </Thumb>
          <Body>
            <Title>{p.title}</Title>
            <Desc>{p.desc}</Desc>
            <Meta>
              {p.tags.map((t, j) => (
                <Tag key={j}>{t}</Tag>
              ))}
              <NavLink href={p.link}>View →</NavLink>
            </Meta>
          </Body>
        </ProjectCard>
      ))}
    </Grid>
  </Section>
);

export default Projects;