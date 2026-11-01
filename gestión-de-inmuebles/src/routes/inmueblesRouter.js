import express from "express";
import { getInmuebles, getInmueble } from "../controllers/inmueblesController.js";

const router = express.Router();
router.get("/", getInmuebles);
router.get("/:id", getInmueble);

export { router };