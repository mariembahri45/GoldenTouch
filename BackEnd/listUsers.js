const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const listUsers = async () => {
    try {
        // Connect to database
        const url = process.env.URL;
        await mongoose.connect(url);
        console.log("Connected to MongoDB Atlas successfully.\n");

        // Get all users
        const users = await User.find().select('name email role -_id');
        
        if (users && users.length > 0) {
            console.log("=== All Users in Database ===\n");
            users.forEach((user, index) => {
                console.log(`${index + 1}. Name: ${user.name}`);
                console.log(`   Email: ${user.email}`);
                console.log(`   Role: ${user.role}`);
                console.log("");
            });
        } else {
            console.log("No users found in the database.");
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("Error listing users:", error);
        await mongoose.disconnect();
        process.exit(1);
    }
};

listUsers();


