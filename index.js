import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });
const app = express();

//Conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

//Definir puerto
//variables de entorno process.env.PORT
let host = process.env.HOST || "0.0.0.0";
let port = process.env.PORT || 8080;

//HABILITAR PUG
app.set("view engine", "pug");

//Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();

  //console.log(req);
  next();
});

// Agregar body parser para leer los datos del formulario

app.use(express.urlencoded({ extended: true }));

//Definir la carpeta publica
app.use(express.static("public"));

//agregar router
app.use("/", router);

app.listen(port, host, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
