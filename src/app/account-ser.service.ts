import { EventEmitter, Injectable } from '@angular/core';
import { CentralCodeService } from './central-code.service';

@Injectable({
  providedIn: 'root'
})
export class AccountSerService {


  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
constructor(private logg:CentralCodeService){}

statusUpdate = new EventEmitter <string>();

  addAccount(names: string, status: string){
    this.accounts.push({name:names, status:status});
    this.logg.logStatusChanged(status)
  }
  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }
}
