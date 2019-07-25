import { Routes, RouterModule } from '@angular/router';

import { FinanceItemFormComponent } from './finance-item-form.component';
import { FinanceItemListComponent } from './finance-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: FinanceItemFormComponent },
  { path: ':type', component: FinanceItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
