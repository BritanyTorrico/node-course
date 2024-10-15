import { CheckService } from "../domain/user-cases/checks/check-service";
import { CronService } from "./cron/cron-service";
import { LogRepository } from '../domain/repository/log.repository';
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";

//Aqui se cambia facilmente el repositort con otro datasource 
const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
) 

export class Server {
  public static start() {
    console.log("server started...");

    // Corregir cronTime: Ejecutar cada 5 segundos
    CronService.createJob("*/5 * * * * *", () => {
      // const url = 'https://google.com';
      const url =  'http://localhost:3000/posts'

     
     new CheckService(
      fileSystemLogRepository,
      ()=> console.log(`${url} is ok`),
      (error) => console.log(error),
     ).execute(url);
    //  new CheckService().execute('http://localhost:3000/posts');

    });

  
  }
}

Server.start();
