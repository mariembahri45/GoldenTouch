const axios = require('axios');

const getUsersFromAPI = async () => {
    try {
        const response = await axios.get('http://localhost:6005/api/user/');
        
        if (response.data && response.data.users) {
            console.log("=== All Users Retrieved from API ===\n");
            response.data.users.forEach((user, index) => {
                console.log(`${index + 1}. Name: ${user.name}`);
                console.log(`   Email: ${user.email}`);
                console.log(`   Role: ${user.role}`);
                console.log(`   Password: ${user.password} (stored in database)`);
                console.log("");
            });
        } else {
            console.log("No users found or unexpected response format.");
            console.log("Response:", response.data);
        }
    } catch (error) {
        if (error.response) {
            console.error("API Error:", error.response.status, error.response.data);
        } else if (error.request) {
            console.error("No response from server. Is the backend running on port 6005?");
            console.error("Error:", error.message);
        } else {
            console.error("Error:", error.message);
        }
    }
};

getUsersFromAPI();


