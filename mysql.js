const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: "",
    database:'banca',
})

conection.connect( (err)=>{
    if(err) throw err
    console.log('La conexion funciona')
})

const insertar =
"INSERT INTO reg_usu (IdRusu,usuar,contra,tipo_rol) VALUES ('1', 'SoniaSalas', 'Sonia123', 'Asesor')";
conection.query(insertar, (err, rows) =>{
    if(err) throw err;
});

conection.query("SELECT * from reg_usu", (err, rows)=>{
    if(err) throw err;
    console.log("Los datos de la tabla son: ");
    console.log(rows);
    console.log("La cantidad de resultado es: ");
    console.log(rows.lenght);
});


conection.end();

