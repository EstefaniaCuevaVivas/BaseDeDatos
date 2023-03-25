const connection =  require( "../dataBase");


function getMedia(request,response)
{
  let media;
  media = "SELECT AVG (mark) FROM marks WHERE student_id =" + request.query.student_id;
  connection.query(media,function(err,result){
    if(err)
    console.log(err);
    else{
      console.log("media notas")
      console.log(result);
      response.send(result)
    }
  })

}


function getApuntadas(request, response) {
  if (request.query.id_students) {
    let listar = "SELECT nombre, surname, title FROM Escuela.students JOIN Escuela.marks ON (students.id_students = marks.student_id) JOIN Escuela.subjects ON (marks.subject_id = subjects.id_subjects) WHERE students.id_students = " + request.query.id_students;
    connection.query(listar, function (err, result) {
      if (err) {
        console.log(err);
        
      } else {
        console.log("total datos");
        console.log(result);
        response.send(result);
      }
    });
  } else {
    let listar = "SELECT nombre, surname, title FROM Escuela.students JOIN Escuela.marks ON (students.id_students = marks.student_id) JOIN Escuela.subjects ON (marks.subject_id = subjects.id_subjects)";
    connection.query(listar, function (err, result) {
      if (err) {
        console.log(err);
       
      } else {
        console.log("total datos");
        console.log(result);
        response.send(result);
      }
    });
  }
}



function getImpartidas(request,response)
{
  if(request.query.id_teachers){

    let listarProfes = "SELECT nombre_profes,surname,title FROM Escuela.teachers JOIN subject_teacher ON (teachers.id_teachers= subject_teacher.teacher_id) JOIN subjects ON( subject_teacher.subject_id = subjects.id_subjects) WHERE id_teachers =  " + request.query.id_teachers;
  connection.query(listarProfes,function(err,result){
    if(err)
    console.log(err);
    else{
      console.log("profesores y asignaturas por id")
      console.log(result);
      response.send(result);
    }
  })

  }else{

    let listaCompleta= "SELECT nombre_profes,surname,title FROM Escuela.teachers JOIN subject_teacher ON (teachers.id_teachers= subject_teacher.teacher_id) JOIN subjects ON( subject_teacher.subject_id = subjects.id_subjects)";
    connection.query(listaCompleta,function(err,result){
     if(err)
     console.log(err);
     else{
       console.log("profesores y asignaturas")
       console.log(result);
       response.send(result)
     }
   })

  }
  
}


module.exports ={getMedia,getApuntadas,getImpartidas}


