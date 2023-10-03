const express = require('express');
const {createSuperhero, getAllSuperheroes, deleteSuperhero, updateSuperhero, getSuperheroById} = require("../../services/superheroService");
const {NOT_FOUND, CREATED, OK, NO_CONTENT} = require("../../constants/HTTPCodes");
const router = express.Router();


//crud full + get all, get by id
router.get('/', async (req, res) => {
    const superheroes = await getAllSuperheroes();
    if (!superheroes) {
        res.status(NOT_FOUND).send('no Superheroes found')
    } else {
        res.status(OK).json(superheroes)
    }
})

router.get('/:superheroId', async (req, res) => {
    const superhero = await getSuperheroById(req.params.superheroId);
    if (!superhero) {
        res.status(NOT_FOUND).send('no Superhero found')
    } else {
        res.status(OK).json(superhero)
    }
})

router.delete('/:superheroId', async (req, res) => {
    const isDeleted = await deleteSuperhero(req.params.superheroId);
    if (!isDeleted) {
        res.status(NOT_FOUND).send('no Superhero found')
    } else {
        res.status(NO_CONTENT).send('superhero successfully deleted')
    }
})
router.use(express.json());

router.post('/', async (req, res) => {
    const newSuperhero = await createSuperhero(req.body);
    if (!newSuperhero) {
        res.status(NOT_FOUND).send('no Superhero created')
    } else {
        res.status(CREATED).json(newSuperhero)
    }
});

router.put('/:superheroId', async (req, res) => {
    const updatedSuperhero = await updateSuperhero(req.params.superheroId, req.body);
    if(!updatedSuperhero){
        res.status(NOT_FOUND).send('no Superhero created')
    }else {
        res.status(OK).json(updatedSuperhero);
    }
})


module.exports = router;