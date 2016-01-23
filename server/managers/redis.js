

"use strict"


const redis = require("redis");
const uuid  = require("node-uuid");

class Redis {
  constructor(app) {

    this._app = app;

    this.client = redis.createClient();
  }

  set_todo(data) {

  }


  add_todo(todo) {

    const new_id = uuid.v4();
    console.log("new_id: ", new_id)

    todo.id = new_id;

    this.__send(`todo:${new_id}`, todo);
  }


  __send(key, value) {
    const value_raw = JSON.stringify(value);

    this.client.set(key, value_raw);
  }
}

module.exports = Redis;
