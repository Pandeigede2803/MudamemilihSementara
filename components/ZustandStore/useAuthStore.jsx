// "use client"

// // authStore.js
// import {create} from 'zustand';

// const useAuthStore = create(set => ({
//     data: null,
//     token: null,
//     loginAndFetchData: () => {
//         console.log("Starting login process...");

//         // Login Request
//         const formData = new FormData();
//         formData.append("email", "admin@jsonapi.com");
//         formData.append("password", "secret");

//         fetch('http://127.0.0.1:8000/api/v2/login', {
//             method: 'POST',
//             body: formData,
//         })
//         .then(response => {
//             console.log("Received response from login request");
//             if (!response.ok) {
//                 throw new Error('Login failed with status: ' + response.status);
//             }
//             return response.json();
//         })
//         .then(loginData => {
//             const token = loginData.access_token;
//             set({ token });
//             console.log("Login successful, token received:", token);

//             console.log("Fetching data using the token...");
//             return fetch('http://127.0.0.1:8000/api/v2/dapils', {
//                 method: 'GET',
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     'Content-Type': 'application/json',
//                 },
//             });
//         })
//         .then(response => {
//             console.log("Received response from data fetch request");
//             if (!response.ok) {
//                 throw new Error('Data fetching failed with status: ' + response.status);
//             }
//             return response.json();
//         })
//         .then(data => {
//             set({ data: data.data });
//             console.log("Data fetching successful, data:", data.data);
//         })
//         .catch(error => {
//             console.error("Error occurred:", error);
//         });
//     },
// }));

// export default useAuthStore;
