const fs=require('fs');const path=require('path');const root=path.join(__dirname,'..');
function readJson(p){return JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));}
const providers=readJson('site/assets/data/providers.json');const faqs=readJson('site/assets/data/faq.json');const stress=readJson('site/assets/data/stress-test.json');
for(const p of providers)for(const k of ['id','name','status','description','source_url','last_verified'])if(!p[k])throw new Error(`Provider missing ${k}`);
for(const f of faqs)for(const k of ['id','question','answer','category'])if(!f[k])throw new Error(`FAQ missing ${k}`);
for(const s of stress)for(const k of ['id','title','observation','limitations','status'])if(!s[k])throw new Error(`Stress test missing ${k}`);
const files=fs.readdirSync(path.join(root,'site/assets/img'));if(files.length<9)throw new Error('Expected image assets are missing');
console.log('data-validation: PASS');
