const EventEmitter = require('events');

let url = "localost/log";

class Logger extends EventEmitter{
    log(message) {
        // Send an HTTP request
        console.log(message);
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}


module.exports = Logger;