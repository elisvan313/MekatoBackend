const express = require('express');
const router = express.Router();
const data = require('./data');

router.get('/', async(req, res) => {
    console.log(req.query)
        res.status(200).json({message: 'Success'})
});


router.post('/:id', async(req, res) => {
  const {id} = req.params;
  const found=data.players.filter(element => element===id);
  console.log(found);
  if(found!==''){
      res.status(400).json({message:'Ya existe un player con este id'})
  }else{
      const newplayer ={...req.body, id};
      data.players.push(newplayer);
      res.status(200).json({message: data.players})
  }


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