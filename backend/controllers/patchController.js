const mysql=require('mysql');
const conn=mysql.createConnection({
    user:"root",
    password:"",
    database:"rendelo"
});

const patchGazda=(req,res)=>{
    const{nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam,id}=req.body;
    console.log(req.body)
    conn.query("UPDATE gazdak SET nev=?, telefonszam=?, email=?, iranyitoszam=?, helysegnev=?, teruletnev=?, terulettipus=?, hazszam=?, adoszam=? WHERE id=?"
    ,[nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam,id]
    ,(error)=>{
        if(error){
            res.status(500).send(error);
        } else {
            res.status(200).json({message: "Gazda adatai módosítva!"});
        }
    });

}

module.exports={
    patchGazda
}