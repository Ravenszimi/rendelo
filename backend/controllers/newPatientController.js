const mysql=require('mysql');
const conn=mysql.createConnection({
    user:"root",
    password:"",
    database:"rendelo"
});

const postGazda=(req,res)=>{
    const{nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam}=req.body;
    console.log(req.body)
    conn.query("INSERT INTO gazdak (nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam) values(?,?,?,?,?,?,?,?,?)"
    ,[nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam]
    ,(error, result)=>{
        if(error){
            res.status(500).send(error);
        } else {
            res.status(201).json({message: "Új gazda hozzáadva az adatbázishoz!", id: result.insertId});
        }
    });

}

const postPaciens=(req,res)=>{
    const{gda_id,nev,faj,kg,nem,kor,utolsovizsgalat,megjegyzes}=req.body;
    console.log(req.body)
    conn.query("INSERT INTO allatok (gda_id,nev,faj,kg,nem,kor,utolsovizsgalat,megjegyzes) values(?,?,?,?,?,?,?,?)"
    ,[gda_id,nev,faj,kg,nem,kor,utolsovizsgalat,megjegyzes]
    ,(error, result)=>{
        if(error){
            res.status(500).send(error);
        } else {
            res.status(201).json({message: "Új állat hozzáadva az adatbázishoz!", allatId: result.insertId});
        }
    });

}

const postVizsgalat=(req,res)=>{
    const{alt_id,ovs_id,beviteloka,megjegyzes,kovvizsgalat,idotartam}=req.body;
    conn.query("INSERT INTO vizsgalatok (alt_id,ovs_id,beviteloka,megjegyzes,kovvizsgalat,idotartam) values(?,?,?,?,?,?)"
    ,[alt_id,ovs_id,beviteloka,megjegyzes,kovvizsgalat,idotartam]
    ,(error)=>{
        if(error){
            res.status(500).send(error);
        } else {
            res.status(201).json({message: "Új vizsgálat hozzáadva az adatbázishoz!"});
        }
    });

}

const postOrvos=(req,res)=>{
    const{nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam,azonositoszam,felhasznalonev,jelszo}=req.body;
    conn.query("INSERT INTO orvosok (nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam,azonositoszam,felhasznalonev,jelszo) values(?,?,?,?,?,?,?,?,?,?,?,?)"
    ,[nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam,azonositoszam,felhasznalonev,jelszo]
    ,error=>{
        if(error){
            res.status(500).json({message: error.message});
        } else {
            res.status(201).json({message: "Új orvos hozzáadva az adatbázishoz!"})
        }
    });

}
module.exports={
    postGazda,
    postPaciens,
    postVizsgalat,
    postOrvos
}