const express=require('express');
const router=express.Router();

const{vizsgalatok, addVizsgalat, vizsgalatokDatumkozott}=require('../controllers/vizsgalatController');

router.get('/vizsgalatok',vizsgalatok);
router.post('/ujvizsgalat', addVizsgalat);

router.get('/vizsgalatok/kezdeti/:kezdeti/vege/:veg', vizsgalatokDatumkozott);


module.exports=router;