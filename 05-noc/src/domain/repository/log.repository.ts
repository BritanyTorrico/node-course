import { LogEntity, LogServerityLevel } from "../entities/log.entity";

// la diferencia entre estre y el datasource es que permite a nosotros llamar metodos que se encuentran en el datasource
export abstract class LogRepository {
    abstract saveLog(log :LogEntity) : Promise<void>;
    abstract getLogs(severityLevel: LogServerityLevel) : Promise<LogEntity[]>;
}
