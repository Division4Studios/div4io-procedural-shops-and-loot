var fs = require('fs');

const version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;

var mod = JSON.parse(fs.readFileSync('module-template.json', 'utf8'));

mod.version = version;
mod.download = `https://github.com/Division4Studios/div4io-procedural-shops-and-loot/releases/download/${version}/div4io-procedural-shops-and-loot.zip`;

console.log(JSON.stringify(mod));