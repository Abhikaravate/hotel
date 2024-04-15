const express = require('express');
const router = express.Router();
const menuItems = require('./../models/menuItems');


//get method for menu 
router.get('/', async (req , res) =>{
    try {
        const data = await menuItems.find();
        res.status(201).json(data);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({err: 'Internal Server Error'});
        
    }

})

router.post('/',async (req , res)=>{
    try {
        const data = req.body;
       const newMenu = new menuItems(data);
       const responce = await newMenu.save();
       console.log('data Saved');
       res.status(200).json(responce);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({err: 'Internal Server Error'});    
    }
});

router.get('/:tasteType' , async function(req , res) {
    try
     {
        const tasteType = req.params.tasteType;
        if (tasteType=='Sweet' || tasteType=='Spicy' || tasteType=='Sour' ) {
            
            const responce = await menuItems.find({taste: tasteType});
            console.log('responce fetched ');
            res.status(200).json(responce);
        } else {

              res.status(400).json({err: 'Invalid Error'});
        }
     } catch (error) {
        console.log(err);
        res.status(500).json({err: 'Internal Server Error'});
        
     }
});
module.exports = router;