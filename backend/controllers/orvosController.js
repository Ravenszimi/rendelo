const mysql=require('mysql');
const conn=mysql.createConnection({
    user:"root",
    password:"",
    database:"rendelo"
});

const orvosok=(req,res)=>{
    conn.query("select * from orvosok where status = 'aktiv' order by nev",(error,rows)=>{
        if(error){
            res.status(400).json(error);
        } else {
            res.status(200).json(rows);
        }
    })
}

const orvos=(req,res)=>{
    const nev = req.params.nev;
    conn.query("select * from orvosok where REPLACE(LOWER(nev),' ','')=REPLACE(LOWER(?),' ','')",[nev],(error,rows)=>{
        if(error){
            res.status(400).json(error);
        } else {
            if(rows.length <=0 ){
                res.json({message: "Nincs ilyen nevű orvos!"})
            } else {
                res.status(200).json(rows[0])
            }
            
        }
    })
}

const orvosUpdate = (req, res) => {
    const orvos_id = req.params.orvos_id;
    const{nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam,azonositoszam,felhasznalonev}=req.body;

    if(!nev || !telefonszam || !email || !iranyitoszam || !helysegnev || !terulettipus || !hazszam || !adoszam || !teruletnev || !azonositoszam || !felhasznalonev){
        res.json({message:'Hiányzó adatok'});
        return;
    }
    // update allatok table 
    const sql = `
        UPDATE orvosok 
        SET 
            nev = "${nev}", 
            telefonszam = "${telefonszam}", 
            email = "${email}" ,
            iranyitoszam = ${iranyitoszam}, 
            helysegnev = "${helysegnev}", 
            terulettipus = "${terulettipus}", 
            hazszam = ${hazszam}, 
            adoszam = "${adoszam}", 
            teruletnev = "${teruletnev}", 
            azonositoszam = "${azonositoszam}",
            felhasznalonev = "${felhasznalonev}"
        WHERE id = ${orvos_id}
    `
    conn.query(sql, (err, result) => {
        if(err) {
            res.json({message: err.message});
        } else {
            res.json({message: "Sikeres módosítás"});
        }
    });
}

const deleteOrvos = (req, res) => {
    const orvosId = req.params.orvos_id;
    const sql = `update orvosok set status = "passive" where id = ${orvosId}`;
    conn.query(sql, (err, result) => {
        if(err){
            res.json({message: err.message});
        }else {
            res.json({message: "Sikeres törlés!"});
        }
    });
}

module.exports={
    orvosok,
    orvos,
    orvosUpdate,
    deleteOrvos
}