import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTripsStore from "./useTripsStore";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trips = useTripsStore((s) => s.trips);
  const fetchTripsFromAPI = useTripsStore((s) => s.fetchTripsFromAPI);

  useEffect(() => {
    if (!trips || trips.length === 0) {
      fetchTripsFromAPI?.();
    }
  }, [trips, fetchTripsFromAPI]);

  const backButtonStyle = {
    marginBottom: "20px",
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    background: "#333",
    color: "white",
    cursor: "pointer",
  };

  if (!trips || trips.length === 0) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <button onClick={() => navigate("/explore")} style={backButtonStyle}>
          ← Back
        </button>
        <div>Loading...</div>
      </div>
    );
  }

  const trip = trips.find((t) => String(t.id) === id);

  if (!trip) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <button onClick={() => navigate("/explore")} style={backButtonStyle}>
          ← Back
        </button>
        <h2>Trip not found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <button onClick={() => navigate("/explore")} style={backButtonStyle}>
        ← Back
      </button>

      <img
        src={trip.image}
        alt={trip.title}
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h1>{trip.title}</h1>
      <p style={{ fontWeight: "600" }}>{trip.location}</p>
      <p>{new Date(trip.date).toLocaleDateString()}</p>
      <p>{trip.description}</p>
    </div>
  );
}
