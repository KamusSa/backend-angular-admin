/**
 * Se crea servidor que reciba peticiones o Rest
 */
// import express from 'express'
require('dotenv').config();

const express = require('express');
const cors = require('cors')


const { dbConnection } = require('./database/config');

// Se crea el servidor
const app = express();
app.use(cors())
dbConnection();

app.listen(process.env.PORT, () => {

    // Rutas
    app.get('/', (req, res) => {

        res.json({ 
            ok: true,
            msg: 'Hola desde Node' 
        });
    })

    console.log('Servidor corriendo en puerto: ' + process.env.PORT);
})

