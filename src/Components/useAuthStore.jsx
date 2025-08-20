
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
}));

export default useAuthStore;
