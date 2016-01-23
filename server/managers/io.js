
"use strict"

const SocketIo = require("socket.io");

class Io {
  constructor(app) {
    this.io = SocketIo(app);
    this.__set_listeners();
  }


  __set_listeners() {
    this.io.on("connection", (socket) => {

      console.log("new Connection");

      socket.join("todo");

      socket.on("set_todo", (data) => {

      });

      socket.on("get_todo", (data) => {

      });

      socket.on("get_todos", (data) => {

      });

      socket.on("add_todo", (data) => {

      });

      socket.on("update_todo", (data) => {

      });

    });
  }
}


module.exports = Io;
