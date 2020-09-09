// add path to DB config 

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const brcypt = require('bcryptjs');
const sesh = require('express-session')
const authRouter = require('../auth/auth-router.js')
const knexSessionConnect = require('connect-session-knex')


const knexSessionStore = knexSessionConnect(sesh)

const sessionConfig = {
    name: 'seshcookie', // name of cookie 
    secret: "my secret",
    cookies: {
        maxAge: 1000 * 500, // life of cookie 
        server: false, // true production . Makes it so only can use HTTPs or not 
        http: true, // cookie cannot be accesses with javactip 

    },
    resave: false, // recreates session if not save 
    saveUninitialized: false, // legalal compliance , true on production 
    store: new knexSessionStore({ // saves cookie acceessiability info 

    	// add db config file path here 
        knex: require( DB config),
        // 
        tablename: "sessions",
        createtable: true,
        clearInterval: 1000 * 100 * 100
    })
}


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(sesh(sessionConfig))


server.use('/api', authRouter)

server.get("/", (req, res) => {
    res.json({
        api: "working"
    });
});

module.exports = server;
