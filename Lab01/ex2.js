'use strict'

const sqlite = require('sqlite3')
const db = new sqlite.Database("numbers.sqlite", (err) => {
    if(err){
        throw err
    }
})

db.all("select * from number",(err, rows) => {
    if(err){
        throw err
    }
    else{
        for(const row of rows){
            console.log(row.num)
        }
    }
})

db.close()