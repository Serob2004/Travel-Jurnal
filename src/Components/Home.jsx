import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "120%",
          height: "120%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
          animation: "moveBG 30s linear infinite",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
          zIndex: -1,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            opacity: showContent ? 1 : 0,
            transform: showContent ? "translateY(0)" : "translateY(-30px)",
            transition: "all 1s ease",
          }}
        >
          🌍 Welcome to the Travel Journal
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "2rem",
            opacity: showContent ? 1 : 0,
            transform: showContent ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 0.5s",
          }}
        >
          Discover breathtaking destinations, capture your journeys, and get
          inspired by fellow travelers.
        </p>
        <button
          onClick={() => navigate("/explore")}
          style={{
            marginTop: "30px",
            padding: "12px 28px",
            fontSize: "1.2rem",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(90deg, #43cea2, #185a9d)",
            color: "white",
            fontWeight: "bold",
            letterSpacing: "1px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            opacity: showContent ? 1 : 0,
            transform: showContent ? "scale(1)" : "scale(0.7)",
            transition: "all 0.8s ease 1s",
          }}
        >
          Start Exploring ✈️
        </button>
      </div>

      <style>{`
        @keyframes moveBG {
          0% { transform: translate(0,0) scale(1); }
          25% { transform: translate(-5%,2%) scale(1.02); }
          50% { transform: translate(-10%,0) scale(1.04); }
          75% { transform: translate(-5%,-2%) scale(1.02); }
          100% { transform: translate(0,0) scale(1); }
        }
      `}</style>
    </div>
  );
}
