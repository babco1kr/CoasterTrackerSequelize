var orm = require("../config/orm.js");


var coasters = {
    ridden: function(cb) {
        orm.selectAll("coasters", function(res) {
            cb(res)
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("coasters", cols, vals, function(res) {
            cb(res);
        })
    },
    update: function(colName, colVal, condition, cb) {
        orm.updateOne("coasters", colName, colVal, condition, function(res) {
          cb(res);
        });
      }
}

module.exports = coasters;
