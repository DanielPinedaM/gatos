"use strict";
/* -- VALIDACIONES --

esto es la forma manual,
tambien puedo usar: https://express-validator.github.io/docs */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseDescription = (descriptionFromRequest) => {
    if (!isString(descriptionFromRequest)) {
        throw new Error('ERROR: la DESCRIPCION NO es un string');
    }
    return descriptionFromRequest;
};
const parseName = (nameFromRequest) => {
    if (!isString(nameFromRequest) || !isName(nameFromRequest)) {
        throw new Error('ERROR: el NOMBRE del gato tiene q ser Leo | Jasmine | Martha | Toby | Vienna | Joey | Mary');
    }
    return nameFromRequest;
};
const parseImageFileName = (ImageFileNameFromRequest) => {
    if (!isString(ImageFileNameFromRequest) || !isImageFileName(ImageFileNameFromRequest)) {
        throw new Error('ERROR: el ImageFileName tiene q ser leojpeg | jasminejpeg | marthajpeg | tobyjpeg | viennajpeg | joeyjpeg | maryjpeg');
    }
    return ImageFileNameFromRequest;
};
const isName = (param) => {
    return Object.values(types_1.Name).includes(param);
};
const parseGender = (genderFromRequest) => {
    if (!isString(genderFromRequest) || !isGender(genderFromRequest)) {
        throw new Error('ERROR: el GENERO del gato tiene q ser male | female');
    }
    return genderFromRequest;
};
const parseAge = (ageFromRequest) => {
    if (!isAge(ageFromRequest) || !isAge(ageFromRequest)) {
        throw new Error('ERROR: la EDAD tiene q ser un numero');
    }
    return ageFromRequest;
};
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const isImageFileName = (param) => {
    return Object.values(types_1.ImageFileName).includes(param);
};
// validar si el dato es un STRING
const isString = (string) => {
    return typeof string === 'string'; /* || string instanceof String */
};
const isAge = (number) => {
    return typeof number === 'number';
};
// Datos de entrada del usuario final q se guardan en un objeto {}
const toNewGatosEntry = (object) => {
    const newEntry = {
        description: parseDescription(object.description),
        name: parseName(object.name),
        gender: parseGender(object.gender),
        ImageFileName: parseImageFileName(object.ImageFileName),
        age: parseAge(object.age)
    };
    return newEntry;
};
exports.default = toNewGatosEntry;
