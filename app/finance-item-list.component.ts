import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FinanceItemService } from './finance-item.service';

@Component({
  selector: 'mw-finance-item-list',
  templateUrl: 'app/finance-item-list.component.html',
  styleUrls: ['app/finance-item-list.component.css']
})
export class FinanceItemListComponent {
  username = 'username'
  type = '';
  financeItems = [];

  constructor(
    private financeItemService: FinanceItemService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        let type = params['type'];
        if(type.toLowerCase() === 'all') {
          type = '';
        }
        this.getFinanceItems(this.username, type);
      });
  }

  onFinanceItemDelete(financeItem) {
    this.financeItemService.delete(financeItem)
      .subscribe(() => {
        this.getFinanceItems(this.username, this.type);
      });
  }

  getFinanceItems(username, type) {
    this.type = type;
    this.financeItems = this.financeItemService.get(username, type);
  }
}
