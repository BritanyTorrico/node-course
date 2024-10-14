import fs from 'fs';

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor(
    // Puedes agregar un StorageRepository si lo necesitas
  ) {}

  execute = ({
    fileContent,
    fileDestination = 'outputs',
    fileName = 'table',
  }: Options): boolean => {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      console.log(`Archivo guardado exitosamente como ${fileName}`);
      return true; 
    } catch (err) {
      console.error("Error al escribir el archivo:", err);
      return false; 
    }
  };
}