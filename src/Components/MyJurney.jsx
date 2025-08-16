import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyJournal({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("You need to login for this page");
      navigate("/login");
    }
  }, [user, navigate]);

  const [trips, setTrips] = useState([
    { id: 1, title: "Paris Adventure", date: "2023-06-10" },
    { id: 2, title: "Hiking in Armenia", date: "2023-07-20" },
  ]);

  const [newTrip, setNewTrip] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const addTrip = (e) => {
    e.preventDefault();
    if (newTrip.trim()) {
      setTrips((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: newTrip,
          date: new Date().toISOString().slice(0, 10),
        },
      ]);
      setNewTrip("");
    }
  };

  const deleteTrip = (id) => {
    setTrips(trips.filter((t) => t.id !== id));
  };

  const startEdit = (trip) => {
    setEditId(trip.id);
    setEditTitle(trip.title);
  };

  const saveEdit = () => {
    setTrips((prev) =>
      prev.map((t) => (t.id === editId ? { ...t, title: editTitle } : t))
    );
    setEditId(null);
    setEditTitle("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url("https://www.muchbetteradventures.com/magazine/content/images/2024/04/mount-everest-at-sunset.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "40px", fontSize: "3rem" }}
      >
        My Journal
      </h1>

      <form
        onSubmit={addTrip}
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
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
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
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
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
        {trips.map((trip) => (
          <div
            key={trip.id}
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
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
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={saveEdit}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#28a745",
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: "white",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#1e7e34")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#28a745")
                    }
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#dc3545",
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: "white",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#b02a37")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#dc3545")
                    }
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  {trip.title}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    marginBottom: "10px",
                  }}
                >
                  {new Date(trip.date).toLocaleDateString()}
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => startEdit(trip)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#ffc107",
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: "#212529",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#d39e00")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#ffc107")
                    }
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTrip(trip.id)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#dc3545",
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: "white",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#b02a37")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#dc3545")
                    }
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
