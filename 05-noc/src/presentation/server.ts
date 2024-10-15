import { CheckService } from "../domain/user-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log("server started...");

    // Corregir cronTime: Ejecutar cada 5 segundos
    CronService.createJob("*/5 * * * * *", () => {
      const url = 'https://google.com';
     new CheckService(
      ()=> console.log(`${url} is ok`),
      (error) => console.log(error)
     ).execute(url);
    //  new CheckService().execute('http://localhost:3000/posts');

    });

  
  }
}

Server.start();
