const fs=require('fs');const path=require('path');const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'site/index.html'),'utf8');
for(const href of ['about.html','privacy.html','support.html','assets/css/styles.css','assets/js/main.js','manifest.webmanifest'])if(!html.includes(href))throw new Error(`Missing link ${href}`);
for(const p of ['site/about.html','site/privacy.html','site/launchpad.html','site/assets/js/main.js','site/assets/js/launchpad.js','site/support.html','site/assets/js/support.js','site/sw.js'])if(!fs.existsSync(path.join(root,p)))throw new Error(`Missing file ${p}`);
const fields=[...html.matchAll(/<(?:input|textarea|select)\b[^>]*>/gi)].map(m=>m[0].toLowerCase());
for(const field of fields){const name=(field.match(/\bname="([^"]+)"/)||[])[1]||'';const type=(field.match(/\btype="([^"]+)"/)||[])[1]||'';if(/(?:password|api[-_ ]?key|token|secret|private[-_ ]?key)/i.test(`${name} ${type}`))throw new Error('Potential credential-entry field found');}
const launch=fs.readFileSync(path.join(root,'site/launchpad.html'),'utf8');
for(const href of ['assets/css/launchpad.css','assets/js/launchpad.js','downloads.html','privacy.html','support.html'])if(!launch.includes(href))throw new Error(`Launchpad path missing ${href}`);
console.log('navigation: PASS');
