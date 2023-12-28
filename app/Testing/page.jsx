"use client"
import React, { useEffect } from 'react';
import useAuthStore from '@/components/ZustandStore/authStore'; // Adjust the path as necessary
import useDataStore from '@/components/ZustandStore/useDatastore'; // Adjust the path as necessary

const ClientComponent = () => {
    const {  token } = useAuthStore();
    const { fetchData, data } = useDataStore();

    // Uncomment and adjust this if you need to handle the login
    // useEffect(() => {
    //     if (!token) {
    //         login();
    //     }
    // }, [token, login]);

    useEffect(() => {
        if (token) {
            fetchData();
        }
    }, [token, fetchData]);

    return (
        <div className="mt-32">
            <h2>Data from API:</h2>
            {data ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{`${item.attributes.kab_kota} - ${item.attributes.nama}`}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default ClientComponent;
