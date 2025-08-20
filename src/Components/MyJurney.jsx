import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  useTripsStore  from "./useTripsStore";

export default function MyJournal({ user }) {
  const navigate = useNavigate();
  const { trips, addTrip, updateTrip, deleteTrip } = useTripsStore();

  const [newTrip, setNewTrip] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const myTrips = user ? trips.filter((t) => t.userId === user.id) : [];

  const handleAdd = (e) => {
    e.preventDefault();
    if (newTrip.trim()) {
      addTrip(
        {
          title: newTrip,
          location: "Unknown",
          date: new Date().toISOString().slice(0, 10),
          description: "No description",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        },
        user.id
      );
      setNewTrip("");
    }
  };

  const startEdit = (trip) => {
    setEditId(trip.id);
    setEditTitle(trip.title);
  };

  const saveEdit = () => {
    updateTrip(editId, { title: editTitle });
    setEditId(null);
    setEditTitle("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        color: "white",
        backgroundImage: `url("https://www.muchbetteradventures.com/magazine/content/images/2024/04/mount-everest-at-sunset.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "40px", fontSize: "3rem" }}
      >
        My Journal
      </h1>

      <form
        onSubmit={handleAdd}
        style={{
          maxWidth: "600px",
          margin: "0 auto 40px auto",
          display: "flex",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="New trip title"
          value={newTrip}
          onChange={(e) => setNewTrip(e.target.value)}
          style={{
            flexGrow: 1,
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 25px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#007bff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
        }}
      >
        {myTrips.map((trip) => (
          <div
            key={trip.id}
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "20px",
              color: "white",
            }}
          >
            {editId === trip.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    border: "none",
                  }}
                />
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                >
                  <button
                    onClick={saveEdit}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3>{trip.title}</h3>
                <p>{new Date(trip.date).toLocaleDateString()}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => startEdit(trip)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: "#ffc107",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTrip(trip.id)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
