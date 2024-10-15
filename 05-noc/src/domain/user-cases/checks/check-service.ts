import { error } from "console";
import { LogRepository } from "../../repository/log.repository";
import {
  LogEntity,
  LogEntityOptions,
  LogServerityLevel,
} from "../../entities/log.entity";

interface CheckServiceUsaCase {
  execute(url: string): Promise<boolean>;
}


type SuccessCallback = (() => void) | undefined;

type ErrorCallback = ((error: string) => void) | undefined;

export class CheckService implements CheckServiceUsaCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly susccessCallbak: SuccessCallback,
    private readonly errorCallbak: ErrorCallback
  ) {}
  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on check service ${url}`);
      }
      const log = new LogEntity({
        message: `service ${url} was working`,
        level: LogServerityLevel.low,
        origin: "check-service.ts",
      });
      this.logRepository.saveLog(log);
      this.susccessCallbak && this.susccessCallbak();
      return true;

    } catch (error) {
      
      const errorMessage = `${url} is not ok. ${error}`;
      const log = new LogEntity({
        message: errorMessage,
        level: LogServerityLevel.high,
        origin: "check-service.ts",
      });
      this.logRepository.saveLog(log);
      this.errorCallbak && this.errorCallbak(errorMessage);
      return false;
    }
  }
}
