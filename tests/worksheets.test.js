const fs=require('fs');const path=require('path');const root=path.join(__dirname,'..');
const js=fs.readFileSync(path.join(root,'site/assets/js/main.js'),'utf8');
const storage=fs.readFileSync(path.join(root,'site/assets/js/storage.js'),'utf8');
const exporter=fs.readFileSync(path.join(root,'site/assets/js/worksheet-export.js'),'utf8');
for(const needle of ['export-records','export-text','delete-records','inventory-form'])if(!js.includes(needle))throw new Error(`Worksheet control missing ${needle}`);
for(const needle of ['localStorage','saveRecords','clearRecords'])if(!storage.includes(needle))throw new Error(`Storage operation missing ${needle}`);
for(const needle of ['exportWorksheet','showExportPreview'])if(!exporter.includes(needle))throw new Error(`Export operation missing ${needle}`);
const privacy=fs.readFileSync(path.join(root,'site/privacy.html'),'utf8');if(!privacy.includes('does not transmit'))throw new Error('Privacy explanation missing');
console.log('worksheets: PASS');
