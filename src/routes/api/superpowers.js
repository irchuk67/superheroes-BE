const express = require('express');
const {createSuperpower, getAllSuperpowers, deleteSuperpower} = require("../../services/superpowerService");
const {validateSuperhero} = require("../../validator/superhero");
const router = express.Router();


//post, get all, delete by id
const superpowers = ["dsdjk", "kdlsjkj"];

router.get('/', async (req, res) => {
    const superpowers = await getAllSuperpowers();

    if(!superpowers){
        res.status(404).send("no superpowers found")
    }else{
        res.status(200).json(superpowers)
    }
})

router.delete('/:superpowerId', async (req, res) => {
    const isDeleted = await deleteSuperpower(req.params.superpowerId);
    if(!isDeleted){
        res.status(404).send("no superpower found")
    }else{
        res.status(204).send("deleted successfully")
    }
})

router.use(express.json());

router.post('/', async (req, res) => {
    console.log(req.body);

    const newSuperpower = await createSuperpower(req.body);

    if (!newSuperpower){
        res.status(404).send("no superpower created")
    }else{
        res.status(201).json(newSuperpower)
    }
})

module.exports = router;
