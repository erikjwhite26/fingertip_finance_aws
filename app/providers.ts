import { InjectionToken } from '@angular/core';

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
  types: ['INCOME', 'BILL'],
  occuranceTypes: ['ONE-TIME', 'WEEKLY', 'BI-WEEKLY', 'MONTHLY']
};