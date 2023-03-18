const express = require ("express");
const cors = require("cors");
const estudiantesRouters = require ("./routers/estudiantes.routers");
const errorHandling = require("./error/errorHandling")
const evaluacionRouters = require("./routers/asignaturas-notas.routers")


const app = express();

app.set("port",process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(estudiantesRouters);
app.use(evaluacionRouters);
app.use(function(req,res,next)
{
  res.status(404).json({error:true,
                        codigo:404,
                        message: "endpoint doesnt found"})
})

app.use(errorHandling);

module.exports = app
