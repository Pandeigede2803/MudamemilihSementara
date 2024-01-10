"use client"

import React, { useEffect } from 'react';
import useAuthStore from '@/components/ZustandStore/useAuthStore'; // Adjust the path as necessary

const Page = () => {
    const { loginUser } = useAuthStore();
    const token = useAuthStore(state => state.token);

    useEffect(() => {
        console.log('Component mounted, starting login process...');
        loginUser('admin@jsonapi.com', 'secret');
    }, [loginUser]);

    return (
        <div className='mt-32'>
            <h1>Login Page</h1>
            {token && <div>Token: {token}</div>}
            {/* You can add other components or content here */}
        </div>
    );
};

export default Page;


