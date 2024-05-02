const express=require('express');
const router=express.Router();

const{gazdak,gazda, gazdaUpdate, deleteGazda}=require('../controllers/gazdaController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/gazdak', gazdak);
router.get('/gazdak/:nev', gazda);
router.post('/gazdak/modosit/:gazda_id', gazdaUpdate);

router.delete('/gazdak/torles/:gazda_id', deleteGazda);


module.exports=router;