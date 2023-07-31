const express = require('express');
const Model = require('../model/model');

const router = express.Router();

module.exports = router;

router.get('/', async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json(data)
    }
    catch (e) {
        res.send({ error: "error while getting" + e.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const datatoAdd = new Model({
            name: req.body.name,
            company: req.body.company,
            status: req.body.status,
            lastUpdated: req.body.lastUpdated,
            notes: req.body.notes
        })
        const addedData = await datatoAdd.save();
        const updatedData = await Model.find();
        res.status(200).json(updatedData);
    }
    catch (e) {
        res.send({ error: "error while adding" + e.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const deleted = await Model.findByIdAndRemove({ _id: req.params.id })
        const updatedData = await Model.find();
        res.status(200).send(updatedData)
    }
    catch (e) {
        res.send({ error: "error while deleting" + e.message })
    }
})
