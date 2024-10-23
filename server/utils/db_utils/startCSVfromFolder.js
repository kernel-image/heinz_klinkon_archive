import fs from 'fs';
import path from 'path';

const folderPath = process.argv[2];
const headerRow = process.argv[3].split(',');
const outputPath = process.argv[4];

const csvData = [headerRow.join('\t')];

fs.readdirSync(folderPath).forEach((file) => {
  const filename = path.basename(file, path.extname(file));
  csvData.push(`${filename}`);
});

const csvString = csvData.join('\n');
let outputFile = outputPath || 'output.csv';
//check if outputFile is valid
if (path.extname(outputFile) !== '.csv') {
  outputFile += '.csv';
}

fs.writeFileSync(outputFile, csvString);