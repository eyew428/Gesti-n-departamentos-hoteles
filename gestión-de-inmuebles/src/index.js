import app from "./app.js";
const PORT = 3000

function bootstrang () {
app.listen(PORT, () => {
    console.log(`"Escuchando en http://localhost:${PORT}"`);
});
}

bootstrang();