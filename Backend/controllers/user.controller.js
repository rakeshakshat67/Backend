import { User } from "../models/user.model.js";
const registerUser = async (req, res) => {
try {
    const { username, password, email } = req.body;
    // basic validation
    if (!username || !password || !email) {
        return res.status(400).json({ message: "All fields are required" });
    }
    // check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return res.status(400).json({ message: "Username or email already exists" });
    }const user = await User.create({
        username,
        password,
        email: email.toLowerCase(),
        loggedIn: false,
    });
    res.status(201).json({ message: "User registered successfully",
        user:{ user_id: user._id, email: user.email, username: user.username } });
}catch(error) {
    res.status(400).json({ message: "Error registering user", error: error.message });
}
}
export { registerUser };