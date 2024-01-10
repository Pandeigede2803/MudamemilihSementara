"use client"
import React, { useEffect, useState } from 'react';
import useDataStore from '@/components/ZustandStore/useDatastore'; // Update the path as needed

const LocationButtons = () => {
  const { searchParam, setSearchParam, fetchData, data } = useDataStore(); // Note the parentheses here
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationClick = (locationName) => {
    setSearchParam(locationName);
    console.log(`SearchParam updated to: ${locationName}`);
    fetchData();
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      try {
        await fetchData();
      } catch (error) {
        console.error("Error:", error); // Handle any errors that may occur during the fetch
      }
      setIsLoading(false); // Set isLoading to false once the promise is resolved or if there's an error
    };

    fetchDataAsync();
  }, [fetchData]);

  return (
    <div className='mt-32'>
      <button onClick={() => handleLocationClick('Jakarta')}>Jakarta</button>
      <button onClick={() => handleLocationClick('Bali')}>Bali</button>
      <button onClick={() => handleLocationClick('JawaBarat')}>Jawa Barat</button>
      <button onClick={() => handleLocationClick('JawaTengah')}>Jawa Tengah</button>

      {/* Display fetched data */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LocationButtons;
