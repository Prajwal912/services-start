import { Component, EventEmitter, Output } from '@angular/core';
import { AccountSerService } from '../account-ser.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private account:AccountSerService){
    this.account.statusUpdate.subscribe( (status:string) => alert("the status :" + status))
  }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.account.addAccount(accountName,accountStatus)
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
