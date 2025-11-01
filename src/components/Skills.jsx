// src/components/Skills.jsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-bottom:28px;
`;

const SkillsGrid = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:8px;
`;

const Skill = styled.div`
  background:rgba(34,32,37,0.06);
  padding:8px 10px;
  border-radius:10px;
  font-weight:600;
  font-size:13px;
`;

const skills = ["Frontend (HTML / CSS / JS)", "React", "C# / .NET", "GIS / Mapping", "UX & Visual Design", "APIs / Backend"];

const Skills = () => (
  <Section id="skills">
    <h3>Skills</h3>
    <SkillsGrid>
      {skills.map((s,i)=><Skill key={i}>{s}</Skill>)}
    </SkillsGrid>
  </Section>
);

export default Skills;
