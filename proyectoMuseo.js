const mysql= require("mysql2");
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "31388113",
    data:"museo"


  }
);


connection.connect(function(error){
  if (error)
  {
    console.log("NO SE CONECTA")
  }
  else
    console.log("Se conecta");
})

let param=['prestamo']
let reto1Museo="SELECT nombre_piezas, ubicacion,fecha_devolucion , nombre_propietario , apellido_propietario , email FROM museo.piezas JOIN museo.estados ON (piezas.id_estado = estados.tipos_estados) JOIN museo.propietarios ON (estados.tipos_estados = propietarios.id_propietarios) WHERE museo.estados.tipos_estados = ?";
connection.query(reto1Museo,param,function(err,result){
  if(err)
  console.log(err);
  else{
    console.log("tabla")
    console.log(result);
  }
}) 


let reto2Museo= "SELECT id_piezas,museo.estados.tipos_estados, COUNT(*) AS total FROM museo.piezas JOIN museo.estados ON (piezas.id_estado = estados.id_estados) GROUP BY estados.tipos_estados ORDER BY total DESC" ;

connection.query(reto2Museo,function(err,result){
  if(err)
  console.log(err);
  else{
    console.log("tabla")
    console.log(result);
  }
}) 
