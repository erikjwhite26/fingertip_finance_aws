import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-finance-item',
  templateUrl: 'app/finance-item.component.html',
  styleUrls: ['app/finance-item.component.css']
})
export class FinanceItemComponent {
  @Input() financeItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.financeItem);
  }
}
