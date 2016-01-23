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
    console.log("server: ", server)
    this.server = server;

    this.socket = new Socket(this);
    this.redis  = new Redis(this);


    server.listen(3000, () => {
      console.log("Init server on port 3000");
    });
  }
}


const app = new App();

const todo = app.redis.add_todo({
  name: "toto",
  value: "test",
});

console.log("todo set: ", todo)

app.redis.get_todo(todo.id)
.then((todo) => {
console.log("get: ", todo);
})

//client1.on("subscribe", function (channel, count) {
//});

//client1.on("message", function (channel, message) {
    //console.log("client1 channel " + channel + ": " + message);
    //msg_count += 1;
    //if (msg_count === 3) {
        //client1.unsubscribe();
        //client1.end();
        //client2.end();
    //}
//});

//client1.subscribe("a nice channel");
//

module.exports = new App();
