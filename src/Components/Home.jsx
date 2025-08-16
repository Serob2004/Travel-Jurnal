export default function Home() {
  const backgroundImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      ></div>

   
      <div
        style={{
          position: "relative",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          🌍 Welcome to the Travel Journal
        </h1>
        <p style={{ fontSize: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
          Discover amazing destinations, share your journeys, and get inspired
          by other travelers.
        </p>
       
      </div>
    </div>
  );
}
