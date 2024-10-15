import { LogEntity, LogServerityLevel } from "../entities/log.entity";

// no se puede crear instancias de las clases abstractas y sirve para obligar el comportamiento de este Datasource
export abstract class LogDataSource {
    abstract saveLog(log :LogEntity) : Promise<void>;
    abstract getLogs(severityLevel: LogServerityLevel) : Promise<LogEntity[]>;
}

