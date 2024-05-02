const jwt = require('jsonwebtoken');
const mysql=  require('mysql2/promise');

const protect= async (req,res,next)=>{
    let token;
    //console.log(req.headers);

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            const conn = await mysql.createConnection({
                host: 'localhost',
                user:"root",
                database:"rendelo"
            });

            token=req.headers.authorization.split(' ')[1];
            console.log(token);
            const idFromtoken=jwt.verify(token,process.env.JWT_SECRET);
            console.log(idFromtoken);
            const sql = `SELECT * FROM orvosok WHERE id = ${idFromtoken}`;
            const [results] = await conn.query(sql);
            delete results[0].jelszo;
            req.user = results[0];
            console.log(req.user);  
            next();
            
        } catch (error) {
            res.json({message: "Be kell jelentkezni!!!"});
        }
       

    }
    if(!token){
        res.json({message: "Hitelesítetlen felhasználó!"});
    }
};

module.exports={protect};