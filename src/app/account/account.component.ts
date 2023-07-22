import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CentralCodeService } from '../central-code.service';
import { AccountSerService } from '../account-ser.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input('accFromParentPrevFromNewAcc') account: {name: string, status: string};
  @Input('idsFromParent') id: number;


constructor(private loggService:CentralCodeService, private acc:AccountSerService){}
  onSetTo(status: string) {
    this.acc.updateStatus(this.id, status)
    this.acc.statusUpdate.emit(status)
    // console.log('A server status changed, new status: ' + status);
  }
}
