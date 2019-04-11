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

    app.put("api/coasters/:id", function (req, res))
}