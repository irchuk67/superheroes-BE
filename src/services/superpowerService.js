const mongoose = require('mongoose');
const Superpower = mongoose.model('Superpower');

function createSuperpower (newSuperpower){
    const superpowerToCreate = new Superpower(newSuperpower);
    return superpowerToCreate.save();
}

function getAllSuperpowers(){
    return Superpower.find();
}

function deleteSuperpower(superpowerId){
    return Superpower.findById(superpowerId).then(
        response => {
            console.log(response);
            if(!response) return null;
            else {
                return Superpower.deleteOne(response)
                    .catch(err => console.log(err))
            }
        }
    )
}

module.exports = {
    createSuperpower,
    getAllSuperpowers,
    deleteSuperpower
}