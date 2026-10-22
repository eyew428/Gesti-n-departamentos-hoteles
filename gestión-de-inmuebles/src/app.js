import express from "express";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
console-log(`${req.method} ${req.url}`);
next();
})

export default app;