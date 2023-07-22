import { Injectable ,Input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentralCodeService {
  constructor() { }
  logStatusChanged(LoggStatus: string){
    console.log('A server status changed, new status: ' + LoggStatus);
  }
}
