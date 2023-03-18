const {Router} =  require ("express");
const router = Router();

const studentsCtrl = require("../controller/estudiantes.controller")

router.get("/estudiantes",studentsCtrl.getAlumno);
router.post("/estudiantes",studentsCtrl.postAlumno);
router.put("/estudiantes",studentsCtrl.putAlumno);
router.delete("/estudiantes",studentsCtrl.eliminarAlumno);

module.exports = router;