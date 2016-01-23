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


const app     = require('http').createServer();
const Socket  = require("./managers/io");

class App {
  constructor() {

    this.socket = new Socket(app);
  }
}

app.listen(3000, () => {
  console.log("Init server on port 3000");
});

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
