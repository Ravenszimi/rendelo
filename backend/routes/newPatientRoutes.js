const express=require('express');
const router=express.Router();

const{postGazda,postPaciens,postVizsgalat,postOrvos}=require('../controllers/newPatientController');

router.post('/ujgazdaadat',postGazda);
router.post('/ujpaciensadat',postPaciens);
router.post('/ujvizsgalatadat',postVizsgalat);
router.post('/ujorvosadat',postOrvos);

module.exports=router;