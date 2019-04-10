// Requires connection file
var connection = require("../config/connection.js");

// Base orm that can work on any databse when called upon
var orm = {
    selectAll: function (table, cb) {
        connection.query("select * from ??", table , function(err, res) {
           if (err) throw err;
           cb(res); 
        })
    },
    insertOne: function (table, cols, vals, cb) {
        var queryURL = "insert into " + table + " (" + cols.toString() + ") values (?)";
        connection.query(queryURL, vals, function(err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    updateOne: function (table, colName, colVal, condition, cb) {
        var queryURL = "update " + table +  " set " + colName + " = " + colVal + " where " + condition + "";
        connection.query(queryURL, function(err, res) {
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;