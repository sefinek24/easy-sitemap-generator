const kleur = require('kleur');

const logInfo = msg => console.log(kleur.blue().bold('[INFO]:'), msg);
const logSuccess = msg => console.log(kleur.green().bold('[SUCCESS]:'), msg);
const logError = msg => console.error(kleur.red().bold('[ERROR]:'), msg);
const logWarning = msg => console.warn(kleur.yellow().bold('[WARN]:'), msg);

module.exports = { logInfo, logSuccess, logError, logWarning };