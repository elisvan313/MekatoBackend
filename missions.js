const express=require('express');
const router = express.Router();
const data=require('./data');
router.get('/',async(req,res) =>{
    res.status(200).json({missions: data.missions})
});

router.post('/:id',async(req,res) => {
    
    const {id}=req.params;
    const found=data.missions.find(element => element.id===id);
    
    if (found!=undefined) {
        res.status(400).json({message:"Ya existe una mission con ese id"})
    }else if(req.body.name === "" || req.body.description === "" || req.body.level_reward == "" || req.body.level_requirement == "" || req.body.quest_giver_character === "")
    {
       res.status(400).json({message:"Falta algun campo por rellenar"})
    }else{
        const newMission={...req.body,id}
        data.missions.push(newMission)
        res.status(201).json(data)
    }
    
});

router.patch('/:id',async(req,res) => {

})

router.delete('/:id',async(req,res) => {
    const {id}=req.params;
    //revisar const found=data.missions.forEach(element,i => element.id===id);
    console.log(found);
    
    if (found==undefined) {
        res.status(400).json({message:"No existe una mision con ese id"})
    }else{
       //revisar  data.missions.slice()
    }

})

module.exports=router;