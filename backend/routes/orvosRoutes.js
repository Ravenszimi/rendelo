const express=require('express');
const router=express.Router();

const{orvosok, orvos, orvosUpdate, deleteOrvos}=require('../controllers/orvosController');

router.get('/orvosok', orvosok);
router.get('/orvosok/:nev', orvos);
router.post('/orvosok/modosit/:orvos_id', orvosUpdate);

router.delete('/orvosok/torles/:orvos_id', deleteOrvos);

module.exports=router;