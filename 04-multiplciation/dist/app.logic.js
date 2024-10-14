"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let outputMessage = "";
const base = 5;
const heraderMessage = `====================================
tabla
====================================\n`;
for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}
outputMessage = heraderMessage + outputMessage;
console.log(outputMessage);
// Guardar la tabla en un archivo de texto usando fs
const outputPath = `outputs`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFile(`${outputPath}/tabla-del-${base}.txt`, outputMessage, (err) => {
    if (err) {
        console.error("Error al escribir el archivo:", err);
    }
    else {
        console.log("Archivo guardado exitosamente como tabla-del-5.txt");
    }
});
