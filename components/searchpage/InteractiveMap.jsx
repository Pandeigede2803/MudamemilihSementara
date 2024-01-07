// components/InteractiveMap.js
import React, { useState } from 'react';

const provinces = [
    { id: 'aceh', name: 'Aceh' },
    { id: 'bali', name: 'Bali' },
    { id: 'banten', name: 'Banten' },
    { id: 'bengkulu', name: 'Bengkulu' },
    { id: 'gorontalo', name: 'Gorontalo' },
    { id: 'jakarta', name: 'Jakarta' },
    { id: 'jambi', name: 'Jambi' },
    { id: 'jateng', name: 'Jawa Tengah' },
    { id: 'jatim', name: 'Jawa Timur' },
    { id: 'jabar', name: 'Jawa Barat' },
    { id: 'jogja', name: 'Yogyakarta' },
    { id: 'kalbar', name: 'Kalimantan Barat' },
    { id: 'kalsel', name: 'Kalimantan Selatan' },
    { id: 'kalteng', name: 'Kalimantan Tengah' },
    { id: 'kaltim', name: 'Kalimantan Timur' },
    { id: 'kalut', name: 'Kalimantan Utara' },
    { id: 'kepriau', name: 'Kepulauan Riau' },
    { id: 'lampung', name: 'Lampung' },
    { id: 'maluku', name: 'Maluku' },
    { id: 'malukuutara', name: 'Maluku Utara' },
    { id: 'ntb', name: 'Nusa Tenggara Barat' },
    { id: 'ntt', name: 'Nusa Tenggara Timur' },
    { id: 'papua', name: 'Papua' },
    { id: 'papuabarat', name: 'Papua Barat' },
    { id: 'riau', name: 'Riau' },
    { id: 'sulbar', name: 'Sulawesi Barat' },
    { id: 'sulsel', name: 'Sulawesi Selatan' },
    { id: 'sulteng', name: 'Sulawesi Tengah' },
    { id: 'sultenggara', name: 'Sulawesi Tenggara' },
    { id: 'sulut', name: 'Sulawesi Utara' },
    { id: 'sumbar', name: 'Sumatera Barat' },
    { id: 'sumsel', name: 'Sumatera Selatan' },
    { id: 'sumut', name: 'Sumatera Utara' },
];

const InteractiveMap = () => {
    const [selectedProvince, setSelectedProvince] = useState('');

    const handleProvinceClick = (provinceId) => {
        setSelectedProvince(provinceId);
    };

    return (
        <div className="relative">
        {provinces.map(province => (
            <div
                key={province.id}
                id={`map-${province.id}`}
                className={`cursor-pointer transition-opacity duration-300 ${selectedProvince === province.id ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => handleProvinceClick(province.id)}
            >
                <div>{province.name}</div>
            </div>
        ))}

        <img src="/indonesia-map.png" alt="Indonesia Map" useMap="#indonesiaMap" className="max-w-full h-auto" />
        <map name="indonesiaMap">
            {/* Add area elements for each province here */}
            <area shape="rect" coords="x1,y1,x2,y2" href="#" alt="Aceh" onClick={() => handleProvinceClick('aceh')} />
            {/* Repeat for other provinces */}
        </map>
    </div>
    );
};

export default InteractiveMap;
