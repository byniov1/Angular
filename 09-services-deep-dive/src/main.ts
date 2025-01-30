import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

export const TasksServiceToken = new InjectionToken('TASK_SERVICE');

bootstrapApplication(AppComponent, {
  providers: [
    // TasksService
    {
      provide: TasksServiceToken,
      useClass: TasksService,
    },
  ],
}).catch((err) => console.error(err));
// bootstrapApplication(AppComponent).catch((err) => console.error(err));
