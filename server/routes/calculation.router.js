const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET calculation
 */
router.get('/', (req, res) => {
    const queryString = `Select * from "calculation" ORDER BY "id" DESC LIMIT 10;`;
    pool.query(queryString)
    .then((result)=>{
        res.send(result.rows)
    })
    .catch(error=>{
        console.log('Error getting calculations from database:', error)
        res.sendStatus(500);
    })
});

/**
 * POST calculation
 */
router.post('/', (req, res) => {
    const queryString = `INSERT INTO "calculation" ("calculation") VALUES ($1);`;
    pool.query(queryString, [req.body.calculation])
    .then(result=>{
        res.sendStatus(201)
    })
    .catch(error=>{
        console.log('Error posting calculation to database:', error)
        res.sendStatus(500);
    })
});


module.exports = router;