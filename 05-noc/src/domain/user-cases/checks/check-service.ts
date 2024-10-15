import { error } from "console";

interface CheckServiceUsaCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;

type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUsaCase {
  constructor(
    private readonly susccessCallbak: SuccessCallback,
    private readonly errorCallbak: ErrorCallback
  ) {}
  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on check service ${url}`);
      }
      this.susccessCallbak();
      return true;
    } catch (error) {
      console.log(`${error} `);
      this.errorCallbak(`${error}`);
      return false;
    }
  }
}
