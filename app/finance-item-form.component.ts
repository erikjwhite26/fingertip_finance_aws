import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { FinanceItemService } from './finance-item.service';
import { lookupListToken } from './providers';

@Component({
  selector: 'mw-finance-item-form',
  templateUrl: 'app/finance-item-form.component.html',
  styleUrls: ['app/finance-item-form.component.css']
})
export class FinanceItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private financeItemService: FinanceItemService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      type: this.formBuilder.control(''),
      amount: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?$')
      ])),
      occuranceDate: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
      occuranceType: this.formBuilder.control('')
    });
  }

  onSubmit(financeItem) {
    var uuidv4 = require('uuid/v4');
    financeItem.id = uuidv4();
    this.financeItemService.add(financeItem)
      .subscribe(() => {
        this.router.navigate(['/', financeItem.id]);
      });
  }
}
