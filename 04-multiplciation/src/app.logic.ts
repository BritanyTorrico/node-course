import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";
// console.log(yarg);
const {b:base, l:limit, s:show} =yarg;
let outputMessage = "";
const heraderMessage = `====================================
tabla ${base}
====================================\n`;
if (show) {
  for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
  }
  outputMessage = heraderMessage + outputMessage;
  console.log(outputMessage);
}

// Guardar la tabla en un archivo de texto usando fs

const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });

fs.writeFile(`${outputPath}/tabla-del-${base}.txt`, outputMessage, (err) => {
  if (err) {
    console.error("Error al escribir el archivo:", err);
  } else {
    console.log("Archivo guardado exitosamente como tabla-del-5.txt");
  }
});
