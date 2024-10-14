import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server.app";
// console.log(process.argv);
// console.log(yarg.b);

//funcion auto invocada  para ejecutar codigo asincrono en la aplicacion
(async () => {
  await main();
  console.log("fin");
  
})();

async function main() {
  const{b: base, l:limit, s :show, n: name, d: destination} =yarg;
    console.log(yarg);
    
  ServerApp.run({base, limit, show,name,destination});
    }
