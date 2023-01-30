"use strict";
/* -- TIPOS DE DATOS -- */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFileName = exports.Gender = exports.Name = void 0;
// Nombres de los gatos
var Name;
(function (Name) {
    Name["Leo"] = "Leo";
    Name["Jasmine"] = "Jasmine";
    Name["Martha"] = "Martha";
    Name["Toby"] = "Toby";
    Name["Vienna"] = "Vienna";
    Name["Joey"] = "Joey";
    Name["Mary"] = "Mary";
})(Name = exports.Name || (exports.Name = {}));
// Genero de los gatos
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
// Nombre imagenes de los gatos
// export type ImageFileName = 'leo.jpeg | jasmine.jpeg | martha.jpeg | toby.jpeg | vienna.jpeg | joey.jpeg | mary.jpeg'
var ImageFileName;
(function (ImageFileName) {
    ImageFileName["leojpeg"] = "leojpeg";
    ImageFileName["jasminejpeg"] = "jasminejpeg";
    ImageFileName["marthajpeg"] = "marthajpeg";
    ImageFileName["tobyjpeg"] = "tobyjpeg";
    ImageFileName["viennajpeg"] = "joeyjpeg";
    ImageFileName["joeyjpeg"] = "joeyjpegy";
    ImageFileName["maryjpeg"] = "maryjpeg";
})(ImageFileName = exports.ImageFileName || (exports.ImageFileName = {}));
