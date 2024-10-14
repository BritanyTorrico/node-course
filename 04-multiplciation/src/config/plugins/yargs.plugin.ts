import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(process.argv)
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication table abse",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "show multiplication table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: 'multiplication-table',
    describe: "file name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: 'outputs',
    describe: "file destination",
  })
 
  .check((argv, options) => {
    console.log({ argv, options });

    if (argv.b < 1) throw "La base tiene que der mayor a cero";
    return true;
  })
  .parseSync();
