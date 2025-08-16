import { useTrips } from "./TripsContext";

export default function Explore() {
  const { trips } = useTrips();

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
          {trips.map(({ id, title, location, date, description, image }) => (
            <div
              key={id}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h2 style={{ margin: "0 0 8px 0" }}>{title}</h2>
                <p style={{ fontWeight: "600", margin: "0 0 6px 0" }}>
                  {location}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    margin: "0 0 12px 0",
                  }}
                >
                  {new Date(date).toLocaleDateString()}
                </p>
                <p style={{ margin: 0 }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
