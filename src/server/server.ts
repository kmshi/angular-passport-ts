/// <reference path="typings/tsd.d.ts" />

import todo = require("../general/todo");

export class Server{
	static execute():void{
		var item: todo.TodoItem = new todo.TodoItem("Yes", true);
		console.log(item.title);
		console.log("Hello");
		console.dir(process.execPath);
	}
}