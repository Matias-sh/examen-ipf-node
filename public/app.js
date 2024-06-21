import Express from "express"
import "dotenv/config"

const app = Express();
const PORT = process.env.PORT;

app.listen(PORT);

console.log(PORT);