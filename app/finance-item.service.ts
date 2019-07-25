import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FinanceItemLambdaService } from './finance-item-lambda-service';

@Injectable()
export class FinanceItemService {
  constructor(private lambdaService :FinanceItemLambdaService) {}

  get(username, id) {
    var financeItems :FinanceItem[]
    let request = {
      FunctionName : 'arn:aws:lambda:us-east-2:733278847362:function:getItems',
      InvocationType : 'RequestResponse',
      LogType : 'None',
      Payload: ""
    };
    //invoke lambda from the lambda service
    let response = this.lambdaService.invokeLambda(request);

    return response.body.financeItems;

    // let userRequest = {
    //   FunctionName : 'arn:aws:lambda:us-east-2:733278847362:function:getUser',
    //   InvocationType : 'RequestResponse',
    //   LogType : 'None',
    //   Payload : JSON.stringify(username)
    // }
    // //invoke lambda from the lambda service
    // let userResponse = this.lambdaService.invokeLambda(userRequest);
    // let itemKeys = userResponse.toString().split(',');

    // var financeItems;
    // for(var i=0;i<=itemKeys.size();i++) {
    //   let request = {
    //     FunctionName : 'arn:aws:lambda:us-east-2:733278847362:function:getItems',
    //     InvocationType : 'RequestResponse',
    //     LogType : 'None',
    //     Payload: JSON.stringify(itemKeys[i])
    //   };
    //   //invoke lambda from the lambda service
    //   let response = this.lambdaService.invokeLambda(request);
    //   //parse the response data from our function
    //   financeItems.push(JSON.parse(response.toString())
    //     .pipe(
    //       map((response: FinanceItemsResponse) => {
    //         return response.financeItems;
    //       })
    //     ));
    // }
  }
  
  add(financeItem) {
    let request = {
      FunctionName : 'saveItem',
      InvocationType : 'RequestResponse',
      LogType : 'None',
      item: financeItem
    };
    //invoke lambda from the lambda service
    this.lambdaService.invokeLambda(request);
    
    return financeItem;
  }
  
  delete(financeItem) {
    let request = {
      FunctionName : 'deleteItem',
      InvocationType : 'RequestResponse',
      LogType : 'None',
      id: financeItem.id
    };
    //invoke lambda from the lambda service
    this.lambdaService.invokeLambda(request);
    
    return financeItem;
  }
}

interface FinanceItemsResponse {
  financeItems: FinanceItem[]
}

interface FinanceItem {
  id: string;
  name: string;
  type: string;
  amount: string;
  occuranceDate: string;
  occuranceType: string;
}