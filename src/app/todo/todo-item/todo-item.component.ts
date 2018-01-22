import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  item: TodoItem;

  @Output()
  edit: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @Output()
  remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  isEditing = false;

  constructor() { }

  ngOnInit() {
    this.item = {...this.item};
  }

  startEdit() {
    this.isEditing = true;
  }

  onCheckChange(value: boolean) {
    this.item.isDone = value;
    this.edit.emit(this.item);
  }

  onTitleChange(value: string) {
    this.item.title = value;
  }

  endEdit(event: KeyboardEvent) {
    if (event.keyCode !== 13) {
      return;
    }
    this.edit.emit(this.item);
    this.isEditing = false;
  }

  onRemove() {
    this.remove.emit(this.item);
  }
}
