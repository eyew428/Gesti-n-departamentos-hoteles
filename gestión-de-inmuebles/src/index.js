import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./bin/prisma.js";

const PORT = process.env.PORT || 3000;
connectDB

function bootstrang () {
app.listen(PORT, () => {
    console.log(`"Escuchando en http://localhost:${PORT}"`);
});
}

bootstrang();