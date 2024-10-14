const fs = require("fs");
const content = fs.readFileSync("README.md", "utf8");
const words = content.split(/\s+/);
const wordCount = words.length;
// const reactWordCount = words.filter(
//   (word) => word.toLowerCase() === "react"
// ).length;

const reactWordCount = words.filter(
    (word) => word.toLowerCase().includes('react')
  ).length;
  
const reactWordCount2 = content.match(/react/gi ?? []).length  // expresion regular
console.log("Palabras:", wordCount);
console.log("Palabras React:", reactWordCount); //Case insensitive MAYUS / MINUS
console.log("Palabras React2:", reactWordCount2); //Case insensitive MAYUS / MINUS
