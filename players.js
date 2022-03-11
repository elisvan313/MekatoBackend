const express = require('express');
const router = express.Router();
const data = require('./data');

router.get('/', async(req, res) => {
    console.log(req.query)
        res.status(200).json({message: 'Success'})
});


router.post('/:id', async(req, res) => {
    console.log(req.query)
    res.status(200).json({message: data.players})


});


router.patch('/:id', async(req, res) => {
    console.log(req.query)
        res.status(200).json({message: 'Success'})
});

router.delete('/:id', async(req, res) => {
    console.log(req.query)
        res.status(200).json({message: 'Deleted'})
});



module.exports = router