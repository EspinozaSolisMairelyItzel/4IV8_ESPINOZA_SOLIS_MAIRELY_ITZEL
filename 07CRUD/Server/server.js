const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: 'localhost', user: 'root', password: '121423', database: 'pnt_practica1',
  waitForConnections: true, connectionLimit: 10, queueLimit: 0
});
const db = pool.promise();

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json()); 

app.listen(PORT, () => console.log(`Servidor inicializado en el puerto: ${PORT}\nPara salir presiona ctrl + c`));