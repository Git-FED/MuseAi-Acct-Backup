const fs=require('fs');const path=require('path');const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'site/index.html'),'utf8');
if(!html.includes('class="skip-link"'))throw new Error('Skip link missing');
if(!html.includes('aria-live'))throw new Error('Live status region missing');
if(!html.includes('Do not enter passwords, API keys, tokens, or other secrets.'))throw new Error('Exact safety warning missing');
for(const button of [...html.matchAll(/<button[^>]*>(.*?)<\/button>/gsi)])if(!button[1].trim()&&!/aria-label=/i.test(button[0]))throw new Error('Unnamed button found');
for(const file of ['site/downloads.html','site/assets/js/storage.js','site/assets/js/worksheet-export.js','site/assets/js/incident-tracker.js'])if(!fs.existsSync(path.join(root,file)))throw new Error(`Missing accessibility-related file ${file}`);
console.log('accessibility: PASS');
