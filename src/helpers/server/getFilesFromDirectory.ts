import fs from 'fs';
import path from 'path';

export const getFilesFromDirectory = (directoryPath: string) => {
  const dataDir = path.join(process.cwd(), directoryPath);
  const paths = fs
    .readdirSync(dataDir)
    .map((file) => `${directoryPath}/${file}`);

  return paths;
};
