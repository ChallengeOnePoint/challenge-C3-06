
"use strict"

const SocketIo = require("socket.io");

class Io {
  constructor(app) {
    this._app = app;

    this.io = SocketIo(this.server);

    this.__set_listeners();
  }


  __set_listeners() {
    this.io.on("connection", (socket) => {

      console.log("new Connection");

      socket.join("todo");

      socket.on("add_todo", (data) => {
        this._app.redis.add_todo(data);

      });

      socket.on("get_todo", (data) => {

      });

      socket.on("update_todo", (data) => {

      });

      socket.on("get_todos", (data) => {

      });

      socket.on("remove_todos", (data) => {

      });

    });
  }
}


module.exports = Io;
