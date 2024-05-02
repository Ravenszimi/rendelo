const mysql=require('mysql');
const conn = mysql.createConnection({
    user:"root",
    password:"",
    database:"rendelo"
});

const kezelesarak=(req,res)=>{
    conn.query("select kezelesek.id, kezelesek.nev, arak.ar, arak.kezdetidatum, vegdatum from kezelesek JOIN arak ON kezelesek.id=arak.kzs_id ORDER BY kezelesek.nev",(error,rows)=>{
        if(error){
            res.status(400).json(error);
        } else {
            res.status(200).json(rows);
        }
    });
}


module.exports={
    kezelesarak
}