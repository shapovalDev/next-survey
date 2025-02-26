import path from 'path';
import fs from 'fs';

export const getDataFromJSON = (filePath: string) => {
  const surveyPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(surveyPath)) {
    throw new Error(`File ${filePath} is not found`);
  }

  const survey = JSON.parse(fs.readFileSync(surveyPath, 'utf-8'));

  return survey;
};
