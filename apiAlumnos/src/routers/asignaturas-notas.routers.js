const {Router} =  require ("express");
const router = Router();
const evaluacionCtrl = require("../controller/asignaturas-notas.controller")

router.get("/media",evaluacionCtrl.getMedia);
router.get("/apuntadas",evaluacionCtrl.getApuntadas);
router.get("/impartidas",evaluacionCtrl.getImpartidas);

module.exports = router;