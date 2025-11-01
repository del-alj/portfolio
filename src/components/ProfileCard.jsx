// src/components/ProfileCard.jsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: var(--card);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: var(--shadow);
`;

const ProfilePhoto = styled.div`
  width:100%;
  height:220px;
  border-radius:10px;
  background: linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.02));
  display:flex;
  align-items:center;
  justify-content:center;
  color: var(--subtle);
  font-weight:700;
  font-size:20px;
  letter-spacing:0.6px;
  margin-bottom:12px;
`;

const Tag = styled.span`
  background:rgba(34,32,37,0.06);
  padding:6px 8px;
  border-radius:999px;
  font-size:12px;
  font-weight:600;
`;

const ProfileCard = () => (
  <Card>
    <ProfilePhoto>Your photo</ProfilePhoto>
    <div style={{marginBottom:'12px'}}>
      <div>Email: <a href="mailto:you@example.com">douae.elalj@.gmail.com</a></div>
      <div>LinkedIn: <a href="www.linkedin.com/in/douae-el-alj" target="_blank" rel="noopener noreferrer">linkedin.com/in/douae-el-alj</a></div>
      <div>Location: <Tag>Morocco</Tag></div>
    </div>
    <div>
      <strong>Role</strong>
      <p style={{color:'var(--subtle)'}}>Concepteur SI • Software engineer • Product-minded</p>
    </div>
  </Card>
);

export default ProfileCard;
