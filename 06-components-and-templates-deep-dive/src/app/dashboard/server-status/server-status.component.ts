import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Subscription } from 'rxjs';

type Status = 'online' | 'offline' | 'unknown';

enum StatusEnum {
  Online = 'online',
  Offline = 'offline',
  Unknow = 'unknown',
}

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  // protected currentStatus: Status = 'online';
  currentStatus = signal<Status>('online');

  // private intervalSub?: NodeJS.Timeout
  // private intervalId?: ReturnType<typeof setInterval>

  private destroyRef = inject(DestroyRef);

  // ngOnInit() {
  //   effect((onCleanup) => {
  //     this.changeTime();

  //     const timer = setTimeout(() => {
  //       console.log('Something');
  //     }, 1000);

  //     onCleanup(() => {
  //       clearTimeout(timer);
  //     });
  //   });
  // }

  changeTime() {
    // this.intervalId = setInterval(() => {
    const intrevalId = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        // this.currentStatus = StatusEnum.Online;
        this.currentStatus.set(StatusEnum.Online);
      } else if (rnd < 0.9) {
        // this.currentStatus = StatusEnum.Offline;
        this.currentStatus.set(StatusEnum.Offline);
      } else {
        // this.currentStatus = StatusEnum.Unknow;
        this.currentStatus.set(StatusEnum.Unknow);
      }
    }, 5000);

    this.destroyRef.onDestroy(() => clearInterval(intrevalId));
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalId)
  // }
}
