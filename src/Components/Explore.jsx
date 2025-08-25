import { useState } from "react";
import useTripsStore from "./useTripsStore";

export default function Explore() {
  const { trips } = useTripsStore();
  const [selectedTrip, setSelectedTrip] = useState(null);

  const backgroundImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80";

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        color: "white",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "3rem",
          }}
        >
          Explore Travel Posts
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {trips.map((trip) => (
            <div
              key={trip.id}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => setSelectedTrip(trip)}
            >
              <img
                src={trip.image}
                alt={trip.title}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h2 style={{ margin: 0, textAlign: "center" }}>{trip.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      {selectedTrip && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "white",
              color: "black",
              borderRadius: "12px",
              padding: "20px",
              maxWidth: "500px",  
              width: "90%",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              position: "relative",
              textAlign: "center",
            }}
          >
          
            <button
              onClick={() => setSelectedTrip(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              ✖
            </button>

            <img
              src={selectedTrip.image}
              alt={selectedTrip.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h2>{selectedTrip.title}</h2>
            <p style={{ fontWeight: "600", margin: "5px 0" }}>
              {selectedTrip.location}
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
              {new Date(selectedTrip.date).toLocaleDateString()}
            </p>
            <p>{selectedTrip.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
