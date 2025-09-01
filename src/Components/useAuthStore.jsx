import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,

  setUser: (user) => {
    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify({ id: user.id, name: user.name })
      );
    } else {
      localStorage.removeItem("user");
    }
    set({ user });
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
  loginFromAPI: async (userId) => {
    try {
      const res = await fetch(
        `https://68af739ab91dfcdd62bc5866.mockapi.io/api/v1/users/${userId}`
      );
      if (!res.ok) throw new Error("Failed to fetch user");
      const data = await res.json();

      set({ user: { id: data.id, name: data.name } });
      localStorage.setItem(
        "user",
        JSON.stringify({ id: data.id, name: data.name })
      );
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useAuthStore;
