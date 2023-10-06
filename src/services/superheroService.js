const mongoose = require("mongoose");
const Superhero = mongoose.model("Superhero");

function createSuperhero(superheroData) {
    console.log(superheroData);
    const superhero = new Superhero(superheroData);
    return superhero.save();
}

function getAllSuperheroes(pageNumber) {
    return Superhero
        .find({})
        .limit(5)
        .skip(5 * pageNumber);
}

function countAllSuperheroes() {
    return Superhero.countDocuments({});
}

function getSuperheroById(id) {
    return Superhero.findById(id);
}

function deleteSuperhero(id) {
    return Superhero.findById(id).then(
        response => {
            if (!response) return null;
            else {
                return Superhero.deleteOne(response);
            }
        }
    )
}

function updateSuperhero(id, updatedSuperheroData) {
    console.log(updatedSuperheroData)
    return Superhero.findById(id).then(
        superhero => {
            if (!superhero) return null;

            superhero.nickname = updatedSuperheroData.nickname;
            superhero.real_name = updatedSuperheroData.real_name;
            superhero.origin_description = updatedSuperheroData.origin_description;
            superhero.superpowers = updatedSuperheroData.superpowers;
            superhero.catch_phrase = updatedSuperheroData.catch_phrase;
            superhero.images = updatedSuperheroData.images;

            return superhero.save();
        }
    )
}

module.exports = {
    createSuperhero,
    getAllSuperheroes,
    deleteSuperhero,
    updateSuperhero,
    getSuperheroById,
    countAllSuperheroes
}