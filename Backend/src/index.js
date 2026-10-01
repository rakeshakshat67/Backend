import dotenv from 'dotenv';
dotenv.config({
    path: `./.env`
});
const startServer = async () => {
    try{await connectDB;

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