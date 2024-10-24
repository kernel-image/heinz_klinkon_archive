import {query, validationResult } from 'express-validator'
import { pool } from '../config/db.js'


function screenQuery (req, res, next){
    const query = req.query
    if (query && Object.keys(query).length > 0) {
        console.log(query)
    }
    else{
        //console.log("no query")
        return res.end();
    }
    next();
}

function validateQuery (req, res, next){
    const valid = [query('search').optional({ values: "falsey"}).trim().matches(/^[\w\s,.?!-']+$/i).withMessage('no special characters allowed')];
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    if (Object.keys(req.query).length > 0 && req.query.search === undefined){
        return res.status(400).send("search is required");
    }
    //console.log("validated query")
    next();
}

function handleQuery (req, res, next){
    if (!pool || !pool.options.database) {
        throw new Error("no connection to database");
    }
    //console.log(`connected to ${pool.options.database} database on ${pool.options.host}:${pool.options.port} as ${pool.options.user}`)
    const queryCopy = {...req.query};
    const search = queryCopy.search.trim().toLowerCase(); //assuming table values are lowercase for case insensitivity
    const table = "works";
    pool.query(`SELECT filename AS "id", title, year, medium FROM ${table} 
    WHERE (title LIKE '%${search}%') OR (year LIKE '%${search}%') OR (medium LIKE '%${search}%') OR (filename LIKE '%${search}%')`, 
    (err, result) => {
        if (err) {
          throw new Error(err);
        } else {
          req.queryResults = result.rows
          next();
        }
    });
}

function formatResults (req, res, next){
    const queryResults = req.queryResults.map((element) => {
        //uppercase first letter of each word
        element.title = element.title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        //enforce filename in lowercase
        element.id = element.id.toLowerCase();
        return element
    })
    res.json(queryResults);
    next();
}


export { screenQuery, validateQuery, handleQuery, formatResults }