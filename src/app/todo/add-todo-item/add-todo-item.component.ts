import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoItemComponent implements OnInit {

  @Output() add = new EventEmitter<TodoItem>();

  ngOnInit() {
  }

  addItem(input: HTMLInputElement) {
    if (!input.value) {
      return;
    }

    this.add.emit({ id: Date.now(), title: input.value, isDone: false });
    input.value = '';
  }

  onKeydown(event: KeyboardEvent, input: HTMLInputElement) {
    // Esc の場合は入力をキャンセル
    if (event.keyCode === 27) {
      input.value = '';
      return;
    }
    // Enter 以外の場合は入力中のまま
    if (event.keyCode !== 13) {
      return;
    }

    this.addItem(input);
  }
}
