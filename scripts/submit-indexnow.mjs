const key='e01c9b0f009245f1b9016355c982f5bb';
const urls=['','about/','services/','services/strategy-intelligence/','services/creative-production/','services/media-pr-activation/','services/digital-technology/','work/','leadership/','insights/','contact/'].map(path=>`https://vaultwave.agency/${path}`);
const response=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'content-type':'application/json; charset=utf-8'},body:JSON.stringify({host:'vaultwave.agency',key,keyLocation:`https://vaultwave.agency/${key}.txt`,urlList:urls})});
if(!response.ok) throw new Error(`IndexNow returned ${response.status}: ${await response.text()}`);
console.log(`Submitted ${urls.length} URLs to IndexNow (${response.status}).`);
