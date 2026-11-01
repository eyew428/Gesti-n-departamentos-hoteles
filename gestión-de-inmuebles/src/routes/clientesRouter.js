import express from "express";
import { createCliente, login, logout } from "../controllers/clientesController.js";
import { autenticar } from "../middleware/auth.middleware.js";

const clienteRouter = express.Router();

clienteRouter.post("/", autenticar, createCliente);

clienteRouter.post("/login",login)

clienteRouter.post("/logout",logout)



export { clienteRouter as clientesRouter };