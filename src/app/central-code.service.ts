import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentralCodeService {

  constructor() { }
  logStatusChanged(LoggStatus: string, id: any){
    console.log('A server status changed, new status: ' + LoggStatus, id);
  }
}
