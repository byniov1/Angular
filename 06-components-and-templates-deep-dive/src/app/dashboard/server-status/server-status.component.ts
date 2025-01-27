import { Component, OnInit } from '@angular/core';

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

export class ServerStatusComponent implements OnInit {
  protected currentStatus: Status = 'online';

  
  ngOnInit() {
    this.changeTime()
  }

  changeTime(){
    setInterval(() => {
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
