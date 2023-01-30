/* -- VALIDACIONES --

esto es la forma manual,
tambien puedo usar: https://express-validator.github.io/docs */

import { NewGatosEntry, Name, Gender, ImageFileName } from './types'

const parseDescription = (descriptionFromRequest: any): string => {
  if (!isString(descriptionFromRequest)) {
    throw new Error('ERROR: la DESCRIPCION NO es un string')
  }

  return descriptionFromRequest
}

const parseName = (nameFromRequest: any): Name => {
  if (!isString(nameFromRequest) || !isName(nameFromRequest)) {
    throw new Error('ERROR: el NOMBRE del gato tiene q ser Leo | Jasmine | Martha | Toby | Vienna | Joey | Mary')
  }

  return nameFromRequest
}

const parseImageFileName = (ImageFileNameFromRequest: any): ImageFileName => {
  if (!isString(ImageFileNameFromRequest) || !isImageFileName(ImageFileNameFromRequest)) {
    throw new Error('ERROR: el ImageFileName tiene q ser leojpeg | jasminejpeg | marthajpeg | tobyjpeg | viennajpeg | joeyjpeg | maryjpeg')
  }

  return ImageFileNameFromRequest
}

const isName = (param: any): boolean => {
  return Object.values(Name).includes(param)
}

const parseGender = (genderFromRequest: any): Gender => {
  if (!isString(genderFromRequest) || !isGender(genderFromRequest)) {
    throw new Error('ERROR: el GENERO del gato tiene q ser male | female')
  }

  return genderFromRequest
}

const parseAge = (ageFromRequest: any): number => {
  if (!isAge(ageFromRequest) || !isAge(ageFromRequest)) {
    throw new Error('ERROR: la EDAD tiene q ser un numero')
  }

  return ageFromRequest
}

const isGender = (param: any): boolean => {
  return Object.values(Gender).includes(param)
}

const isImageFileName = (param: any): boolean => {
  return Object.values(ImageFileName).includes(param)
}

// validar si el dato es un STRING
const isString = (string: string): boolean => {
  return typeof string === 'string' /* || string instanceof String */
}

const isAge = (number: number): boolean => {
  return typeof number === 'number'
}

// Datos de entrada del usuario final q se guardan en un objeto {}
const toNewGatosEntry = (object: any): NewGatosEntry => {
  const newEntry: NewGatosEntry = {
    description: parseDescription(object.description),
    name: parseName(object.name),
    gender: parseGender(object.gender),
    ImageFileName: parseImageFileName(object.ImageFileName),
    age: parseAge(object.age)
  }

  return newEntry
}

export default toNewGatosEntry
