import React, { createContext, useContext, useState } from "react";

const TripsContext = createContext();

export function TripsProvider({ children }) {
  const [trips, setTrips] = useState([
    {
      id: 1,
      userId: 1,
      title: "Sunset in Bali",
      location: "Bali, Indonesia",
      date: "2023-06-15",
      description:
        "Enjoyed the breathtaking sunsets and beautiful beaches in Bali.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      userId: 2,
      title: "Hiking the Alps",
      location: "Swiss Alps, Switzerland",
      date: "2023-07-10",
      description:
        "Challenging but rewarding hikes with stunning mountain views.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    },
  ]);

  const addTrip = (trip, userId) => {
    setTrips((prev) => [...prev, { id: Date.now(), userId, ...trip }]);
  };

  const updateTrip = (id, updatedTrip) => {
    setTrips((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedTrip } : t))
    );
  };

  const deleteTrip = (id) => {
    setTrips((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TripsContext.Provider value={{ trips, addTrip, updateTrip, deleteTrip }}>
      {children}
    </TripsContext.Provider>
  );
}

export function useTrips() {
  return useContext(TripsContext);
}
