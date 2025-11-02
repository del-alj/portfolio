// src/components/SirWayPage.jsx
import React from "react";
import styled from "styled-components";
import { Train, MapPin } from "lucide-react";
import Layout from "./Layout";
import SirWayLogo from '../assets/logoIcon.png';
import SirWayScreenshot from "../assets/sirway-screenshot.png";
// Styled Components
const Section = styled.section`
  margin: 2rem 0;
`;

const Card = styled.div`
  background: var(--card);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: var(--glass-shadow);
  text-align: center;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 4rem 0 2rem;
  color: var(--subtle);
`;


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
`;

const Hero = styled.section`
  text-align: center;
  padding: 6rem 1rem;
`;

const Button = styled.a`
  background: var(--primary);
  color: var(--text-light);
  padding: 1rem 2rem;
  border-radius: var(--radius);
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;

  &:hover {
    opacity: 0.9;
  }




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

const ScreenshotSection = styled.section`
  max-width: 1200px;
//   margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);

  img {
    width: 30%;
    height: auto;
    display: block;
    border-radius: 12px;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;



const SirWayPage = () => {
    const features = [
        {
            icon: <Train size={32} color="#FBBF24" />,
            title: "Clear UX",
            desc: "Effortless navigation and a familiar metro layout make exploring easy.",
        },
        {
            icon: <MapPin size={32} color="#3B82F6" />,
            title: "Interactive Map",
            desc: "Visualize tram routes and stops dynamically with responsive performance.",
        },
        {
            icon: <Train size={32} color="#EF4444" />,
            title: "Offline Ready",
            desc: "Optimized to run smoothly even without an internet connection.",
        },
    ];

    return (
        <Layout id="top">
            <div style={{ fontFamily: "Inter", minHeight: "100vh" }}>
                {/* Header */}
                <Header>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <img src={SirWayLogo} alt="SirWay Logo" style={{ height: '70px', width: 'auto' }} />
                        <h1>SirWay</h1>
                    </div>
                    <Button primary href="https://www.sirway.org/" target="_blank" rel="noopener noreferrer">
                        Open Map
                    </Button>
                </Header>

                {/* Hero Section */}
                <Hero>
                    <h2>Morocco’s Tram Map — Reimagined</h2>
                    <p>
                        Experience Morocco’s urban networks through a visually engaging, interactive map. From Rabat to Casablanca, every route and stop is presented with clarity, color, and a touch of playful charm.
                    </p>
                    <Button primary href="https://www.sirway.org/" target="_blank" rel="noopener noreferrer">
                        Explore Map
                    </Button>
                </Hero>
                <ScreenshotSection>
                    <img src={SirWayScreenshot} alt="SirWay website preview" />
                </ScreenshotSection>
                {/* Features Section */}
                <Section>
                    <h3 style={{ textAlign: "center" }}>Core Features</h3>
                    <FeatureGrid>
                        {features.map((f, i) => (
                            <Card key={i}>
                                <div>{f.icon}</div>
                                <h4>{f.title}</h4>
                                <p style={{ margin: 0, color: "var(--subtle)" }}>{f.desc}</p>
                            </Card>
                        ))}
                    </FeatureGrid>
                </Section>

                {/* Footer */}
                <Footer>© 2025 SirWay. Built with ❤️ by Douae ElAlj.</Footer>
            </div>
        </Layout>
    );
};

export default SirWayPage;
