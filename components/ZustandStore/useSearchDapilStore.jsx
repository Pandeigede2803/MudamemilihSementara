"use client"
// searchDapilsStore.js
// searchApiStore.js
import { create } from 'zustand';
import API_ENDPOINTS from '@/config';
import useAuthStore from '../ZustandStore/authStore';

const useSearchApiStore = create((set) => ({
  dapils: null,
  searchParams: {
    searchParam: '',
    // Add more parameters as needed
  },

  setSearchParam: (param) =>
    set((state) => ({ searchParams: { ...state.searchParams, searchParam: param } })),
  // Add more setter functions for other parameters

  resetSearchParams: () =>
    set((state) => ({ searchParams: { searchParam: '' /* Add other default values */ } })),

  fetchDapils: async () => {
    console.log("Fetching dapils using the token...");

    const token = useAuthStore.getState().token;
    const { searchParam } = set.getState().searchParams;

    const apiUrl = `${API_ENDPOINTS.searchDapils}?search=${searchParam}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Data fetching failed with status: ' + response.status);
      }

      const dapilsData = await response.json();

      set((state) => ({ ...state, dapils: dapilsData }));
      console.log("Dapils fetching successful, data:", dapilsData);
    } catch (error) {
      console.error("Error occurred during dapils fetching:", error);
    }
  },
}));

export default useSearchApiStore;
