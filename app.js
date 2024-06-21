import express from "express"
import "dotenv/config";
import router from "./routes/reserva.routes.js";

const app = express();
const PORT = process.env.PORT;
const URL = process.env.HOST

// Middlewares
// TODO: Implementar middlewares

//app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.use('/api', router);


// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(PORT, () => console.log(`Server running in ${URL}:${PORT}`));