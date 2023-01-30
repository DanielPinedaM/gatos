/* -- TIPOS DE DATOS -- */

// Nombres de los gatos
export enum Name {
  Leo = 'Leo',
  Jasmine = 'Jasmine',
  Martha = 'Martha',
  Toby = 'Toby',
  Vienna = 'Vienna',
  Joey = 'Joey',
  Mary = 'Mary'
}

// Genero de los gatos
export enum Gender {
  male = 'male',
  female = 'female'
}

// Nombre imagenes de los gatos
// export type ImageFileName = 'leo.jpeg | jasmine.jpeg | martha.jpeg | toby.jpeg | vienna.jpeg | joey.jpeg | mary.jpeg'
export enum ImageFileName {
  leojpeg = 'leojpeg',
  jasminejpeg = 'jasminejpeg',
  marthajpeg = 'marthajpeg',
  tobyjpeg = 'tobyjpeg',
  viennajpeg = 'joeyjpeg',
  joeyjpeg = 'joeyjpegy',
  maryjpeg = 'maryjpeg'
}

/* interface permite agregar nuevos tipos de datos,
cada vez q creo una nueva interfaz se van agregando los tipos de datos,
usar cuando quiero modificar los tipos de datos

type es para asignar un tipo de dato a una variable en especifico,
usar cuando los tipos de datos NO cambien

{
    "id": 0,
    "name": "Leo",
    "gender": "male",
    "ImageFileName": "leo.jpeg",
    "description": "Leo is a supercute boy who really wants his forever home for Christmas. He is quite a chilled cat and is used to people and other cats. Come and meet Leo and give him the loving home he is yearning for.",
    "age": 10
}, */

// TODOS los datos
export interface gatosEntry {
  'id': number
  'name': Name
  'gender': Gender
  'ImageFileName': ImageFileName
  'description': string
  'age': number
}

// todos los datos EXCEPTO "description":
/* export type NonSensitiveInfoGatosEntry = Omit<gatosEntry, 'description'> */

// todos los datos EXCEPTO "id": porq el ID es auto-incrementable
export type NewGatosEntry = Omit<gatosEntry, 'id'>
