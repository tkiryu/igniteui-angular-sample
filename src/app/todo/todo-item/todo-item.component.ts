import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  isEditing = false;

  @Input() todo: TodoItem;

  @Output() edit = new EventEmitter<TodoItem>();

  @Output() remove = new EventEmitter<TodoItem>();

  ngOnInit() {
    this.todo = {...this.todo};
  }

  onCheckChange(event: boolean) {
    this.todo.isDone = event;
    this.edit.emit(this.todo);
  }

  startEdit() {
    this.isEditing = true;
  }

  onTitleChange(value: string) {
    this.todo.title = value;
  }

  endEdit(event: KeyboardEvent) {
    if (event.keyCode !== 13) {
      return;
    }
    this.edit.emit(this.todo);
    this.isEditing = false;
  }

  onRemove() {
    this.remove.emit(this.todo);
  }
}
