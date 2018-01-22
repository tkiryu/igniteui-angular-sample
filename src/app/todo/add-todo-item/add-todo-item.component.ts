import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss']
})
export class AddTodoItemComponent implements OnInit {

  title = '';

  @Output()
  add = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit() {
  }

  onTitleChange(event: string) {
    this.title = event;
  }

  endEdit(event: KeyboardEvent) {
    if (event.keyCode !== 13) {
      return;
    }

    if (!this.title) {
      return;
    }

    this.add.emit({ id: Date.now(), title: this.title, isDone: false });
    this.title = '';
  }

}
