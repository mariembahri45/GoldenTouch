// Since token is stored in httpOnly cookie, we can't access it from frontend
// We store user info in localStorage and check authentication via API calls
// The token cookie is automatically sent with requests
//ahmed
const getUser = () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
};

const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

const removeUser = () => {
    localStorage.removeItem('user');
};

const getUserRole = () => {
    const user = getUser();
    return user ? user.role : null;
};

const isAuthenticated = () => {
    // Check if user data exists in localStorage
    // The actual token is in httpOnly cookie and sent automatically with requests
    return !!getUser();
};

const hasRole = (requiredRole) => {
    const role = getUserRole();
    return role === requiredRole;
};

// Helper to make authenticated API calls
const apiCall = async (url, options = {}) => {
    return fetch(url, {
        ...options,
        credentials: 'include', // Include cookies
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export {
    getUser,
    setUser,
    removeUser,
    getUserRole,
    isAuthenticated,
    hasRole,
    apiCall
};

