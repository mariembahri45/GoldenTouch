const jwt = require("jsonwebtoken");
const User = require("../models/User");

const decodeToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
        return decoded;
    } catch (error) {
        return null;
    }
};

const getUserRole = async (userId) => {
    try {
        const user = await User.findById(userId).select("role");
        return user ? user.role : null;
    } catch (error) {
        return null;
    }
};

const getUserFromToken = async (token) => {
    const decoded = decodeToken(token);
    if (!decoded || !decoded.userId) {
        return null;
    }
    
    try {
        const user = await User.findById(decoded.userId).select("name email role");
        return user;
    } catch (error) {
        return null;
    }
};

module.exports = { decodeToken, getUserRole, getUserFromToken };

