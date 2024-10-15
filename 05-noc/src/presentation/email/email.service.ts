import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogEntity, LogServerityLevel } from "../../domain/entities/log.entity";

interface SendMailoptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}

export class EmailService {
  constructor() {}

  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendMailoptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;
    try {
      // const sentInformation = await this.transporter.sendMail({
      //   to,
      //   subject,
      //   html: htmlBody,
      //   attachments,
      // });

      // Crear el log y guardarlo
      const log = new LogEntity({
        level: LogServerityLevel.low,
        message: "Email sent",
        origin: "email.service.ts",
      });


      return true;
    } catch (error) {

      const log = new LogEntity({
        level: LogServerityLevel.high,
        message: "Email not sent",
        origin: "email.service.ts",
      });

      return false;
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]){
    const subject = "Logs del servidor";
    const htmlBody = `<h3>Logs de sistema - NOC</h3> <p>Hola Bri, te mando los logs del servidor...</p>`;
    const attachments: Attachment[] = [
      { filename: "logs-all.log", path: "./logs/logs-all.log" },
      { filename: "logs-high.log", path: "./logs/logs-high.log" },
    ];

    await this.sendEmail({ to, subject, attachments, htmlBody }); // Llamada await a sendEmail
  }
}
