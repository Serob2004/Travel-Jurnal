import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext"; 

export default function Header() {
  const { user, setUser } = useAuth(); 

  const activeStyle = {
    fontWeight: "bold",
    color: "darkblue",
    textDecoration: "underline",
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Travel Journal
      </h1>
      <div className="header">
        <nav
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
            fontSize: "18px",
            padding: "10px 20px",
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
              style={{ color: "black", textDecoration: "none" }}
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
