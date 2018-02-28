import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../../todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  todoList: TodoItem[];

  ngOnInit() {
    this.todoList = [
      { id: 1, title: 'ToDo 1', isDone: false },
      { id: 2, title: 'ToDo 2', isDone: true },
      { id: 3, title: 'ToDo 3', isDone: false },
    ];
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
