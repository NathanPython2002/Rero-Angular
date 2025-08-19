import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: ` <button (click)="addItem()">Add Item</button> `,
})
export class Child {
  // 👉 Output property (type string)
  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
