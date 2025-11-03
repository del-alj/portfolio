// src/components/Contact.jsx
import React, { useState } from "react";
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
  transition: opacity 0.2s ease, box-shadow 0.2s ease;
  ${({ primary }) => primary
    ? `background: linear-gradient(90deg, #ffcf66, var(--accent)); box-shadow: 0 6px 20px rgba(246,200,76,0.18); color:#221f1f;`
    : `background:transparent; border:1px solid rgba(34,32,37,0.06); color: var(--text);`}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const StatusMessage = styled.p`
  margin: 6px 0 0;
  font-size: 13px;
  color: ${({ $variant }) => ($variant === "success" ? "var(--accent)" : "#d64545")};
`;

const Contact = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const contactEmail = process.env.REACT_APP_CONTACT_EMAIL || "douae.elalj@gmail.com";
  const submissionEndpoint =
    process.env.REACT_APP_CONTACT_ENDPOINT ||
    (contactEmail && contactEmail !== "you@example.com"
      ? `https://formsubmit.co/ajax/${contactEmail}`
      : null);

  const handleChange = ({ target: { name, value } }) => {
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!submissionEndpoint) {
      setStatus("error");
      setStatusMessage("Contact endpoint not configured. Set REACT_APP_CONTACT_EMAIL or REACT_APP_CONTACT_ENDPOINT.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch(submissionEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message
        })
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error?.message || "Failed to send message");
      }

      setStatus("success");
      setStatusMessage("Thanks! I received your message and will reply shortly.");
      setFormValues({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setStatusMessage(error.message || "Something went wrong. Please try again later.");
    }
  };

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
            <Input
              required
              placeholder="Your name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </label>
          <label style={{fontSize:'13px', color:'var(--subtle)'}}>
            Email
            <Input
              required
              type="email"
              placeholder="you@example.com"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </label>
          <label style={{fontSize:'13px', color:'var(--subtle)'}}>
            Message
            <TextArea
              required
              rows={4}
              placeholder="Brief message or project idea"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
          </label>

          <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
            <Button primary type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send message"}
            </Button>
            <Button as="a" href={`mailto:${contactEmail || "you@example.com"}`}>
              Or email me
            </Button>
          </div>

          {status !== "idle" && statusMessage && (
            <StatusMessage $variant={status === "success" ? "success" : "error"}>
              {statusMessage}
            </StatusMessage>
          )}
        </form>
      </Card>
    </section>
  )
}

export default Contact;
