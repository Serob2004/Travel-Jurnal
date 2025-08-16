import { NavLink } from "react-router-dom";

export default function Header() {
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
      <div className="header" >
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
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Login
          </NavLink>
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
