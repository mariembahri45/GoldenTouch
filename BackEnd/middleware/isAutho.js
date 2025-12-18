//rania

const isAutho = (allowedRoles) => {
    return (request, response, next) => {
        try {
            const role = request.userRole;
            
            if (!role) {
                return response.status(403).json({ msg: "Access denied. No role assigned" });
            }
            
            if (!allowedRoles.includes(role)) {
                return response.status(403).json({ msg: "Access denied. Insufficient permissions" });
            }
            
            next();
        } catch (error) {
            console.error(error);
            response.status(500).json({ msg: "Error checking authorization" });
        }
    };
};

module.exports = isAutho;

