import { Component } from '@angular/core';

type Status = 'online' | 'offline' | 'unknown'

enum StatusEnum {
  Online = 'online',
  Offline = 'offline',
  Unknow = 'unknown'
}

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

export class ServerStatusComponent {
  protected currentStatus: Status = 'online';

  constructor(){
    this.changeTime()
  }

  changeTime(){

    setInterval(() => {
      // if(this.currentStatus === 'online'){
      //   this.currentStatus = 'offline'
      // } else if(this.currentStatus === 'offline') {
      //   this.currentStatus = 'unknown'
      // } else {
      //   this.currentStatus = 'online'
      // }

      const rnd = Math.random();

      if(rnd < 0.5){
        this.currentStatus = StatusEnum.Online
      } else if (rnd < 0.9) {
        this.currentStatus = StatusEnum.Offline
      } else {
        this.currentStatus = StatusEnum.Unknow
      }

    }, 5000)
  }
}
