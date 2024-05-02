const mysql=require('mysql');
const conn=mysql.createConnection({
    user:"root",
    password:"",
    database:"rendelo"
});

const mysql2=  require('mysql2/promise');

const paciensek=(req,res)=>{
    conn.query(`SELECT a.id, g.nev as gazdanev, a.nev, a.faj, a.kg, a.nem, a.kor, a.utolsovizsgalat, a.megjegyzes
    FROM allatok a, gazdak g
    WHERE a.gda_id = g.id and a.status = "aktiv"
    ORDER BY a.nev`,(error,rows)=>{
        if(error){
            res.status(400).json(error);
        } else {
            res.status(200).json(rows);
        }
    })
}

const paciens=(req,res)=>{
    const nev = req.params.nev;
    conn.query(`select a.id, g.nev as gazdanev, a.nev, a.faj, a.kg, a.nem, a.kor, a.utolsovizsgalat, a.megjegyzes
     from allatok a, gazdak g 
     where  a.gda_id = g.id AND REPLACE(LOWER(a.nev),' ','')=REPLACE(LOWER(?),' ','')`,[nev],(error,rows)=>{
        if(error){
            res.status(400).json(error);
        } else {
            if(rows.length <=0 ){
                res.json({message: "Nincs ilyen nevű páciens!"})
            } else {
                res.status(200).json(rows[0])
            }
            
        }
    })
}

const paciensUpdate = (req, res) => {
    const allat_id = req.params.allat_id
    const{nev,faj,kg,nem,kor,utolsovizsgalat,megjegyzes} = req.body;
    console.log(req.body)

    if(!nev || !faj || !kg || !nem || !kor || !utolsovizsgalat || !megjegyzes){
        res.json({message:'Hiányzó adatok'});
        return;
    }
    // update allatok table 
    const sql = `
        UPDATE allatok 
        SET nev = "${nev}", faj = "${faj}", nem = "${nem}" ,kor = ${Number(kor)}, kg = ${Number(kg)}, utolsovizsgalat = "${utolsovizsgalat}", megjegyzes = "${megjegyzes}"
        WHERE id = ${allat_id}
    `
    console.log(sql);
    conn.query(sql, (err, result) => {
        if(err) {
            res.json({message: err.message});
        } else {
            res.json({message: "Sikeres módosítás"});
        }
    });
}

const deletePaciens = (req, res) => {
    const paciensId = req.params.paciens_id;
    const sql = `update allatok set status = "passive" where id = ${paciensId}`;
    conn.query(sql, (err, result) => {
        if(err){
            res.json({message: err.message});
        }else {
            res.json({message: "Sikeres törlés!"});
        }
    });
}


module.exports={
    paciensek,
    paciens,
    paciensUpdate,
    deletePaciens
}