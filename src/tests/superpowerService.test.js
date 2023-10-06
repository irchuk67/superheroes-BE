const mockingoose = require("mockingoose");
const Superpower = require("../models/Superpower")
const superpowerService = require("../services/superpowerService")
const mongoose = require("mongoose");

const id = "651f01948abcc32aa33cea01";
const _id = new mongoose.mongo.ObjectId(id);

const superpowerData = {
    name : "superpower"
}

const superpowerSaved = {
    ...superpowerData,
    _id
}

describe('superpowerService tests', () => {
    beforeAll(() => {
        mockingoose(Superpower)
            .toReturn(superpowerSaved, 'save')
            .toReturn(superpowerSaved, 'findOne')
            .toReturn(superpowerSaved, 'deleteOne')
            .toReturn([superpowerSaved], 'find')
    });

    it('should create superpower', async () => {
        let actual = await superpowerService.createSuperpower(superpowerData);

        expect(actual._doc).toEqual(superpowerSaved);
    });

    it('should get all superpowers', async () => {
        let actual = await superpowerService.getAllSuperpowers();

        expect(actual[0]._doc).toEqual(superpowerSaved);
    });

    it('should delete superpower by id', async () => {
        let actual = await superpowerService.deleteSuperpower(id);

        expect(actual).toEqual(superpowerSaved);
    });
});