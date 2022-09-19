import { Todo } from "./todo.class.js";


export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);    //
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
         
        this.todos = this.todos.filter(todo => {
            return (todo.id != id)
        })
        this.guardarLocalStorage();
    }

    marcarCompleato(id) {
         
        for(const todo of this.todos) {
            console.log(id,todo.id)

            if(todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompleados() {
        this.todos = this.todos.filter(todo => {
            return (!todo.completado)
        })
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todo')) 
                    ?  JSON.parse(localStorage.getItem('todo'))
                    :  [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));

    }
}