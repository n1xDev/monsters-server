const ws = require('../servers/ws/ws').ws

let bootstrap = {
  all() {
    // Web socket server and his helpers bootstrap
    ws.run();
  }
}

module.exports = {
  bootstrap
}