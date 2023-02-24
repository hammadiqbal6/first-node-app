const Logger = require('./logger');
const EventEmitter = require('events');

const logger = new Logger();
logger.on('messageLogged', (args) =>{
    console.log('Listener called', args);
});
logger.log("helo");