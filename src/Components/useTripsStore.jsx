import { create } from "zustand";
import ApiService from "./ApiService";

const useTripsStore = create((set, get) => ({
  trips: [],
  apiFetched: false,
  favorites: [],

  fetchTripsFromAPI: async () => {
    if (get().apiFetched) return;

    try {
      const data = await ApiService.get(
        "https://68af739ab91dfcdd62bc5866.mockapi.io/api/v1/journeys"
      );
      if (data) {
        const formatted = data.map((d) => ({
          id: d.id,
          userId: d.creator_id || 0,
          title: d.title,
          location: d.location || "Unknown",
          date: d.date
            ? typeof d.date === "number"
              ? new Date(d.date * 1000).toISOString().slice(0, 10)
              : new Date(d.date).toISOString().slice(0, 10)
            : new Date().toISOString().slice(0, 10),
          description: d.description || d.short_description || "No description",
          image: d.immage || "https://picsum.photos/300/200",
        }));

        set({ trips: [...get().trips, ...formatted], apiFetched: true });
      }
    } catch (err) {
      console.error("Error fetching trips:", err);
    }
  },

  addTrip: async (trip, userId) => {
    const newTrip = { ...trip, userId };
    try {
      const savedTrip = await ApiService.post(
        "https://68af739ab91dfcdd62bc5866.mockapi.io/api/v1/journeys",
        newTrip
      );
      if (savedTrip) set((state) => ({ trips: [...state.trips, savedTrip] }));
    } catch (err) {
      console.error("Error adding trip:", err);
    }
  },

  updateTrip: async (id, updatedTrip) => {
    try {
      const updated = await ApiService.put(
        `https://68af739ab91dfcdd62bc5866.mockapi.io/api/v1/journeys/${id}`,
        updatedTrip
      );
      if (updated)
        set((state) => ({
          trips: state.trips.map((t) =>
            t.id === id ? { ...t, ...updatedTrip } : t
          ),
        }));
    } catch (err) {
      console.error("Error updating trip:", err);
    }
  },

  deleteTrip: async (id) => {
    try {
      const success = await ApiService.delete(
        `https://68af739ab91dfcdd62bc5866.mockapi.io/api/v1/journeys/${id}`
      );
      if (success)
        set((state) => ({ trips: state.trips.filter((t) => t.id !== id) }));
    } catch (err) {
      console.error("Error deleting trip:", err);
    }
  },
  addFavorite: (trip) =>
    set((state) => {
      if (state.favorites.find((f) => f.id === trip.id)) return state;
      return { favorites: [...state.favorites, trip] };
    }),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((f) => f.id !== id),
    })),
}));

export default useTripsStore;
