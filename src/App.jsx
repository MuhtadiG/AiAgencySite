import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AssistantCard from "./components/AssistantCard";
import logo from "./assets/logo.png";

// ---- PLAN CARD COMPONENT ----
function PlanCard({ emoji, name, price, features }) {
  return (
    <div
      style={{
        background: "#222226",
        border: `2.5px solid #d32f2f55`,
        borderRadius: 18,
        padding: "28px 36px",
        width: "100%",
        maxWidth: 240,
        color: "#fff",
        boxShadow: "0 2px 18px #d32f2f18",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <div
        style={{
          fontWeight: 900,
          fontSize: 21,
          color: "#d32f2f",
          marginBottom: 7,
        }}
      >
        {emoji} {name}
      </div>
      <div
        style={{
          fontSize: 16,
          fontWeight: 600,
          marginBottom: 10,
        }}
      >
        {price}
      </div>
      <ul
        style={{
          textAlign: "left",
          fontSize: 14,
          margin: 0,
          padding: 0,
          listStyle: "none",
        }}
      >
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
      <a
        href="#"
        style={{
          marginTop: 18,
          padding: "7px 0",
          width: "100%",
          border: "none",
          borderRadius: 7,
          background: "#d32f2f",
          color: "#fff",
          fontWeight: 700,
          fontSize: 15,
          cursor: "pointer",
          boxShadow: "0 1px 6px #d32f2f24",
          display: "inline-block",
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        Start {name.split(" ")[0]}
      </a>
    </div>
  );
}

// ---- PLANS PAGE ----
function PlansPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "transparent",
        paddingTop: 40,
      }}
    >
      <h1
        style={{
          color: "#d32f2f",
          fontWeight: 800,
          fontSize: 36,
          marginBottom: 28,
        }}
      >
        Subscription Plans
      </h1>
      <div
        className="plans-row"
        style={{
          display: "flex",
          gap: 36,
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <PlanCard
          emoji="🧩"
          name="Mini Assistant"
          price="49 JOD / month"
          features={[
            "20 tasks per month",
            "Content & automation help",
            "No technical setup needed",
          ]}
        />
        <PlanCard
          emoji="💼"
          name="Pro Assistant"
          price="99 JOD / month"
          features={[
            "60 tasks per month",
            "Business/marketing focused",
            "1 custom workflow for your work",
          ]}
        />
        <PlanCard
          emoji="🧠"
          name="Elite Assistant"
          price="199 JOD / month"
          features={[
            "Unlimited tasks",
            "Custom automations & content",
            "Acts as your remote employee",
          ]}
        />
      </div>
    </div>
  );
}

// ---- ABOUT PAGE ----
function AboutPage() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        paddingTop: 30,
      }}
    >
      <h1 style={{ color: "#d32f2f", fontWeight: 800, fontSize: 32, marginBottom: 22 }}>
        About Hope Digital
      </h1>
      <div style={{
        background: "#23242a",
        borderRadius: 14,
        padding: "26px 22px",
        width: "100%",
        maxWidth: 470,
        color: "#fff",
        boxShadow: "0 2px 18px #d32f2f18"
      }}>
        <div style={{ fontSize: 16.2, lineHeight: 1.7, marginBottom: 12 }}>
          <b>Hope Digital</b> is an AI assistant platform built for solo entrepreneurs, businesses, and creators in Jordan and beyond.<br /><br />
          <span style={{ color: "#be3144", fontWeight: 600 }}>Our Mission:</span> Make world-class AI help available, affordable, and personal—without hiring staff or wasting time.<br /><br />
          <b>How it works:</b> You pick your plan. You get a personal AI assistant (or several) trained for your needs. Ask for help with content, strategy, research, emails, or automation—directly from your dashboard.<br /><br />
          <b>Who we are:</b> Founded by Gaith Muhtadi, Hope Digital is 100% built and run from Jordan, with global tools and standards. We believe AI can empower anyone to win faster, with less stress.
        </div>
      </div>
    </div>
  );
}

