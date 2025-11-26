const express = require("express");
const userRoute = express.Router();
const { signup, signin, signout, getUsers } = require("../Controllers/userController");
const isAuth = require("../middleware/isAuth");
const isAutho = require("../middleware/isAutho");
const { getUserFromToken } = require("../utils/jwtUtils");

// Public routes
userRoute.post("/signup", signup);
userRoute.post("/signin", signin);
userRoute.get("/", getUsers);
// Protected route - requires authentication
userRoute.get("/profile", isAuth, async (request, response) => {
    try {
        const user = await getUserFromToken(request.cookies.token);
        response.status(200).json({ 
            msg: "Access granted",
            user: user
        });
    } catch (error) {
        response.status(500).json({ msg: "Error fetching profile" });
    }
});

// Sign out route
userRoute.post("/signout", signout);

// Protected route - requires authentication and admin role
userRoute.get("/admin", isAuth, isAutho(["admin"]), (request, response) => {
    response.status(200).json({ msg: "Admin access granted" });
});

module.exports = userRoute;

