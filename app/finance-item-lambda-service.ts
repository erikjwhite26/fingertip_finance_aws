import { Injectable } from '@angular/core';
//import { Lambda } from 'aws-sdk';

@Injectable()
export class FinanceItemLambdaService {

    invokeLambda(request){
        let responseOptions;
        responseOptions = {
            body: {financeItems: JSON.parse(JSON.stringify(this._financeItems))},
            status: 200
          };
        return responseOptions;
    }

    _financeItems = [
        {
          id: 1,
          name: "Bill",
          type: "BILL",
          occuranceType: "WEEKLY",
          occuranceDate: "01/01/2019",
          amount: "100"
        },
        {
            id: 2,
            name: "Income",
            type: "INCOME",
            occuranceType: "MONTHLY",
            occuranceDate: "01/02/2019",
            amount: "200"
          }
      ];
}