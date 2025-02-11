const express = require("express");
const cors = require("cors");
const cafeRoutes = require("./src/routes/cafeRouter.js");

const app = express();
const PORT = 2080;

app.use(cors());
app.use(express.json());

app.use ("/api", cafeRoutes);

app.get("/", (req, res) => {
    res.send("EUUUU AMOOOO BACKEND <3");
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});