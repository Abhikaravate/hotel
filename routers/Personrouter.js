const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async function(req , res )
{
 try {

    const data = req.body;

    const newPerson = new Person(data);
    /*
    newPerson.name = data.name;
    newPerson.age = data.age;
    newPerson.work =data.work;
    newPerson.mobile =data.mobile;
    newPerson.email =data.email;
    newPerson.address =data.address;
    newPerson.salary =data.salary
    */
    const responce = await newPerson.save();
    console.log('data Saved');
    res.status(200).json(responce);
    
 } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
    
 }
});

// to get data from database 
router.get('/' , async function(req , res) {
    try {
        const data = await Person.find();
        console.log('Data fatched');
        res.status(200).json(data);

        
    } catch (err) {
        console.log(err);
        res.status(500).json({err: 'Internal Server Error'});
        
    }
   
});

router.get('/:workType' , async function(req , res) {
    try
     {
        const workType = req.params.workType;
        if (workType=='chef' || workType=='manager' || workType=='waiter' ) {
            
            const responce = await Person.find({work: workType});
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

router.put('/person/:id', async (req, res) => {
    try {
    const personId = req.params.id; // Extract the person's ID from the URL parameter
    const updatedPersonData = req.body; // Updated data for the person
    // Assuming you have a Person model
    const updatedPerson = await
    Person.findByIdAndUpdate(personId, updatedPersonData, {
    new: true, // Return the updated document
    runValidators: true, // Run Mongoose validation
    });
    if (!updatedPerson) {
    return res.status(404).json({ error: 'Person not found'
    });
    }
    // Send the updated person data as a JSON response
    res.json(updatedPerson);
    } catch (error) {
    console.error('Error updating person:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    });

    router.delete('/person/:id', async (req, res) => {
        try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        // Assuming you have a Person model
        const deletedPerson = await Person.findByIdAndRemove(personId);
        if (!deletedPerson) {
        return res.status(404).json({ error: 'Person not found' });
        }
        // Send a success message as a JSON response
        res.json({ message: 'Person deleted successfully' });
        } catch (error) {
        console.error('Error deleting person:', error);
        res.status(500).json({ error: 'Internal server error' });
        }
        })


module.exports = router;