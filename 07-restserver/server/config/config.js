// ============================
// Puerto
// ============================

process.env.PORT = process.env.PORT || 3000;

//============================
// Entorno
//============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//============================
// Base de datos
//============================
let urlDB;
if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
     urlDB = 'mongodb+srv://strider:i7s5c$DWw^&Sqg@cluster0.qrin6.mongodb.net/cafe';
}
process.env.URLDB = urlDB;


