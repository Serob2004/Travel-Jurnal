
import { create } from "zustand";

const useTripsStore = create((set) => ({
  trips: [
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
  ],

  addTrip: (trip, userId) =>
    set((state) => ({
      trips: [...state.trips, { id: Date.now(), userId, ...trip }],
    })),

  updateTrip: (id, updatedTrip) =>
    set((state) => ({
      trips: state.trips.map((t) =>
        t.id === id ? { ...t, ...updatedTrip } : t
      ),
    })),

  deleteTrip: (id) =>
    set((state) => ({
      trips: state.trips.filter((t) => t.id !== id),
    })),
}));

export default useTripsStore;
