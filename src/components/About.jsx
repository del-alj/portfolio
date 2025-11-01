// src/components/About.jsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: var(--card);
  border-radius: var(--radius);
  padding:18px;
  box-shadow: var(--glass-shadow);
`;

const About = () => (
  <section id="about" style={{marginTop:'18px'}}>
    <h3>About</h3>
    <Card>
      <p style={{margin:0, color:'var(--subtle)'}}>
        I combine systems thinking and a designer's eye to build tools people love to use. I like small, focused projects with measurable impact — routing, mapping, and neat UI. Outside work I hike in the north mountains and experiment with short-form writing.
      </p>
    </Card>
  </section>
);

export default About;
