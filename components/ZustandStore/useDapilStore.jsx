"use client"

import {create} from 'zustand';

const useDapilStore = create((set) => ({
  dapils: [],
  selectedKabupaten: null,
  selectedKecamatan: null,
  fetchDapils: async () => {
    try {
      const response = await fetch("http://localhost:3001/dapil");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      set({ dapils: data });
    } catch (error) {
      console.error("Fetching error:", error);
    }
  },
  setSelectedKabupaten: (nama) => {
    set({ selectedKabupaten: nama, selectedKecamatan: null });
  },
  setSelectedKecamatan: (nama) => {
    set({ selectedKecamatan: nama });
  },
}));

export default useDapilStore;
