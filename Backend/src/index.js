import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});
const startServer = async () => {
    try{await connectDB();

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on port:
            ${process.env.PORT}`);
    })
}
catch (error) {
    console.log("MONGODB connection failed !!!", error);
}
}
startServer();
/*import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectDB();

        const server = app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });

        server.on("error", (error) => {
            console.log("SERVER ERROR", error);
            process.exit(1);
        });
    } catch (error) {
        console.log("Startup failed!", error);
        process.exit(1);
    }
};

startServer();*/