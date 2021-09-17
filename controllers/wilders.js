const WilderModel = require("../models/Wilder");

module.exports= {
    create: async (req, res) => {
        // console.log(req.body)
        try {
            const wilder = new WilderModel({
                name: req.body.name,
                city: req.body.city,
                skills: req.body.skills
            })
            const result = await wilder.save()
            res.json({ success: true, result: result })
        } catch (err) {
            res.json({ success: false, result: err })
        }
        
    },

    update: async (req, res) => {
        // WilderModel.updateOne({ id: req.body._id }, req.body)
        //     .then( result => {
        //         if(!result) res.json({ succes: false, result: "No such wilder exists" })
        //         res.json(wilder)
        //     })
        //     .catch( err => {
        //         res.json({ success: false, result: err })
        //     })
        try {
            const result = await WilderModel.findByIdAndUpdate( req.body._id , req.body)
            if(!result) res.json({ succes: false, result: "No such wilder exists" })
            res.json(result)
        } catch (err) {
            res.json({ success: false, result: err })
        }
    },

    retrieve: async (req, res) => {
        // WilderModel.find()
        //     .then( result => {
        //         if (!result) res.json({ success: false, result: "No wilder found" })
        //         res.json({ success: true, result: result })
        //     })
        //     .catch(err => {
        //         res.json({ succes: false, result: err })
        //     })
        try {
            const result = await WilderModel.find()
            console.log(result)
            if (!result) res.json({ success: false, result: "No wilder found" })
            res.json({ success: true, result: result })
        } catch (err) {
            res.json({ succes: false, result: err })
        }
    },

    delete: async (req, res) => {
        // WilderModel.remove({ _id: req.body._id })
        //     .then(result => {
        //         if (!result) res.json({ succes: false, result: "No wilder with such ID was found" })
        //         res.json({ succes: true, result: result })
        //     })
        //     .catch(err => res.json({ success:false, result: err }))
        try {
            const result = await WilderModel.remove({ _id: req.body._id })
            if (!result) res.json({ succes: false, result: "No wilder with such ID was found" })
            res.json({ succes: true, result: result })
        } catch (err) {
            res.json({ success:false, result: err })
        }
    }
};