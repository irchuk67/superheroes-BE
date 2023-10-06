const mockingoose = require("mockingoose");
const Superhero = require("../models/Superhero")
const superheroService = require("../services/superheroService")
const mongoose = require("mongoose");

const id = "651f01948abcc32aa33cea01";
const _id = new mongoose.mongo.ObjectId(id);
const superheroData = {
    nickname: "superhero",
    real_name: "real name",
    origin_description: "description",
    superpowers: ["power1", "power2"],
    catch_phrase: "catch",
    images: ["image1", "image2"]
}

const superheroSaved = {
    ...superheroData,
    _id
}

describe('superheroService tests', () => {
    beforeAll(() => {
        mockingoose(Superhero)
            .toReturn(superheroSaved, 'save')
            .toReturn(superheroSaved, 'findOne')
            .toReturn(superheroSaved, 'deleteOne')
            .toReturn([superheroSaved], 'find')
    });

    it('should create superhero', async () => {
        let actual = await superheroService.createSuperhero(superheroData);

        expect(actual._doc).toEqual(superheroSaved);
    });

    it('should get superhero by id', async () => {
        let actual = await superheroService.getSuperheroById(id);

        expect(actual._doc).toEqual(superheroSaved);
    });

    it('should update superhero by id', async () => {
        let actual = await superheroService.getSuperheroById(id, superheroData);

        expect(actual._doc).toEqual(superheroSaved);
    });

    it('should delete superhero by id', async () => {
        let actual = await superheroService.deleteSuperhero(id);

        expect(actual).toEqual(superheroSaved);
    });

    it('should get superheroes', async () => {
        let actual = await superheroService.getAllSuperheroes(0);

        expect(actual[0]._doc).toEqual(superheroSaved);
    });
});