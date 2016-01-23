// ************************************************************************** //
//                                                                            //
//   app.js                                                                   //
//                                                                            //
//   By: peltoche <dev@halium.fr>                                             //
//                                                                            //
//   Created: 2016/01/23                                                      //
//                                                                            //
// ************************************************************************** //

"use strict"


const server  = require('http').createServer();
const Socket  = require("./managers/io");
const Redis   = require("./managers/redis");

class App {
  constructor() {
    this.server = server;

    this.socket = new Socket(this);
    this.redis  = new Redis(this);


    server.listen(3000, () => {
      console.log("Init server on port 3000");
    });
  }
}

module.exports = new App();
