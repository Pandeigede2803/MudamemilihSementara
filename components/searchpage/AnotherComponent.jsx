"use client"

import { useRouter } from "next/router";
import useDapilStore from "@/components/ZustandStore/useDapilStore";

const AnotherComponent = () => {
  const router = useRouter();
  const { setSelectedKabupaten } = useDapilStore();

  const handleProvinceSelection = () => {
    // Set the selected province to "Bali"
    setSelectedKabupaten("Bali");

    // Navigate to the "searchPage/filter" route
    router.push("/searchPage/filter");
  };

  return (
    <div>
      <h2>Another Component</h2>
      <button onClick={handleProvinceSelection}>
        Set Province to Bali and Go to searchPage/filter
      </button>
    </div>
  );
};

export default AnotherComponent;
