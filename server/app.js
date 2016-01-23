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

    server.listen(3000, () => {
      console.log("Init server on port 3000");
    });

    this.socket = new Socket(this);
    this.redis  = new Redis(this);
  }
}


//const app = new App();

//const todo = app.redis.add_todo({
  //name: "toto",
  //value: "test",
//});

//console.log("todo set: ", todo)

//app.redis.get_todo(todo.id)
//.then((todo) => {
//console.log("end get: ", todo);
//})
//.catch((reason) => {
//console.error(reason);
//});

module.exports = new App();
