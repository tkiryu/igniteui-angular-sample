import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable()
export class TodoService {

  constructor() { }

  getTodoList(): TodoItem[] {
    return [
      { id: 1, title: 'Todo 1', isDone: false },
      { id: 2, title: 'Todo 2', isDone: true },
      { id: 3, title: 'Todo 3', isDone: false },
    ];
  }

}
