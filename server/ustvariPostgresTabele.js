/*
  Terminal -> New Terminal
  node backend/ustvariPostgresTabele.js.js 
*/
const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg')

//--------CONFIG ZA POVEZAVO PREKO URI-------

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  password: 'root',
  port: 4444
})

var sqlPoizvedba = fs.readFileSync(__dirname +'/baza.sql').toString();

//---Testna POVEZAVA in IZVRŠITEV baza.sql----

pool.connect(function(err, client, done){
    if(err){
        console.log('error: ', err);
        process.exit(1);
    }
    client.query(sqlPoizvedba, function(err, result){
        done();
        if(err){
            console.log('error: ', err);
            process.exit(1);
        }
        process.exit(0); 
    });
});
