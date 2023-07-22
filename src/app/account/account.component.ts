import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CentralCodeService } from '../central-code.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[CentralCodeService]
})
export class AccountComponent {
  @Input('accFromParentPrevFromNewAcc') account: {name: string, status: string};
  @Input('idsFromParent') id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

constructor(private loggService:CentralCodeService){}
  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggService.logStatusChanged(status, this.id)
    // console.log('A server status changed, new status: ' + status);
  }
}
