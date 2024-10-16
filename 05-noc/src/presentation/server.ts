import { CheckService } from "../domain/user-cases/checks/check-service";
import { CronService } from "./cron/cron-service";
import { LogRepository } from "../domain/repository/log.repository";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { envs } from "../config/plugins/envs.plugin";
import { EmailService } from './email/email.service';
import { SendEmailLogs } from "../domain/user-cases/logs/email/send-email-logs";

//Aqui se cambia facilmente el repositort con otro datasource
const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
);

const emailService = new EmailService();
export class Server {
  public static start() {
    console.log("server started.....");


  //  new SendEmailLogs(emailService,fileSystemLogRepository).execute(['torricobritany2@gmail.com','201800149@est.umss.edu'])
     //!referencia para enviar correos electronico con los logs
    // const emailService = new EmailService(fileSystemLogRepository);
    // emailService.sendEmailWithFileSystemLogs(['torricobritany2@gmail.com','201800149@est.umss.edu'])


    //!referencia para enviar correos electronico
    // const emailService = new EmailService();
    // emailService.sendEmailWithFileSystemLogs(['torricobritany2@gmail.com']);
    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = 'https://google.com';
    //   // const url =  'http://localhost:3000/posts'
    //  new CheckService(
    //   fileSystemLogRepository,
    //   ()=> console.log(`${url} is ok`),
    //   (error) => console.log(error),
    //  ).execute(url);
    // });
  }
}

Server.start();
