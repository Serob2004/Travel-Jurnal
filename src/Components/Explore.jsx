import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import useTripsStore from "./useTripsStore";
import useAuthStore from "./useAuthStore";

export default function Explore() {
  const trips = useTripsStore((s) => s.trips);
  const fetchTripsFromAPI = useTripsStore((s) => s.fetchTripsFromAPI);
  const addFavorite = useTripsStore((s) => s.addFavorite);
  const { user } = useAuthStore();

  useEffect(() => {
    fetchTripsFromAPI?.();
  }, [fetchTripsFromAPI]);

  const backgroundImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80";

  const uniqueTrips = Array.isArray(trips)
    ? trips.filter(
        (t, index, self) => index === self.findIndex((s) => s.id === t.id)
      )
    : [];

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
          {uniqueTrips.length > 0 ? (
            uniqueTrips.map((trip) => (
              <div key={trip.id} style={{ position: "relative" }}>
              
                <button
                  onClick={(e) => {
                    e.preventDefault(); 
                    if (!user) {
                      toast.error("Please login to add favorites");
                      return;
                    }
                    addFavorite(trip);
                    toast.success("Added to favorites");
                  }}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "rgba(255,255,255,0.8)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    zIndex: 3,
                  }}
                >
                  ❤️
                </button>

                <Link
                  to={`/trips/${trip.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={trip.image}
                      alt={trip.title}
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ padding: "15px" }}>
                      <h2 style={{ margin: 0, textAlign: "center" }}>
                        {trip.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div style={{ opacity: 0.9, textAlign: "center" }}>
              Loading journeys...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
