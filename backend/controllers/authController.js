const jwt = require('jsonwebtoken');
const mysql_2 = require('mysql2/promise');

const generateToken=(id)=>{
    return jwt.sign({id},"szupertitkostitok",{expiresIn:"1d"});
}

const login = async (req, res) => {
    const connAsync = await mysql_2.createConnection({
        user:"root",
        password:"",
        database:"rendelo"
    });
    const {email, jelszo} = req.body;
    if(!email || !jelszo){
        res.json({message: "Hiányzó adatok!"});
        return;
    }

    // login logic
    const user = await connAsync.query(`SELECT * FROM orvosok WHERE email = "${email}"`);
    if(!user[0][0]){
        res.json({message: "A felhasználó nem található!"});
        return;
    
    }
    console.log(user[0][0].jelszo)
    if(user[0][0].jelszo !== jelszo){
        res.json({message: "Nem megfelelő jelszó!"});
        return;
    }

    const token = generateToken(user[0][0].id);
    res.status(200).json({message: "Sikeres bejelentkezés!", token});
}

module.exports = {
    login
}