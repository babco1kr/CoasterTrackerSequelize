var db = require("../models");

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        db.Coaster.findAll({}).then(function(data) {
            let object = {
                coasters: data
            };
            res.render("index", object);
        })
    })

    app.put("/api/coasters/:id", function (req, res){
        console.log(req.body.rode);
        db.Coaster.update({
            rode: req.body.rode
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(data){
            if (data.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    })

    app.post("/api/coasters", function(req, res) {
        db.Coaster.create({
            coaster_name: req.body.name
        }).then(function(data) {
            res.json({id: data.insertId});
        })
    })
}