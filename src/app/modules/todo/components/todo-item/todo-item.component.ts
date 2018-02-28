import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { TodoItem } from '../../todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  isEditing = false;

  @Input() todo: TodoItem;

  @Output() edit = new EventEmitter<TodoItem>();

  @Output() remove = new EventEmitter<TodoItem>();

  ngOnInit() {
    this.todo = {...this.todo};
  }

  toggleItemState(value: boolean) {
    this.todo.isDone = value;
    this.edit.emit(this.todo);
  }

  startEditItem(input: HTMLInputElement) {
    this.isEditing = true;
  }

  onKeydown(event: KeyboardEvent) {
    // Esc の場合は入力をキャンセル
    if (event.keyCode === 27) {
      this.isEditing = false;
      return;
    }
    // Enter 以外の場合は入力中のまま
    if (event.keyCode !== 13) {
      return;
    }

    this.endEditItem(event.target as HTMLInputElement);
  }

  endEditItem(input: HTMLInputElement) {
    this.todo.title = input.value;
    this.edit.emit(this.todo);

    this.isEditing = false;
  }

  removeItem() {
    this.remove.emit(this.todo);
  }
}
