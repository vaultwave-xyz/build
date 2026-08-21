const sharp=require('sharp');
const path=require('path');
const fs=require('fs/promises');
const assets=path.join(__dirname,'..','assets');

async function main(){
  const source=path.join(assets,'vaultwave-official-logo-original.png');
  await sharp(source).png({compressionLevel:9,palette:true}).toFile(path.join(assets,'vaultwave-official-logo.png'));
  await sharp({create:{width:1200,height:630,channels:4,background:'#ffffff'}})
    .composite([{input:await sharp(source).resize({width:760,height:480,fit:'inside'}).png().toBuffer(),gravity:'centre'}])
    .png({compressionLevel:9,palette:true}).toFile(path.join(assets,'vaultwave-social-card.png'));
  for(const [name,width] of [['team-collins.jpg',1200],['team-melvin.jpeg',900],['team-resty.jpeg',900]]){
    const file=path.join(assets,name),tmp=file+'.tmp';
    await sharp(file).rotate().resize({width,withoutEnlargement:true}).jpeg({quality:82,mozjpeg:true}).toFile(tmp);
    await fs.rename(tmp,file);
  }
}
main().catch(error=>{console.error(error);process.exitCode=1});
