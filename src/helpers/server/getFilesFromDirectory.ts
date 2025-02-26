import fs from 'fs';
import path from 'path';

export const getFilesFromDirectory = (directoryPath: string) => {
  const dataDir = path.join(process.cwd(), directoryPath);

  if (!fs.existsSync(dataDir)) {
    throw new Error(`Directory ${dataDir} is not found`);
  }

  const paths = fs
    .readdirSync(dataDir)
    .map((file) => `${directoryPath}/${file}`);

  return paths;
};
