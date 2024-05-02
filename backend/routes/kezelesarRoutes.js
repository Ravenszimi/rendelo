const express=require('express');
const router=express.Router();

const{kezelesarak}=require('../controllers/kezelesarController');

router.get('/kezelesarak',kezelesarak);

module.exports=router;