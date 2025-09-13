import useTripsStore from "./useTripsStore";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favorites = useTripsStore((s) => s.favorites);
  const removeFavorite = useTripsStore((s) => s.removeFavorite);

  
  const containerStyle = {
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: favorites.length === 0 ? "center" : "flex-start",
    boxSizing: "border-box",
    background: "linear-gradient(135deg, #89f7fe, #66a6ff)", 
    color: "white",
    width: "100%",
  };
  const contentWrapperStyle = {
    maxWidth: "900px",
    width: "100%",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        {favorites.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>No favorites yet</h2>
        ) : (
          <>
            <h1 style={{ marginBottom: "40px", textAlign: "center" }}>My Favorites</h1>
            <div style={gridStyle}>
              {favorites.map((trip) => (
                <div key={trip.id} style={{ position: "relative" }}>
                  <Link
                    to={`/trips/${trip.id}`}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        aspectRatio: "1 / 1", 
                      }}
                    >
                      <img
                        src={trip.image}
                        alt={trip.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          background: "rgba(0,0,0,0.5)",
                          padding: "5px 0",
                          textAlign: "center",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {trip.title}
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={() => removeFavorite(trip.id)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "rgba(255,0,0,0.8)",
                      border: "none",
                      borderRadius: "6px",
                      color: "white",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
