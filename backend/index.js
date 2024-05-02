const express=require("express");
const cors=require("cors");
const mysql=  require('mysql2/promise');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',require('./routes/orvosRoutes'));
app.use('/',require('./routes/paciensRoutes'));
app.use('/',require('./routes/gazdaRoutes'));
app.use('/',require('./routes/kezelesarRoutes'));
app.use('/',require('./routes/vizsgalatRoutes'));
app.use('/',require('./routes/newPatientRoutes'));
app.use('/',require('./routes/patchRoutes'));
app.use('/', require('./routes/authRoutes'));

app.listen(8000,()=>{console.log("A szerver fut!")});

app.get('/',(req,res)=>{
    res.send("Állatorvosi rendelő backend");
});

app.post('/auth/login', async (req, res) => {

    const conn = await mysql.createConnection({
        host: 'localhost',
        user:"root",
        database:"rendelo"
    });

    let email = req.body.email;
	let jelszo = req.body.jelszo;
	// Ensure the input fields exists and are not empty
	if (email && jelszo) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
        const sql = `SELECT * FROM orvosok WHERE email = "${email}" AND jelszo = "${jelszo}"`;
		const [results] = await conn.query(sql);

        console.log(results[0].id);
	} else {
		res.json({message: 'Adja meg az email címét és jelszavát!'});
		res.end();
	}
});

app.get('/me', (req, res) => {
})