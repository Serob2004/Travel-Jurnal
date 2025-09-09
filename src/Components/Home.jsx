import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
      title: "Relaxing Beach Destinations",
    },
    {
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
      title: "Explore Stunning Mountains",
    },
    {
      img: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg",
      title: "Vibrant City Adventures",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        color: "white",
        paddingBottom: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "120%",
          height: "100%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
          animation: "moveBG 30s linear infinite",
        }}
      />
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
      />

      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          zIndex: 1,
          opacity: showContent ? 1 : 0,
          transform: showContent ? "translateY(0)" : "translateY(-20px)",
          transition: "all 1s ease",
          padding: "0 10px",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "5px" }}>
          Welcome to My Travel Page 🌍
        </h2>
        <p style={{ fontSize: "1.1rem" }}>
          Glad to have you here! Let’s explore the world together.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          zIndex: 1,
          width: "100%",
          maxWidth: "1000px",
          padding: "0 10px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 280px",
              maxWidth: "300px",
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "15px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              textAlign: "center",
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.8s ease ${
                index * 0.2
              }s, transform 0.8s ease ${index * 0.2}s`,
            }}
          >
            <img
              src={card.img}
              alt={card.title}
              style={{
                width: "100%",
                borderRadius: "15px",
                marginBottom: "10px",
              }}
            />
            <p>{card.title}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/explore")}
        style={{
          marginTop: "40px",
          padding: "12px 28px",
          fontSize: "1.2rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          background:
            "linear-gradient(90deg, rgba(67,206,162,0.3), rgba(24,90,157,0.3))",
          color: "white",
          fontWeight: "bold",
          letterSpacing: "1px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          zIndex: 1,
        }}
      >
        Start Exploring ✈️
      </button>

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
