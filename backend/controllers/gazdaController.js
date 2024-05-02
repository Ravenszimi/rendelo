const mysql=require('mysql');
const conn=mysql.createConnection({
    user:"root",
    password:"",
    database:"rendelo"
});

const mysql2 = require('mysql2/promise');

const gazdak=(req,res)=>{
    let gazdakAllatokkal = [];
    conn.query(`SELECT * FROM gazdak where status = "aktiv"`, 
    async (err, rows) => {
        if(err){
            res.json(err);
        } else {
            const conn = await mysql2.createConnection({
                host: 'localhost',
                user:"root",
                database:"rendelo"
            });
            for (let i = 0; i < rows.length; i++) {
                const gazda = rows[i];
                const sql = `SELECT * FROM allatok WHERE id = ${gazda.id}`;
                const [results] = await conn.query(sql);
                gazda.allatok = results;
                gazdakAllatokkal.push(gazda);
            }
            res.json(gazdakAllatokkal);
        }
    }
);
}



const gazda=(req,res)=>{
    const nev = req.params.nev;
    conn.query("select * from gazdak where REPLACE(LOWER(nev),' ','')=REPLACE(LOWER(?),' ','')",[nev],(error,rows)=>{
        if(error){
            res.status(400).json(error);
        } else {
            if(rows.length <=0 ){
                res.json({message: "Nincs ilyen nevű gazda!"})
            } else {
                res.status(200).json(rows[0])
            }
            
        }
    })
}

// const getGazdaById = (req, res) => {
//     const gazda = req.params.id;
//     conn.query(`SELECT * FROM gazdak where )
// }

const gazdaUpdate = (req, res) => {
    const gazda_id = req.params.gazda_id;
    const{nev,telefonszam,email,iranyitoszam,helysegnev,teruletnev,terulettipus,hazszam,adoszam}=req.body;

    if(!nev || !telefonszam || !email || !iranyitoszam || !helysegnev || !terulettipus || !hazszam || !adoszam || !teruletnev){
        res.json({message:'Hiányzó adatok'});
        return;
    }
    // update allatok table 
    const sql = `
        UPDATE gazdak 
        SET nev = "${nev}", telefonszam = "${telefonszam}", email = "${email}" ,iranyitoszam = ${iranyitoszam}, helysegnev = "${helysegnev}", terulettipus = "${terulettipus}", hazszam = ${hazszam}, adoszam = "${adoszam}", teruletnev = "${teruletnev}" 
        WHERE id = ${gazda_id}
    `
    conn.query(sql, (err, result) => {
        if(err) {
            res.json({message: err.message});
        } else {
            res.json({message: "Sikeres módosítás"});
        }
    });
}

const deleteGazda = (req, res) => {
    const gazdaId = req.params.gazda_id;
    const sql = `update gazdak set status = "passive" where id = ${gazdaId}`;
    conn.query(sql, (err, result) => {
        if(err){
            res.json({message: err.message});
        }else {
            res.json({message: "Sikeres törlés!"});
        }
    });
}

module.exports = {
    gazdak,
    gazda,
    gazdaUpdate,
    deleteGazda
}