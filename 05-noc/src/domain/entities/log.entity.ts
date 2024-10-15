export enum LogServerityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  message: string;
  level: LogServerityLevel;
  origin: string;
  createdAt?: Date;
}

export class LogEntity {
  public level: LogServerityLevel; // enum
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const {message, level, origin, createdAt = new Date()} = options;
    this.message = message;
    this.level = level;
    this.createdAt = new Date();
    this.origin = origin;
  }
  //Crea instancias basado en el JSON {level: high, message: "hoala", createdAt: new Date}
  static fromJson = (json: string): LogEntity => {
    const { message, level, origin, createdAt } = JSON.parse(json);
    const log = new LogEntity({
        message,
        level,
        origin,
        createdAt
    });

    return log;
  };
}


