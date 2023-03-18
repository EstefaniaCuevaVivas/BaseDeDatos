const {Router} =  require ("express");
const router = Router();
const evaluacionCtrl = require("../controller/asignaturas-notas.controller")

router.get("/evaluacion/media",evaluacionCtrl.getMedia);
router.get("/evaluacion/apuntadas",evaluacionCtrl.getApuntadas);
router.get("/evaluacion/impartidas",evaluacionCtrl.getImpartidas);
router.get("/evaluacion/impartidas2",evaluacionCtrl.getImpartidas2);
router.get("/evaluacion/lista",evaluacionCtrl.getListaAsignaturas);

module.exports = router;