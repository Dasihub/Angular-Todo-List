import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  interpolation: ['{{','}}']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      },
      {
        content: 'First todo',
        completed: false
      },
    ]
  }

  inputTodo: string = ''

  toggleDone(id: number): void {
    this.todos?.map((item, index) => {
      if (index == id) {
        return item.completed = !item.completed
      }
      return item
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((item, index) => index !== id)
  }

  addTodo() {
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = ''
  }

}
