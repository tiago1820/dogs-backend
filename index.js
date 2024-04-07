const { server } = require("./src/app");
const {conn} = require("./src/db");
const dotenv = require("dotenv");
dotenv.config();
const { SERVER_PORT } = process.env;
server.listen(SERVER_PORT, async () => {
    console.log(`Listening on port ${SERVER_PORT}`);
});