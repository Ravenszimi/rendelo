const mysql = require('mysql');
const mysql_2 = require('mysql2/promise');

const conn=mysql.createConnection({
    user:"root",
    password:"",
    database:"rendelo"
});

const vizsgalatok=(req,res)=>{
    conn.query(`SELECT 
    fk.datum AS 'datum',
    a.nev AS 'allat_nev',
    o.nev AS 'orvos_nev',
    v.beviteloka AS 'bevitel_oka',
    v.megjegyzes AS 'vizsgalat_megjegyzes',
    v.idotartam AS 'idotartam',
    k.nev AS 'kezeles_nev',
    ar.ar AS 'osszeg',
    v.kovvizsgalat AS 'kov_vizsgalat'
    
FROM 
    vizsgalatok v
JOIN 
    allatok a ON v.alt_id = a.id
JOIN 
    orvosok o ON v.ovs_id = o.id
JOIN 
    felirt_kezelesek fk ON v.id = fk.vgt_id
JOIN 
    kezelesek k ON fk.kzs_id = k.id
JOIN 
    arak ar ON ar.kzs_id =k.id;`,(error,rows)=>{
        if(error){
            res.status(400).json(error);
        } else {
            res.status(200).json(rows);
        }
    })
}

const vizsgalatokDatumkozott=(req,res)=>{
    const kezdeti = req.params.kezdeti;
    const veg = req.params.veg;
    conn.query(`SELECT 
    fk.datum AS 'datum',
    a.nev AS 'allat_nev',
    o.nev AS 'orvos_nev',
    v.beviteloka AS 'bevitel_oka',
    v.megjegyzes AS 'vizsgalat_megjegyzes',
    v.idotartam AS 'idotartam',
    k.nev AS 'kezeles_nev',
    ar.ar AS 'osszeg',
    v.kovvizsgalat AS 'kov_vizsgalat'
    
FROM 
    vizsgalatok v
JOIN 
    allatok a ON v.alt_id = a.id
JOIN 
    orvosok o ON v.ovs_id = o.id
JOIN 
    felirt_kezelesek fk ON v.id = fk.vgt_id
JOIN 
    kezelesek k ON fk.kzs_id = k.id
JOIN 
    arak ar ON ar.kzs_id =k.id
WHERE datum BETWEEN "${kezdeti}" AND "${veg}";
    ;`,(error,rows)=>{
        if(error){
            res.status(400).json(error);
        } else {
            res.status(200).json(rows);
        }
    })
}

const addVizsgalat = async (req, res) => {

    const connAsync = await mysql_2.createConnection({
        user:"root",
        password:"",
        database:"rendelo"
    });

    //2 táblába rözítünk valamit
    //vizsgalatok ->  ovsid, alt id, beviteloka, megjegyzes, kovvizsgalat, idotartam
    // felirt kezelesek -> vgtid, kezelesek[], datum
    // req.body sample
    /*
        { 
            "ovs_id": 1, 
            "alt_id": 1, 
            "beviteloka": "Hasfájás", 
            "megjegyzes": "Ez nem jó", 
            "kovvizsgalat": "2024-12-12", 
            "idotartam": 30, 
            "kezelesek": [
                {
                    "value": 1,
                    "label": "Kisujjmutet"
                },
                {
                    "value": 2,
                    "label": "Nagylabujj"
                }
            ]
        }
    */

    const {ovs_id, alt_id, beviteloka, megjegyzes, kovvizsgalat, idotartam, kezelesek} = req.body;
    let datum = new Date();
    console.log(req.body);

    const vizsgalat = await connAsync.query(`INSERT INTO vizsgalatok (alt_id, ovs_id, beviteloka, megjegyzes, kovvizsgalat, idotartam) VALUES (${Number(alt_id)}, ${Number(ovs_id)}, "${beviteloka}", "${megjegyzes}", "${kovvizsgalat}", "${idotartam}")`);
    const vizsgalatId = vizsgalat[0].insertId;

    // annyi adatot veszunk fel a felirt kezelesekbe ahany kezeles ki van valasztva az oldalon
    kezelesek.forEach(async (kezeles) => {
        const ujkezeles = await connAsync.query(`INSERT INTO felirt_kezelesek (vgt_id, kzs_id, datum) VALUES ("${vizsgalatId}","${kezeles.value}","${datum.getFullYear()}-${datum.getMonth()}-${datum.getDay()}")`);
    });

   res.json({message: "Sikeres vizsgálatfelvitel!"});
}

module.exports = {
    vizsgalatok,
    addVizsgalat,
    vizsgalatokDatumkozott
}