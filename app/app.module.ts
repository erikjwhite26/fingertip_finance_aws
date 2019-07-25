import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FinanceItemComponent } from './finance-item.component';
import { FinanceItemListComponent } from './finance-item-list.component';
import { FinanceItemFormComponent } from './finance-item-form.component';
import { FinanceItemService } from './finance-item.service';
import { FinanceItemLambdaService } from './finance-item-lambda-service';
// import { Lambda } from 'aws-sdk';
import { lookupListToken, lookupLists } from './providers';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Lambda,
    routing
  ],
  declarations: [
    AppComponent,
    FinanceItemComponent,
    FinanceItemListComponent,
    FinanceItemFormComponent
  ],
  providers: [
    FinanceItemService,
    FinanceItemLambdaService,
    { provide: lookupListToken, useValue: lookupLists },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}