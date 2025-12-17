const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const createAdmin = async () => {
    try {
        // Connect to database
        const url = process.env.URL;
        await mongoose.connect(url);
        console.log("Connected to MongoDB Atlas successfully.");

        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: "admin@goldentouch.com" });
        if (existingAdmin) {
            console.log("Admin user already exists!");
            console.log("Email: admin@goldentouch.com");
            console.log("You can update the password or create a different admin account.");
            await mongoose.disconnect();
            return;
        }

        // Create admin user
        const adminUser = new User({
            name: "Admin",
            email: "admin@goldentouch.com",
            password: "admin123", // Change this password!
            role: "admin"
        });

        await adminUser.save();
        console.log("Admin user created successfully!");
        console.log("Email: admin@goldentouch.com");
        console.log("Password: admin123");
        console.log("\n⚠️  IMPORTANT: Please change the password after first login!");

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("Error creating admin user:", error);
        await mongoose.disconnect();
        process.exit(1);
    }
};

createAdmin();


