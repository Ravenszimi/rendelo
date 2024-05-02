const express=require('express');
const router=express.Router();

const{paciensek,paciens, paciensUpdate, deletePaciens}=require('../controllers/paciensController');

router.get('/paciensek', paciensek);
router.get('/paciensek/:nev', paciens);
router.post('/paciensek/modosit/:allat_id', paciensUpdate);

router.delete('/paciensek/torles/:paciens_id', deletePaciens);

module.exports=router;