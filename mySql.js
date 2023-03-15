const mysql= require("mysql2");
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "31388113",
    data:"Escuela"


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


// let insertar="INSERT INTO Escuela.direccion (calle,numero,provincia,cp) VALUES (\"santo angel\",\"4\",\"Madrid\",\"28040\")";
// connection.query(insertar,function(err,result){
//   if(err)
//   console.log(err);
//   else{
//     console.log("tabla")
//     console.log(result);
//   }
// })

// let sql="ALTER table Escuela.direccion ADD COLUMN cp INT";
// connection.query(sql,function(err,result){
//   if(err)
//   console.log(err);
//   else{
//     console.log("columna insertada")
//     console.log(result);
//   }
// })


// let eliminarColumn="ALTER TABLE Escuela.direccion DROP COLUMN provincia;";
// connection.query(eliminarColumn,function(err,result){
//   if(err)
//   console.log(err);
//   else{
//     console.log("columna eliminada")
//     console.log(result);
//   }
// })

// let eliminarPermanentemente="DROP TABLE Escuela.direccion";
// connection.query(eliminarPermanentemente,function(err,result){
//   if(err)
//   console.log(err);
//   else{
//     console.log("tabla eliminada")
//     console.log(result);
//   }
// })

// let modificar = "UPDATE Escuela.marks SET mark = 0";
// connection.query(modificar,function(err,result){
//     if(err)
//     console.log(err);
//     else{
//       console.log("notas modificadas")
//       console.log(result);
//     }
//   })


//   let mostrar= "SELECT name,surname FROM Escuela.students";
//   connection.query(mostrar,function(err,result){
//     if(err)
//     console.log(err);
//     else{
//       console.log("mostrar datos")
//       console.log(result);
//     }
//   })

//   let mostrarProfes= "SELECT id_teachers,name,surname FROM Escuela.teachers";
//   connection.query(mostrarProfes,function(err,result){
//     if(err)
//     console.log(err);
//     else{
//       console.log("mostrar datos")
//       console.log(result);
//     }
//   })

// let eliminarNotas = "DELETE FROM Escuela.marks Where date < '2013-01-01'"
// connection.query(eliminarNotas,function(err,result){
//   if(err)
//   console.log(err);
//   else{
//     console.log("eliminar notas")
//     console.log(result);
//   }
// })

let modificar = "UPDATE Escuela.marks SET mark = 5 WHERE mark < 5";
connection.query(modificar,function(err,result){
    if(err)
    console.log(err);
    else{
      console.log("notas modificadas")
      console.log(result);
    }
  })