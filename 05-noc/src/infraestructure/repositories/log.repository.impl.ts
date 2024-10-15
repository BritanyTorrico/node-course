import { LogEntity, LogServerityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogDataSource } from '../../domain/datasources/log.datasource';

export class LogRepositoryImpl implements LogRepository{
    
    constructor(
         private readonly logDataSource: LogDataSource, // se puede cambiar esto por cualquier otro datasource
    ){

    }
    async saveLog(log: LogEntity): Promise<void> {
        return this.logDataSource.saveLog(log);
    }
    async getLogs(severityLevel: LogServerityLevel): Promise<LogEntity[]> {
       return this.logDataSource.getLogs(severityLevel);
    }

} 