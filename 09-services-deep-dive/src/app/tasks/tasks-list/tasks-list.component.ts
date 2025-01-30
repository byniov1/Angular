import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TasksServiceToken } from '../../../main';
import {
  TASK_STATUS_OPTIONS,
  TaskStatusOptions,
  TaskStatusProvider,
} from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  // providers: [{ provide: TASK_STATUS_OPTIONS, useValue: TaskStatusOptions }],
  // providers: [
  //   { provide: TASK_STATUS_OPTIONS, useFactory: () => TaskStatusOptions },
  // ],
  providers: [TaskStatusProvider],
})
export class TasksListComponent {
  // private tasksService = inject(TasksService);
  private tasksService = inject<TasksService>(TasksServiceToken);

  private selectedFilter = signal<string>('all');

  public taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  // public tasks = this.tasksService.allTasks;
  public tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
