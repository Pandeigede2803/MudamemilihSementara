import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indonesiaMap from "../searchpage/indonesia-geojson.json"; // Path to the GeoJSON file for Indonesia

const IndonesiaMap = () => {
  return (

    <div className=" flex flex-col justify-center">
    <ComposableMap>
      <Geographies geography={indonesiaMap}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap></div>
  );
};

export default IndonesiaMap;


