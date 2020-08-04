const os = require('os')

const log = console.log

log(os.cpus())
log(os.freemem())
log(os.totalmem())
log(os.homedir())
log(os.hostname())
log(os.platform())
log(os.type())
log(os.uptime())