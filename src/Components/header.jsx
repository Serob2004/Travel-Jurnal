import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAuthStore from "./useAuthStore";

export default function Header() {
  const { user, setUser } = useAuthStore();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeStyle = {
    fontWeight: "bold",
    color: "#ffd700",
    textDecoration: "underline",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const links = (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/explore"
        style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
      >
        Explore
      </NavLink>
      {!user && (
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Login
        </NavLink>
      )}
      {user && (
        <NavLink to="/" onClick={() => setUser(null)} style={linkStyle}>
          Logout
        </NavLink>
      )}
      <NavLink
        to="/my-journal"
        style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
      >
        My Journal
      </NavLink>
    </>
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), 
            url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px 20px 20px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Travel Journal
        </h1>
      </div>

      <div
        className="header"
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(4px)",
          padding: "12px 25px",
          position: "relative",
        }}
      >
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              position: "absolute",
              top: "1px",
              right: "25px",
              width: "30px",
              height: "22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              zIndex: 1000,
            }}
          >
            <span
              style={{
                display: "block",
                height: "3px",
                width: "100%",
                background: "white",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                display: "block",
                height: "3px",
                width: "100%",
                background: "white",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                display: "block",
                height: "3px",
                width: "100%",
                background: "white",
                borderRadius: "2px",
              }}
            />
          </button>
        )}

        <nav
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "20px",
            justifyContent: isMobile ? "flex-start" : "center",
            alignItems: "center",
            fontSize: "18px",
            overflow: "hidden",
            maxHeight: isMobile ? (menuOpen ? "500px" : "0") : "none",
            transition: isMobile ? "max-height 0.3s ease-in-out" : "none",
          }}
        >
          {links}
        </nav>
      </div>
    </>
  );
}
