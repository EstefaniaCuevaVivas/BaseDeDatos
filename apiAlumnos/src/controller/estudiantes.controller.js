
 const connection =  require( "../dataBase");

function getAlumno(request, response) {
  let sql;
  if (request.query.id_students == null) sql = "SELECT * FROM students";
  else sql = "SELECT nombre,surname,grupos_id,año_de_ingreso FROM students WHERE id_students = " + request.query.id_students;

  connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
    }
  });
}

function postAlumno(request, response) {
  console.log(request.body);
  let sql =
    "INSERT INTO students (nombre,surname,grupos_id,año_de_ingreso)" +
    "VALUES ('" +
    request.body.nombre +
    "','" +
    request.body.surname +
    "', '" +
    request.body.grupos_id +
    "', '" +
    request.body.año_de_ingreso +
    "')";

  console.log(sql);
  connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
      console.log(result);
      if (result) response.send(String(result));
      else response.send(-1);
    }
  });
}

function putAlumno(request, response) {

console.log(request.body);

let params =[request.body.nombre,request.body.surname,request.body.grupos_id,request.body.año_de_ingreso,request.body.id_students ]
  
     let sql =
    "UPDATE students SET nombre = COALESCE(?,nombre)," + 
    "surname = COALESCE (?,surname)," + "grupos_id = COALESCE(?,grupos_id)," + "año_de_ingreso= COALESCE(?,año_de_ingreso) WHERE id_students=?"; 
    console.log(sql); 
    connection.query(sql, params,function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}
    
function eliminarAlumno(request,response){
  let sql="DELETE FROM students WHERE id_students= " + request.body.id_students;
connection.query(sql,function(err,result){
  if(err)
  console.log(err);
  else{
    console.log("alumno eliminado")
    console.log(result)
    response.send(result);
  }
})
}


module.exports= {getAlumno,postAlumno,putAlumno,eliminarAlumno}

 


