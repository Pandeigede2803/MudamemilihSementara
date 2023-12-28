"use client"

// dataStore.js
import { create } from 'zustand';
import useAuthStore from "../ZustandStore/authStore"; // Adjust the path as necessary
import API_ENDPOINTS from '@/config';


const useDataStore = create(set => ({
    data: null,
    selectedProvinsi: null,
    selectedKabKota: null,
  

    fetchData: () => {
        console.log("Fetching data using the token...");

        const token = useAuthStore.getState().token;
        if (!token) {
            console.log("No token found, cannot fetch data.");
            return;
        }
        const apiUrl = API_ENDPOINTS.dapils

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Data fetching failed with status: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            set({ data: data.data });
            console.log("Data fetching successful, data:", data.data);
        })
        .catch(error => {
            console.error("Error occurred during data fetching:", error);
        });
    },

    // set selected provinsi and kab kota for global state
    setSelectedProvinsi: (provinsi) => set({ selectedProvinsi: provinsi, selectedKabKota: null }),
    setSelectedKabKota: (kabKota) => set({ selectedKabKota: kabKota }),
}));

export default useDataStore;
