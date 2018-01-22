import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodoList();
  }

  handleEdit(event: TodoItem) {
    this.todoList = this.todoList.map((todo: TodoItem) => {
      if (todo.id === event.id) {
        todo = {...todo, ...event};
      }
      return todo;
    });
  }

  handleRemove(event: TodoItem) {
    this.todoList = this.todoList.filter((todo: TodoItem) => todo.id !== event.id);
  }

  handleAdd(event: TodoItem) {
    this.todoList = [...this.todoList, event];
  }

}
