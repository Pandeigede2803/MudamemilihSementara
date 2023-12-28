// authStore.js
import { create } from 'zustand';
import API_ENDPOINTS from '@/config';

const useAuthStore = create(set => {
    
    let token = null
    let initApp = false

    // Action: Perform login and store the token
    const login = () => {

        console.log("Starting login process...");


        if(!token){

            const formData = new FormData();
            formData.append("email", "admin@jsonapi.com");  // Hardcoded email
            formData.append("password", "secret");  // Hardcoded password

            const apiUrl = API_ENDPOINTS.login

            fetch(apiUrl, {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed with status: ' + response.status);
                }
                return response.json();
            })
            .then(loginData => {
                const token = loginData.access_token;
                set({ token });
                console.log("Login successful, token received:", token);
            })
            .catch(error => {
                console.error("Error occurred during login:", error);
            });
        }

    }

    const initOnce = () => {
        if(!initApp) {
            login()
        }
    }

    

    return {
        token,
        login,
        initOnce
    }


});

export default useAuthStore;
