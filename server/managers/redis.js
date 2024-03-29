

"use strict"


const redis = require("redis");
const uuid  = require("node-uuid");

class Redis {
  constructor(app) {

    this._app = app;

    this.client = redis.createClient();
  }

  add_todo(todo) {

    const new_id = uuid.v4();

    todo.id = new_id;

    this.__set(new_id, todo);
    return todo;
  }


  update_todo(todo) {
    this.__set(todo.id, todo);
    return todo;
  }

  get_todo(todo_id) {

    return this.__get(todo_id)
    .catch((reason) => {
    });
  }


  get_todos() {
    return this.__get_all()
    .catch((reason) => {
    });
  }


  remove_todo(todo) {
    this.__remove(todo.id);
  }


  __set(key, value) {
    const value_raw = JSON.stringify(value);

    this.client.hset("todo", key, value_raw);
  }


  __get(key) {
    return new Promise((resolve, reject) => {
      this.client.hget("todo", key, (err, reply) => {
        if (err) {
          reject(err);
        }

        const content = JSON.parse(reply);

        resolve(content);
      });
    });
  }


  __get_all() {
    return new Promise((resolve, reject) => {
      this.client.hgetall("todo", (err, reply) => {
        if (err) {
          reject(err);
        }

        resolve(reply);
      });
    });
  }


  __remove(key) {
    this.client.hdel("todo", key);
  }
}

module.exports = Redis;
