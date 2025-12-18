//rania

const { decodeToken } = require("../utils/jwtUtils");

const isAuth = (request, response, next) => {
    try {
        const token = request.cookies.token;
        
        if (!token) {
            return response.status(401).json({ msg: "No token provided" });
        }
        
        const decoded = decodeToken(token);
        if (!decoded) {
            return response.status(401).json({ msg: "Invalid or expired token" });
        }
        
        request.userId = decoded.userId;
        request.userEmail = decoded.email;
        request.userRole = decoded.role;
        next();
    } catch (error) {
        console.error(error);
        response.status(401).json({ msg: "Invalid or expired token" });
    }
};

module.exports = isAuth;

