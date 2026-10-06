const fs=require('fs');const path=require('path');const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'site/support.html'),'utf8');
for(const needle of ['PayPal','GitHub Sponsors','Buy me a book','NOWPayments','Stripe','Substack','Support'])if(!html.includes(needle))throw new Error(`Support option missing ${needle}`);
for(const href of ['support.css','support.js','privacy.html'])if(!html.includes(href))throw new Error(`Support path missing ${href}`);
if(!html.toLowerCase().includes('third-party services'))throw new Error('Third-party disclosure missing');
console.log('support: PASS');
