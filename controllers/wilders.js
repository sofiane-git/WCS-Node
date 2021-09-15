const WilderModel = require("../models/Wilder");

module.exports= {
    create: (req, res) => {
        // console.log(req.body)
        let wilder = new WilderModel({
            name: req.body.name,
            city: req.body.city,
            skills: req.body.skills
        })
        wilder
            .save()
            .then((result) => {
                res.json({ success: true, result: result })
            })
            .catch((err) => {
                res.json({ success: false, result: err })
            });
        
    },

    update: (req, res) => {
        WilderModel.updateOne({ id: req.body._id }, req.body)
            .then( result => {
                if(!result) res.json({ succes: false, result: "No such wilder exists" })
                res.json(wilder)
            })
            .catch( err => {
                res.json({ success: false, result: err })
            })
    },

    retrieve: (req, res) => {
        WilderModel.find()
            .then( result => {
                if (!result) res.json({ success: false, result: "No wilder found" })
                res.json({ success: true, result: result })
            })
            .catch(err => {
                res.json({ succes: false, result: err })
            })
    },

    delete: (req, res) => {
        WilderModel.remove({ _id: req.body._id })
            .then(result => {
                if (!result) res.json({ succes: false, result: "No wilder with such ID was found" })
                res.json({ succes: true, result: result })
            })
            .catch(err => res.json({ success:false, result: err }))
    }
};