
"use strict"

const SocketIo = require("socket.io");

class Io {
  constructor(app) {
    this._app = app;

    this.io = SocketIo(this._app.server);

    this.__set_listeners();
  }


  __set_listeners() {
    this.io.on("connection", (socket) => {

      console.log("new Connection");

      socket.join("todo");

      socket.on("add_todo", (data) => {
        const new_todo = this._app.redis.add_todo(data);

        this.io.in("todo").emit("new_todo", new_todo);
      });

      socket.on("update_todo", (data) => {
        const updated_todo = this._app.redis.update_todo(data);

        this.io.in("todo").emit("updated_todo", updated_todo);
      });

      socket.on("get_todos", (data) => {
        return this._app.redis.get_todos()
        .then((list_todo) => {
          this.socket.emit("todos", list_todo);
        });

      });

      socket.on("remove_todos", (data) => {

      });

    });
  }
}


module.exports = Io;
