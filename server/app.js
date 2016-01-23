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

    this.socket = new Socket(this);
    this.redis  = new Redis(this);


    server.listen(3000, () => {
      console.log("Init server on port 3000");
    });
  }
}


//const app = new App();

//let todo = app.redis.add_todo({
  //name: "toto",
  //value: "test",
//});

//console.log("todo set: ", todo)


//app.redis.get_todo(todo.id)
//.then((res) => {
  //todo = res;
  //console.log("end get: ", todo);
//})


//app.redis.get_todos()
//.then((todos) => {
  //console.log("todos 2: ", todos)
//})

//.then(() => {
  //const todo2 = app.redis.update_todo({
    //id: todo.id,
    //name: "toto_update",
    //value: "test_update",
    //update: "true"
  //});

  //console.log("todo set: ", todo2)

  //app.redis.get_todo(todo2.id)
  //.then((todo) => {
    //console.log("end get: ", todo);
  //})
  //.then(() => {
    //app.redis.remove_todo(todo2.id);
    //app.redis.get_todo(todo.id)
    //.then((todo) => {
      //console.log("end get: ", todo);
    //})
  //})
  //.catch((reason) => {
    //console.error(reason);
  //});

//})
//.catch((reason) => {
  //console.error(reason);
//});

module.exports = new App();
