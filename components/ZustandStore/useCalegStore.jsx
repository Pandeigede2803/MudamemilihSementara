import { create } from 'zustand';
import useAuthStore from "./authStore"; // Assuming this is the correct path

const useCalegStore = create((set) => ({
  // State for storing caleg data
  calegs: null,
  calegType: null,    // Dynamic state for caleg type
  dapilId: null,      // Dynamic state for dapil ID

  // Method to fetch caleg data
  fetchCalegs: () => {
    console.log("Fetching caleg data...");

    const { token } = useAuthStore.getState();
    const { calegType, dapilId } = useCalegStore.getState();

    if (!token) {
      console.error("No token found, cannot fetch caleg data.");
      return;
    }

    const apiUrl = `http://server.mudahmemilih.com/api/v2/calegs?filter[caleg_type]=${calegType}&filter[dapil_id]=${dapilId}`;
    
    console.log("Fetching caleg data from:", apiUrl);

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Received response with status:", response.status);

        if (!response.ok) {
          throw new Error("Caleg data fetching failed with status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Caleg data received successfully:", data);
        set({ calegs: data });
      })
      .catch((error) => {
        console.error("Error occurred during caleg data fetching:", error);
      });
  },

  // Method to set caleg type
  setCalegType: (type) => set({ calegType: type }),

  // Method to set dapil ID
  setDapilId: (id) => set({ dapilId: id }),
}));

export default useCalegStore;
