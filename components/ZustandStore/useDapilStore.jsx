// useDapilStore.jsx

import { create } from 'zustand';

const useDapilStore = create((set, get) => ({
  dapils: [],
  selectedProvinsi: null,
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
  getProvinces: () => {
    return get().dapils.map((provinsiData) => provinsiData.provinsi);
  },
  setSelectedProvinsi: (provinsi) => {
    set({
      selectedProvinsi: provinsi,
      selectedKabupaten: null,
      selectedKecamatan: null,
    });
  },
  setSelectedKabupaten: (nama) => {
    set({ selectedKabupaten: nama, selectedKecamatan: null });
  },
  setSelectedKecamatan: (nama) => {
    set({ selectedKecamatan: nama });
  },
  getKabupatenList: () => {
    const selectedProvinsi = get().selectedProvinsi;
    const dapils = get().dapils;
    const kabupatenList = dapils
      .find((provinsiData) => provinsiData.provinsi === selectedProvinsi)
      ?.kabupaten || [];
    return kabupatenList;
  },
  initializeData: async () => {
    await get().fetchDapils();
    // You can add additional initialization logic here
    // For example, setting default selectedProvinsi, etc.
  },
}));

export default useDapilStore;
