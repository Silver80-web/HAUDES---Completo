require('dotenv').config();

const app = require('./app');
const db = require('./db')

const startServer = async () => {
    try{
        await db.getConnection();
        console.log("Connected to MySQL");

        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error(error);
    }
}

startServer();