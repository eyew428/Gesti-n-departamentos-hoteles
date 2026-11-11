import express from "express";
import { router as inmueblesRouter } from "./routes/inmueblesRouter.js";
import { clientesRouter} from "./routes/clientesRouter.js";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();
app.use(cors({
    origin: "http://localhost:5173", credentials: true
}));
app.use(cookieParser());


app.use(express.json());

let contador = 1;
app.use((req, res, next) => {
const fecha = new Date().toISOString();
console.log(`[${fecha}] petición número: ${contador}${req.method} ${req.url}`);
contador++;
next();
});

app.use("/inmuebles", inmueblesRouter);
app.use("/cliente", clientesRouter);

app.get("/", (req, res) => {
    console.log("Hola mundo");
    res.send("API");
});

app.get("/", (req, res) => {
    res.json({
        code: 0,
        status: "ok",
    })

})

export default app;