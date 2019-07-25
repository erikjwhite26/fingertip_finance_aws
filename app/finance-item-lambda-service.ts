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
        
    //     var lambdaService = new Lambda({accessKeyId: 'AKIA2VOWTIGBNR7XPBQD', secretAccessKey: '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', region: 'us-east-2', apiVersion: '2015-03-31'});
    //     lambdaService.invoke(request, function(error, data) {
    //         if (error) {
    //           prompt(error.message);
    //           return null;
    //         } else {
    //           return JSON.parse(data.Payload.toString());
    //         }
    //       });
    //     return null;
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