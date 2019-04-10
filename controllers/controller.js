// Requires coaster js model and sets up express and express router
var coasters = require("../models/coaster.js");
var express = require("express");
var router = express.Router();

// This route calls the select all coaster orm
router.get("/", function(req, res) {
    coasters.ridden(function(data) {
        let object = {
            coasters: data
        };
        res.render("index", object);
    })
})

// This route calls the update coaster orm
router.put("/api/coasters/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    coasters.update(
        "rode", req.body.rode,
     condition, function(results) {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// This route calls the create coaster orm
router.post("/api/coasters", function(req, res) {
    coasters.insertOne("coaster_name", req.body.name, function(results) {
        res.json({id: results.insertId});
    })
})


module.exports = router;