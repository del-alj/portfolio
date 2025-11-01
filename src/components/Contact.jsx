// src/components/Contact.jsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display:flex;
  flex-direction:column;
  gap:12px;
  background: var(--card);
  border-radius: var(--radius);
  padding:18px;
  box-shadow: var(--glass-shadow);
`;

const Input = styled.input`
  width:100%;
  padding:10px;
  border-radius:8px;
  border:1px solid rgba(34,32,37,0.06);
  margin-top:6px;
`;

const TextArea = styled.textarea`
  width:100%;
  padding:10px;
  border-radius:8px;
  border:1px solid rgba(34,32,37,0.06);
  margin-top:6px;
`;

const Button = styled.button`
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

const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert("Message sent — replace with real form handling.");
  }

  return (
    <section id="contact" style={{marginTop:'18px'}}>
      <h3>Contact</h3>
      <Card>
        <p style={{margin:0,color:'var(--subtle)'}}>
          Want to collaborate, hire, or just say hello? Send a message and I'll reply promptly.
        </p>

        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'8px', maxWidth:'560px'}}>
          <label style={{fontSize:'13px', color:'var(--subtle)'}}>
            Your name
            <Input required placeholder="Your name" />
          </label>
          <label style={{fontSize:'13px', color:'var(--subtle)'}}>
            Email
            <Input required type="email" placeholder="you@example.com" />
          </label>
          <label style={{fontSize:'13px', color:'var(--subtle)'}}>
            Message
            <TextArea required rows={4} placeholder="Brief message or project idea" />
          </label>

          <div style={{display:'flex', gap:'10px'}}>
            <Button primary type="submit">Send message</Button>
            <Button as="a" href="mailto:you@example.com">Or email me</Button>
          </div>
        </form>
      </Card>
    </section>
  )
}

export default Contact;
