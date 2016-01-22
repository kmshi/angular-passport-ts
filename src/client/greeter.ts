import todo = require("../common/todo");

export class Greeter
{
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor (element: HTMLElement)
    {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerHTML = new Date().toUTCString();
    }

    start()
    {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 1000);
        var item: todo.TodoItem = new todo.TodoItem("Yes", true);
        console.log(item.title);
    }

    stop()
    {
        clearInterval(this.timerToken);
    }
}

