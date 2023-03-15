const mysql= require("mysql2");
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "31388113",
    data:"Escuela"


  }
);

  let media = "SELECT AVG (mark) as media FROM Escuela.marks WHERE subject_id = 1;";
  connection.query(media,function(err,result){
    if(err)
    console.log(err);
    else{
      console.log("media datos")
      console.log(result);
    }
  })

  let totalAlumnos = "SELECT COUNT(*) AS total_alumnos FROM Escuela.students";
  connection.query(totalAlumnos,function(err,result){
    if(err)
    console.log(err);
    else{
      console.log("total alumnos")
      console.log(result);
    }
  })


  let listar = "SELECT * FROM Escuela.groups;";
  connection.query(listar,function(err,result){
    if(err)
    console.log(err);
    else{
      console.log("total datos groups")
      console.log(result);
    }
  })

  let eliminarNotas= "DELETE FROM Escuela.marks WHERE mark > 5 AND (date < '2021-12-01' AND date <'2023-01-01')";
  connection.query(eliminarNotas,function(err,result){
    if(err)
    console.log(err);
    else{
      console.log("eliminar notas")
      console.log(result);
    }
  })

//   let sql="ALTER table Escuela.students ADD COLUMN año_de_ingreso INT";
// connection.query(sql,function(err,result){
//   if(err)
//   console.log(err);
//   else{
//     console.log("columna insertada")
//     console.log(result);
//   }
// })



//   let mostrar= "SELECT * FROM Escuela.students WHERE año_de_ingreso BETWEEN '2022-12-01' and '2024-01-01';";
//   connection.query(mostrar,function(err,result){
//     if(err)
//     console.log(err);
//     else{
//       console.log("mostrar datos")
//       console.log(result);
//     }
//   })

//  let calcular = "SELECT subject_id, count(teacher_id) AS profesores_por_asignatura FROM Escuela.subject_teacher group by subject_id";
//  connection.query(calcular,function(err,result){
//       if(err)
//       console.log(err);
//       else{
//         console.log("profesores con asignaturas")
//         console.log(result);
//       }
//     })

// let nota = "SELECT student_id, mark FROM Escuela.marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND (mark BETWEEN  '2021 - 01 - 01' AND '2021-12-01'))";
// connection.query(nota,function(err,result){
//         if(err)
//         console.log(err);
//         else{
//           console.log("profesores con asignaturas")
//           console.log(result);
//         }
//       })

      let media2 = "SELECT AVG (mark) AS media,subject_id  FROM Escuela.marks WHERE (date BETWEEN '2022-01-01' AND  '2022-12-31') GROUP BY subject_id";
      connection.query(media2,function(err,result){
        if(err)
        console.log(err);
        else{
          console.log("media datos")
          console.log(result);
        }
      })

      let media3 = "SELECT AVG (mark) AS media,student_id  FROM Escuela.marks WHERE (date BETWEEN '2022-01-01' AND  '2022-12-31') GROUP BY student_id";
      connection.query(media3,function(err,result){
        if(err)
        console.log(err);
        else{
          console.log("media datos")
          console.log(result);
        }
      })