// ---- CONTACT PAGE ----
function ContactPage() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        paddingTop: 30,
      }}
    >
      <h1 style={{ color: "#d32f2f", fontWeight: 800, fontSize: 32, marginBottom: 24 }}>
        Contact Us
      </h1>
      <div style={{
        background: "#23242a",
        borderRadius: 14,
        padding: "26px 22px",
        width: "100%",
        maxWidth: 370,
        color: "#fff",
        boxShadow: "0 2px 18px #d32f2f18",
        marginBottom: 28
      }}>
        <div style={{ marginBottom: 15, fontSize: 15.5 }}>
          <b>Email:</b> <a href="mailto:gaithmuhtadi@gmail.com" style={{ color: "#d32f2f" }}>gaithmuhtadi@gmail.com</a>
        </div>
        <div style={{ marginBottom: 15, fontSize: 15.5 }}>
          <b>WhatsApp:</b> <a href="https://wa.me/962792396063" target="_blank" rel="noopener noreferrer" style={{ color: "#d32f2f" }}>0792 396 063</a>
        </div>
        <div style={{ marginBottom: 10, fontSize: 14 }}>
          Or use the form below. We usually reply within a few hours.
        </div>
        <form action="https://formspree.io/f/xwkrndyl" method="POST">
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            style={{
              width: "100%", padding: 8, marginBottom: 9, borderRadius: 7, border: "1.5px solid #d32f2f55", background: "#19191c", color: "#fff"
            }}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            style={{
              width: "100%", padding: 8, marginBottom: 9, borderRadius: 7, border: "1.5px solid #d32f2f55", background: "#19191c", color: "#fff"
            }}
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={3}
            style={{
              width: "100%", padding: 8, marginBottom: 10, borderRadius: 7, border: "1.5px solid #d32f2f55", background: "#19191c", color: "#fff"
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%", padding: "9px 0", background: "#d32f2f",
              border: "none", borderRadius: 7, color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer"
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

// ---- HOME PAGE ----
function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 34,
        background: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          marginBottom: 5,
        }}
      >
        <img
          src={logo}
          alt="Hope Logo"
          style={{
            width: 84,
            height: 84,
            marginBottom: 8,
            borderRadius: 22,
            border: "2.5px solid #d32f2f",
            boxShadow: "0 2px 24px #c829298c",
          }}
        />
        <h1
          style={{
            fontWeight: 900,
            fontSize: 36,
            letterSpacing: "-2px",
            color: "#ececec",
            margin: 0,
            marginBottom: 0,
          }}
        >
          Hope
        </h1>
        <div
          style={{
            fontSize: 15.5,
            color: "#be3144",
            fontWeight: 600,
            letterSpacing: ".5px",
            marginBottom: 0,
          }}
        >
          your vision our ai
        </div>
      </div>
      <div
        className="cards-row"
        style={{
          display: "flex",
          gap: 28,
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          marginTop: 12,
        }}
      >
        <AssistantCard name="Financial Advisor" description="Smart money tips" />
        <AssistantCard name="Marketing Specialist" description="Grow your brand" />
        <AssistantCard name="Data Analyst" description="Numbers that matter" />
        <AssistantCard name="Content Creator" description="Engaging posts" />
      </div>
    </div>
  );
}

// ---- NAVBAR ----
function NavBar() {
  return (
    <div
      style={{
        width: "100%",
        background: "#202124ee",
        padding: "14px 0 14px 0",
        display: "flex",
        justifyContent: "center",
        gap: 40,
        position: "sticky",
        top: 0,
        zIndex: 10,
        borderBottom: "1px solid #191a1f",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
          textDecoration: "none",
          letterSpacing: -1,
        }}
      >
        Home
      </Link>
      <Link
        to="/plans"
        style={{
          color: "#d32f2f",
          fontWeight: 700,
          fontSize: 18,
          textDecoration: "none",
          letterSpacing: -1,
        }}
      >
        Plans
      </Link>
      <Link
        to="/about"
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
          textDecoration: "none",
          letterSpacing: -1,
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
          textDecoration: "none",
          letterSpacing: -1,
        }}
      >
        Contact
      </Link>
    </div>
  );
}

// ---- FOOTER ----
function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#191a1f",
        color: "#ececec",
        padding: "24px 0 20px 0",
        marginTop: 48,
        textAlign: "center",
        fontSize: 15,
        borderTop: "1.5px solid #25262a",
      }}
    >
      <div style={{ marginBottom: 8 }}>
        &copy; {new Date().getFullYear()} Hope Digital. All rights reserved.
      </div>
      <div style={{ marginBottom: 8 }}>
        <a href="mailto:gaithmuhtadi@gmail.com" style={{ color: "#d32f2f", margin: "0 10px", textDecoration: "none", fontWeight: 500 }}>
          Email
        </a>
        |
        <a href="https://wa.me/962792396063" target="_blank" rel="noopener noreferrer" style={{ color: "#d32f2f", margin: "0 10px", textDecoration: "none", fontWeight: 500 }}>
          WhatsApp
        </a>
      </div>
      <div style={{ color: "#86898d", fontSize: 13.5 }}>
        Built in Jordan • Powered by AI
      </div>
    </footer>
  );
}

// ---- MAIN APP ----
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
