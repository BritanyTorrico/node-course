import { error } from "console";
import { LogRepository } from "../../repository/log.repository";
import { LogEntity, LogServerityLevel } from "../../entities/log.entity";

interface CheckServiceUsaCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;

type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUsaCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly susccessCallbak: SuccessCallback,
    private readonly errorCallbak: ErrorCallback,
  ) {}
  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on check service ${url}`);
      }
      const log = new LogEntity(
        ` service ${url} was working`,
        LogServerityLevel.low
      );
      this.logRepository.saveLog(log);
      this.susccessCallbak();
      return true;

    } catch (error) {
      const errorMessage = `${url} is not ok. ${error}`;
      const log = new LogEntity(
        errorMessage,
        LogServerityLevel.high
      );
      this.logRepository.saveLog(log);
      this.errorCallbak(errorMessage);
      return false;
    }
  }
}
