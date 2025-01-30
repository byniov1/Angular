import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogginService {
  log(message: string) {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`[${timeStamp}] : ${message}`);
  }
}
