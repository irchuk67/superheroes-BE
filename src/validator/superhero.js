const { body, validationResult} = require('express-validator')

const superheroValidator = (method) => {
    switch (method) {
        case 'createSuperhero':
        case 'updateSuperhero': {
            return [
                body('nickname', 'nickname doesn`t exists').exists().notEmpty(),
                body('real_name', 'real_name doesn`t exists').exists().notEmpty(),
                body('origin_description', 'origin_description doesn`t exists').exists().notEmpty(),
                body('superpowers', 'superpowers don`t exist').isArray().notEmpty(),
                body('catch_phrase', 'catch_phrase doesn`t exists').exists().notEmpty(),
                body('images', 'images don`t exist').isArray().notEmpty(),
            ]
        }
    }
}

const validateSuperhero = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return false;
    }

    return true;
}

module.exports = {
    superheroValidator,
    validateSuperhero
}