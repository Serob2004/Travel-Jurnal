import { NavLink } from "react-router-dom";
import useAuthStore from "./useAuthStore";

export default function Header() {
  const { user, setUser } = useAuthStore();

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
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
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
            <NavLink
              to="/"
              onClick={() => setUser(null)}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Logout
            </NavLink>
          )}

          <NavLink
            to="/my-journal"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            My Journal
          </NavLink>
        </nav>
      </div>
    </>
  );
}
