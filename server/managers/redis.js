

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

    todo.id = new_id;

    this.__set(`todo:${new_id}`, todo);
    return todo;
  }


  get_todo(todo_id) {
    const key = `todo:${todo_id}`;

    return this.__get(key)
    .catch((reason) => {
      console.error(reason);
    });


  }


  __set(key, value) {
    const value_raw = JSON.stringify(value);

    console.log("set in redis")
    this.client.set(key, value_raw);
  }


  __get(key) {
    return new Promise((resolve, reject) => {
      console.log("get")
      this.client.get(key, (err, reply) => {
        if (err) {
          return Promise.reject(err);
        }

        const content = JSON.parse(reply);

        return Promise.resolve(content);
      });
    });
  }

}

module.exports = Redis;
