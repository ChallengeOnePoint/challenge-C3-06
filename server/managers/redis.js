

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


  update_todo(todo) {
    console.log("update: ", todo)
    this.__set(todo.id, todo);
    return todo;
  }

  get_todo(todo_id) {

    return this.__get(todo_id)
    .catch((reason) => {
      console.error(reason);
    });
  }


  get_todos() {
    return this.__get_all()
    .catch((reason) => {
      console.error(reason);
    });
  }


  remove_todo(todo_id) {
    this.__remove(todo_id);
  }


  __set(key, value) {
    const value_raw = JSON.stringify(value);

    console.log("Set todo: ", key);
    this.client.hset("todo", key, value_raw);
  }


  __get(key) {
    return new Promise((resolve, reject) => {
      console.log("get")
      this.client.hget("todo", key, (err, reply) => {
        if (err) {
          reject(err);
        }

        console.log("Get todo: ", key);
        const content = JSON.parse(reply);

        resolve(content);
      });
    });
  }



  __get_all() {
    return new Promise((resolve, reject) => {
      console.log("get")
      this.client.hgetall("todo", (err, reply) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        try {
          console.log("reply: ", reply)
          const content = JSON.parse(reply);
        }
        catch (e) {
          resolve([]);
        }
      });
    });
  }

  __remove(key) {
    console.log("Remove todo: ", key);
    this.client.del(key);
  }

}

module.exports = Redis;
