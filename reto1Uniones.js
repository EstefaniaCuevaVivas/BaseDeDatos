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

// let reto1="SELECT nombre,surname,title FROM Escuela.students JOIN Escuela.grupos ON (students.grupos_id = grupos.id_grupos) JOIN Escuela.subject_teacher ON (grupos.id_grupos= subject_teacher.group_id) JOIN Escuela.subjects ON( subject_teacher.group_id = subjects.id_subjects)";
// connection.query(reto1,function(err,result){
//     if(err)
//     console.log(err);
//     else{
//       console.log("tabla")
//       console.log(result);
//     }
//   })

  // let reto2 = "SELECT nombre_profes,surname,title FROM Escuela.teachers JOIN Escuela.subject_teacher ON (teachers.id_teachers = subject_teacher.teacher_id) JOIN Escuela.subjects ON(subjects.id_subjects = subjects.id_subjects);"
  // connection.query(reto2,function(err,result){
  //   if(err)
  //   console.log(err);
  //   else{
  //     console.log("tabla")
  //     console.log(result);
  //   }
  // })


//  let reto3 = "SELECT title ,nombre_profes,teachers.surname ,COUNT(Escuela.students.id_students) AS total_alumnos FROM Escuela.students  JOIN Escuela.grupos ON (students.grupos_id = grupos.id_grupos)JOIN Escuela.subject_teacher ON (  grupos.id_grupos = subject_teacher.group_id )JOIN Escuela.teachers ON(subject_teacher.group_id = teachers.id_teachers)JOIN Escuela.subjects ON (teachers.id_teachers = subjects.id_subjects) GROUP BY Escuela.subjects.id_subjects"
//  connection.query(reto3,function(err,result){
//     if(err)
//     console.log(err);
//     else{
//       console.log("tabla")
//       console.log(result);
//     }
//   }) 


  