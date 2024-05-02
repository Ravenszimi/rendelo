const express=require('express');
const router=express.Router();

const{patchGazda}=require('../controllers/patchController');

router.get('/modositasGazda', patchGazda);


module.exports=router;