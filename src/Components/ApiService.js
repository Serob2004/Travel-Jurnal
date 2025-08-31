import { toast } from "react-hot-toast";

class ApiService {
  async get(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while fetching data!");
      return null;
    }
  }

  async post(url, body) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`Failed to post: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while posting data!");
      return null;
    }
  }

  async put(url, body) {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`Failed to update: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while updating data!");
      return null;
    }
  }

  async delete(url) {
    try {
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) throw new Error(`Failed to delete: ${res.status}`);
      return true;
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while deleting data!");
      return false;
    }
  }
}

export default new ApiService();
